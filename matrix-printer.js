const matrixPrinter = (matrix) => {
  const width = matrix[0].length;
  const horizontalDiv = "-".repeat(width + 3);
  console.log(horizontalDiv);
  matrix.forEach((row) => {
    console.log(`|${row.join("|")}|`);
    console.log(horizontalDiv);
  });
};
