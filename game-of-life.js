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
  const filteredCells = surroundingCells.filter(([x, y]) =>
    neitherNegative(x, y)
  );
  return filteredCells;
};

module.exports = { hello, nextGeneration, listSurroundingCoordinates };
