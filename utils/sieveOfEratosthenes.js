function sieveOfEratosthenes(n) {
  const table = Array(n + 1).fill(true);
  // console.log(table);
  table[0] = 0;
  for (let i = 2; i < Math.sqrt(n); i++) {
    for (let j = i; j * i <= n; j++) {
      table[i * j] = false;
    }
  }

  const result = table.reduce(
    (acc, val, index) => (val ? acc.concat(index) : acc),
    []
  );

  return result;
}

// console.log(sieveOfEratosthenes(20));

module.exports = sieveOfEratosthenes;