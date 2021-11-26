const axios = require("axios");

class MeaningCloudService {
  constructor(config) {
    this.license_key = config.license_key;
    this.language = config.language;
  }

  async sendRequest(text) {
    let response;
    const formData = {
      key: this.license_key,
      lang: this.language,
      txt: text,
      tt: "a",
    };

    const requestOptions = {
      method: "POST",
      data: formData,
      redirect: "follow",
    };
    try {
      response = await axios(
        `https://api.meaningcloud.com/topics-2.0`,
        requestOptions
      );
    } catch (error) {
      console.log(error);
    }

    if (!response.data) {
      throw new error(`No response data from the api`);
    }

    return response.data;
  }
}

module.exports = MeaningCloudService;
