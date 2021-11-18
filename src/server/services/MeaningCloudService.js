const axios = require("axios");

class MeaningCloudService {
  constructor(config) {
    if (!config) {
      console.log("no config!!!!🤦🏿‍♂️🤦🏿‍♂️🤦🏿‍♂️");
    }
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

    console.log(`form data is ${JSON.stringify(formData)}`);

    const requestOptions = {
      method: "POST",
      data: formData,
      redirect: "follow",
    };

    const response = await axios(
      `https://api.meaningcloud.com/${this.api}`,
      requestOptions
    );

    console.log(response.data);
  }
}

module.exports = MeaningCloudService;
