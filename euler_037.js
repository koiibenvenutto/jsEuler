const isPrime = require("./utils/isPrime");

const numTruncator = (n, fromRight = true) => {
  if (fromRight) {
    return Number(n.toString().slice(0, n.toString().length - 1));
  } else {
    return Number(n.toString().slice(1));
  }
};

function truncPrimes(n) {
  const truncatablePrimes = new Set();
  for (let i = 11; i < n; i++) {
    let num = i;
    let j = 0;
    let truncs = [];

    let fromRight = true;
    while (j < i.toString().length * 2) {
      if (j === i.toString().length) {
        num = i;
        fromRight = false;
      }
      //console.log(j);
      if (isPrime(num)) {
        truncs.push(num);
        //console.log(truncs);
        num = numTruncator(num, fromRight);
        //console.log(num);
      } else {
        break;
      }
      j++;
    }

    if (j === i.toString().length * 2) {
      truncatablePrimes.add(...truncs);
    }
  }
  return [...truncatablePrimes].reduce(
    (accumulator, currentValue) => currentValue + accumulator,
    0
  );
}

console.log(truncPrimes(10_000_000));
