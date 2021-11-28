describe("The meaningcloud service", () => {
  it("should fail if there is no response data from the api", async () => {

    await expect().rejects.toThrow("")
  });
});
