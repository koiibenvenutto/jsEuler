// I'm writing a function that given an input n will return the index of the first fibonacci number to contain n or more digits.

// Okay now I successfully have the function working for the example problem set...
// The next step is to make sure that it can handle large numbers so that the coondition will still work correctly

function firstFibLength(n) {
  if (n < 2) return 1;

  const table = [0n, 1n];

  for (let i = 2; String(table[table.length - 1]).length < n; i++) {
    table.push(table[i - 1] + table[i - 2]);
  }

  return table.length - 1;
}

console.log(firstFibLength(1000));
