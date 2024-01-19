const factorize = (n) => {
  const factors = [];
  for (let i = 2; i < n; i++) {
    if (n % i === 0) factors.push(i);
  }
  return factors;
};

console.log(factorize(10));

module.exports = factorize;


