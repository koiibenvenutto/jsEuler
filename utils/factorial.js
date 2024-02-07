const factorial = (n) => {
  if (n === 0) return 1n;
  let bigIntN = BigInt(n);
  for (let i = BigInt(n - 1); i > 1; i--) {
    bigIntN *= i;
  }

  return bigIntN;
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));

module.exports = factorial;
