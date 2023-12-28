const factorial = (n) => {
  let bigIntN = BigInt(n);
  for (let i = BigInt(n - 1); i > 1; i--) {
    bigIntN *= i;
  }

  return bigIntN;
};

module.exports = factorial;
