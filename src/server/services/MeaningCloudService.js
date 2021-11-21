const axios = require("axios");

class MeaningCloudService {
  constructor(config) {
    this.license_key = config.license_key;
    this.language = config.language;
    this.api = config.api;
  }

  async sendRequest(text = "hello world") {
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

    const response = await axios(
      `https://api.meaningcloud.com/${this.api}`,
      requestOptions
    );

    if (!response) {
      throw new error(`Unable to send request to meaningcloud api${error}`);
    }

    return response.data;
  }
}

module.exports = MeaningCloudService;
