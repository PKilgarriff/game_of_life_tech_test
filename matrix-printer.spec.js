const { matrixPrinter } = require("./matrix-printer");

describe("matrixPrinter", () => {
  const consoleSpy = jest.spyOn(console, "log").mockReturnValue();
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  test("prints a 2x2 matrix correctly", () => {
    testMatrix = [
      [0, 1],
      [1, 1],
    ];
    expectedOutput = [["-----"], ["|0|1|"], ["-----"], ["|1|1|"], ["-----"]];
    matrixPrinter(testMatrix);
    expect(consoleSpy.mock.calls).toEqual(expectedOutput);
  });

  test("prints a 3x3 matrix correctly", () => {
    testMatrix = [
      [0, 1, 0],
      [1, 1, 1],
      [1, 1, 1],
    ];
    expectedOutput = [
      ["------"],
      ["|0|1|0|"],
      ["------"],
      ["|1|1|1|"],
      ["------"],
      ["|1|1|1|"],
      ["------"],
    ];
    matrixPrinter(testMatrix);
    expect(consoleSpy.mock.calls).toEqual(expectedOutput);
  });
});
