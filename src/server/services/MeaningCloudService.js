const axios = require("axios");

class MeaningCloudService {
  constructor(config) {
    this.license_key = config.license_key;
  }

  /**
   * Format the input data and allow for dynamic data, be it url or text
   * @param data The data sent from the UI
   * @returns formData that is good for a fetch request
   */
  formatData(data) {
    // Key value pair from UI data
    let dataKey;
    let dataValue;

    // if there is text
    if (data) {
      // Separate key and value from the object data sent from ui
      dataKey = Object.keys(data);
      dataValue = Object.values(data).toString();
    }

    const formData = {
      key: this.license_key,
      lang: "en",
      tt: "a",
    };

    formData[dataKey] = dataValue;

    return formData;
  }

  async sendRequest(text) {
    // format the data well
    const formData = this.formatData(text);

    let response;

    const requestOptions = {
      method: "POST",
      data: formData,
      redirect: "follow",
    };
    try {
      response = await axios(
        `https://api.meaningcloud.com/sentiment-2.1`,
        requestOptions
      );
    } catch (error) {
      console.log(error);
    }

    return response.data;
  }
}

module.exports = MeaningCloudService;
