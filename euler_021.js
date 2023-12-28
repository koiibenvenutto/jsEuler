// https://sech.me/ap/articles.html#a1
// https://stackoverflow.com/questions/38094818/what-is-the-most-efficient-way-to-find-amicable-numbers-in-python
// TODO: make not brute force

const amicableNumbers = (n) => {
  const memo = {};
  const amicablePairs = new Set();

  for (let i = n - 1; i > 0; i--) {
    memo[i] = [];
    for (let j = Math.floor(i / 2); j > 0; j--) {
      if (i % j === 0) {
        memo[i].push(j);
      }
    }
    memo[i] = memo[i].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i != j && memo[i] === j && memo[j] === i) {
        amicablePairs.add(i, j);
      }
    }
  }

  const sum = [...amicablePairs].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sum;
};

console.log(amicableNumbers(10000));
