const getTopic = require("../../../routes/topics/get");

describe("The get route", () => {
  it("should return a response", async () => {
    const request = { txt: "moyoni mwangu ni ninateseka" };
    const response = await getTopic.get(request);
    expect(response).toBeDefined();
  });
});
