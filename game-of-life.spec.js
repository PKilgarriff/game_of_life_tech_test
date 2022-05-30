const {
  hello,
  nextGeneration,
  listSurroundingCoordinates,
  countLiveCells,
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
  let matrix;
  describe("for a 2x2 matrix", () => {
    beforeAll(() => {
      matrix = [
        [0, 0],
        [0, 0],
      ];
    });
    test("Doesn't return negative co-ordinates when given 0,0", () => {
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
    test("Doesn't return out of bounds co-ordinates when given 1,1", () => {
      let expected = [
        [0, 0],
        [0, 1],
        [1, 0],
      ];
      let currentX = 1;
      let currentY = 1;
      expect(listSurroundingCoordinates(matrix, currentX, currentY)).toEqual(
        expected
      );
    });
  });
  describe("for a 3x3 matrix", () => {
    beforeAll(() => {
      matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
    });
    test("Doesn't return negative co-ordinates when given 0,0", () => {
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
    test("Returns 8 sets of co-ordinates if all are within bounds", () => {
      let expected = [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
      ];
      let currentX = 1;
      let currentY = 1;
      expect(listSurroundingCoordinates(matrix, currentX, currentY)).toEqual(
        expected
      );
    });
    test("Doesn't return out of bounds co-ordinates when given 2,2", () => {
      let expected = [
        [1, 1],
        [1, 2],
        [2, 1],
      ];
      let currentX = 2;
      let currentY = 2;
      expect(listSurroundingCoordinates(matrix, currentX, currentY)).toEqual(
        expected
      );
    });
  });
  describe("countLiveCells", () => {
    describe("for a 2x2 matrix", () => {
      test("Returns three for a fully live 2x2 grid", () => {
        let matrix = [
          [1, 1],
          [1, 1],
        ];
        let expected = 3;
        let surroundingCells = [
          [0, 1],
          [1, 0],
          [1, 1],
        ];
        expect(countLiveCells(matrix, surroundingCells)).toEqual(expected);
      });
      test("Returns 0 for a dead 2x2 grid", () => {
        let matrix = [
          [0, 0],
          [0, 0],
        ];
        let expected = 0;
        let surroundingCells = [
          [0, 1],
          [1, 0],
          [1, 1],
        ];
        expect(countLiveCells(matrix, surroundingCells)).toEqual(expected);
      });
      describe("where half the cells are living", () => {
        test("Returns 1 when given the co-ordinates around a live cell", () => {
          let matrix = [
            [1, 0],
            [0, 1],
          ];
          let expected = 1;
          let surroundingCells = [
            [0, 1],
            [1, 0],
            [1, 1],
          ];
          expect(countLiveCells(matrix, surroundingCells)).toEqual(expected);
        });
        test("Returns 2 when given the co-ordinates around a dead cell", () => {
          let matrix = [
            [1, 0],
            [0, 1],
          ];
          let expected = 2;
          let surroundingCells = [
            [0, 0],
            [1, 0],
            [1, 1],
          ];
          expect(countLiveCells(matrix, surroundingCells)).toEqual(expected);
        });
      });
    });
  });
});
