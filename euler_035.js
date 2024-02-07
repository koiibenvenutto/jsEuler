const isPrime = require("./utils/isPrime");

const numRotator = (n) => {
  const nArr = n.toString().split("");
  nArr.splice(0, 0, nArr.pop());
  return Number(nArr.join(""));
};

// console.log(numRotator(123));

function circularPrimes(n) {
  const circPrimes = new Set();
  for (let i = 0; i < n; i++) {
    let num = i;
    let j = 0;
    let rotations = [];
    while (j < i.toString().length) {
      if (isPrime(num)) {
        rotations.push(num);
        num = numRotator(num);
      } else {
        break;
      }
      j++;
    }
    if (j === i.toString().length) {
      circPrimes.add(...rotations);
    }
  }
  return [...circPrimes].length;
}

console.log(circularPrimes(1_000_000));
