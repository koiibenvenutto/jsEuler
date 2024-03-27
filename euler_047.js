const primeSieve = require("./utils/sieveOfEratosthenes");

function distinctPrimeFactors(limit, consecLength) {
  const primes = primeSieve(limit);
  const a_1 = [];

  for (let n = 2; n < limit; n++) {
    const a_2 = [];
    for (let a = 1; primes[a] < n; a++) {
      if (n % primes[a] === 0) {
        a_2.push(primes[a]);
        if (a_2.length >= consecLength) {
          a_1.push(n);
          break;
        }
      }
    }

    if (a_1.length > consecLength) a_1.shift();

    if (a_1.length === consecLength) {
      let consecutive = true;
      for (let i = 0; i < a_1.length - 1; i++) {
        if (a_1[i] + 1 !== a_1[i + 1]) consecutive = false;
      }
      if (consecutive) return a_1[0];
    }
  }
  return `Didn't find it`;
}

console.log(distinctPrimeFactors(1_000_000, 4));
