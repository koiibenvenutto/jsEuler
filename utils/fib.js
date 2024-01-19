const fib = (n) => {
  if (n < 3) return 1;

  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
};

module.exports = fib;
