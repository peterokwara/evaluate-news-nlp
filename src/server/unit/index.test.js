import indexJs from "../index";

describe("The index file", () => {
  it("should start", async () => {
    await expect(indexJs).toBeDefined();
  });
});
