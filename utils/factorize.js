// Doesn't work for negative numbers or maybe has some other bugs watch out me!!!

const factorize = (n) => {
  const factors = [];
  for (let i = 2; i < n; i++) {
    if (n % i === 0) factors.push(i);
  }
  return factors;
};

// console.log(factorize(10));
// [2,5]
// console.log(factorize(7));
// Expected return [];

module.exports = factorize;
