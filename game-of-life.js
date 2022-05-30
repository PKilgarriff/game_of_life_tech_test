const hello = () => {
  return "Hello World";
};

const nextGeneration = (currentGeneration) => {
  return [
    [0, 0],
    [0, 0],
  ];
};

module.exports = { hello, nextGeneration };
