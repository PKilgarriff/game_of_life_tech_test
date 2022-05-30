const nextGeneration = (currentGeneration) => {
  return currentGeneration.map((row, rowIndex) => {
    return row.map((cell, columnIndex) => {
      const surrounds = listSurroundingCoordinates(
        currentGeneration,
        rowIndex,
        columnIndex
      );
      const liveSurrounds = countLiveCells(currentGeneration, surrounds);
      const currentCellStatus = cell === 1 ? true : false;
      let cellIsAlive;
      if (currentCellStatus) {
        if (liveSurrounds < 2 || liveSurrounds > 3) {
          cellIsAlive = false;
        } else {
          cellIsAlive = true;
        }
      } else {
        if (liveSurrounds === 3) {
          cellIsAlive = true;
        } else {
          cellIsAlive = false;
        }
      }
      return cellIsAlive ? 1 : 0;
    });
  });
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
};
