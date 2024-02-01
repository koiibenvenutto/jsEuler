const isPrime = require("./utils/isPrime");

function quadPrimes() {
  let most = 0;
  let ab = 0;
  for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b < 1001; b++) {
      let n = 0;
      let equation = Math.pow(n, 2) + n * a + b;
      while (isPrime(equation)) {
        n++;
        equation = Math.pow(n, 2) + n * a + b;
      }
      if (n > most) {
        most = n;
        ab = a * b;
      }
    }
  }
  return ab;
}

console.log(quadPrimes());
