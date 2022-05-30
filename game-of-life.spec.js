const {
  hello,
  nextGeneration,
  listSurroundingCoordinates,
} = require("./game-of-life");

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
  test("a single live square dies off", () => {
    let singleLiveGrid = [
      [1, 0],
      [0, 0],
    ];
    let expected = [
      [0, 0],
      [0, 0],
    ];
    expect(nextGeneration(singleLiveGrid)).toEqual(expected);
  });
});

describe("listSurroundingCoordinates", () => {
  test("Returns array of co-ordinates", () => {
    let matrix = [
      [0, 0],
      [0, 0],
    ];
    let expected = [
      [0, 1],
      [1, 0],
      [1, 1],
    ];
    let currentX = 0;
    let currentY = 0;
    expect(listSurroundingCoordinates(matrix, currentX, currentY)).toEqual(
      expected
    );
  });
});
