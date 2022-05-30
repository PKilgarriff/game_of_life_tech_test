const hello = require("./game-of-life");

describe("Infrastructure", () => {
  test("It says hello world", () => {
    expect(hello()).toEqual("Hello World");
  });
});
