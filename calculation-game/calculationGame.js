describe("Calculation Game", () => {
  it("to check the page title", () => {
    browser.get("http://localhost:4200");
    browser.driver.getTitle().then((pageTitle) => {
      expect(pageTitle).toEqual("Calculation Game");
    });
  });
});
