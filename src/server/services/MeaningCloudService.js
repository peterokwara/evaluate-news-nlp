const axios = require("axios");

class MeaningCloudService {
  constructor(config) {
    this.license_key = config.license_key;
    this.language = config.language;
    this.api = config.api;
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
        `https://api.meaningcloud.com/${this.api}`,
        requestOptions
      );
    } catch (error) {
      console.log(error);
    }
    return response.data;
  }
}

module.exports = MeaningCloudService;
