const factorial = require("./utils/factorial");
const factorialSum = (n) => {
  const arr = factorial(n).toString().split("").map(Number);

  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sum;
};

console.log(factorialSum(100));
