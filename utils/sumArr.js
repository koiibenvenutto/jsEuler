const sumArr = (array) => {
  return array.reduce(
    (currentValue, accumulator) => currentValue + accumulator,
    0
  );
};

module.exports = sumArr;
