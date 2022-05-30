const hello = () => {
  return "Hello World";
};

const nextGeneration = (currentGeneration) => {
  let upcomingGeneration = currentGeneration;
  return [
    [0, 0],
    [0, 0],
  ];
};

const neitherNegative = (a, b) => {
  return a >= 0 && b >= 0;
};

const maximumMatrixArea = (matrix) => {
  return {
    maxColumnIndex: matrix.length - 1,
    maxRowIndex: matrix[0].length - 1,
  };
};

const isInsideBounds = (matrixArea, x, y) => {
  const { maxColumnIndex, maxRowIndex } = matrixArea;
  return neitherNegative(x, y) && x <= maxColumnIndex && y <= maxRowIndex;
};

const listSurroundingCoordinates = (matrix, currentX, currentY) => {
  const surroundingCells = [
    [currentX - 1, currentY - 1],
    [currentX - 1, currentY + 0],
    [currentX - 1, currentY + 1],
    [currentX + 0, currentY - 1],
    [currentX + 0, currentY + 1],
    [currentX + 1, currentY - 1],
    [currentX + 1, currentY + 0],
    [currentX + 1, currentY + 1],
  ];
  const matrixArea = maximumMatrixArea(matrix);
  const filteredCells = surroundingCells.filter(([x, y]) =>
    isInsideBounds(matrixArea, x, y)
  );
  return filteredCells;
};

const countLiveCells = (matrix, surroundingCells) => {
  const cellStatus = surroundingCells.map(([x, y]) => {
    return matrix[x][y];
  });
  const liveCells = cellStatus.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  return liveCells;
};

module.exports = {
  hello,
  nextGeneration,
  listSurroundingCoordinates,
  countLiveCells,
};
