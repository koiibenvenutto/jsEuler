const factorial = (n) => {
  if (n === 0) return 1n;
  let bigIntN = BigInt(n);
  for (let i = BigInt(n - 1); i > 1; i--) {
    bigIntN *= i;
  }

  return bigIntN;
};

// console.log(factorial(9));

module.exports = factorial;
