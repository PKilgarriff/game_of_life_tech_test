const { hello, nextGeneration } = require("./game-of-life");

describe("hello", () => {
  test("It says hello world", () => {
    expect(hello()).toEqual("Hello World");
  });
});

describe("nextGeneration", () => {
  test("does nothing to a dead grid", () => {
    let deadGrid = [
      [0, 0],
      [0, 0],
    ];
    expect(nextGeneration(deadGrid)).toEqual(deadGrid);
  });
});
