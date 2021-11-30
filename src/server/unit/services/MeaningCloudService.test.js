import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const MeaningCloudService = require("../../services/MeaningCloudService");
const mockConfiguration = require("../__mocks__/mockConfiguration");

const URL = "https://api.meaningcloud.com/sentiment-2.1";

const requestOptions = {
  method: "POST",
  data: {
    key: mockConfiguration.license_key,
    lang: "en",
    tt: "a",
  },
  redirect: "follow",
};

describe("The meaningcloud service", () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("should have a data field", async () => {
    const text = "mananama";

    // has a data field
    const mockResponse = {
      data: {},
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    mock.onPost(`${URL}`).reply(200, mockResponse);

    const meaningCloudService = new MeaningCloudService(mockConfiguration);
    const response = await meaningCloudService.sendRequest(text);

    expect(response.data).toBeDefined();
  });
});
