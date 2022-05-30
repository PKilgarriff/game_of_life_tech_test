const nextGeneration = (currentGeneration) => {
  let mappedMatrix = currentGeneration.map((row, rowIndex) => {
    return row.map((cell, columnIndex) => {
      const surrounds = listSurroundingCoordinates(
        currentGeneration,
        rowIndex,
        columnIndex
      );
      const liveSurrounds = countLiveCells(currentGeneration, surrounds);
      const currentCellStatus = cell === 1 ? true : false;
      console.log(
        `Cell is ${
          currentCellStatus ? "Alive" : "Dead"
        } and has ${liveSurrounds} live cells around it`
      );
      let nextGenCellStatus;
      if (currentCellStatus) {
        if (liveSurrounds < 2) {
          console.log("Cell dies from underpopulation");
          nextGenCellStatus = false;
        } else if (liveSurrounds > 3) {
          console.log("Cell dies from overpopulation");
          nextGenCellStatus = false;
        } else {
          nextGenCellStatus = true;
        }
      } else {
        if (liveSurrounds === 3) {
          nextGenCellStatus = true;
        } else {
          nextGenCellStatus = false;
        }
      }
      return nextGenCellStatus ? 1 : 0;
    });
  });
  console.log(mappedMatrix);
  return mappedMatrix;
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
  nextGeneration,
  listSurroundingCoordinates,
  countLiveCells,
  mapMatrixToAdjacentLiveCellCounts,
};
