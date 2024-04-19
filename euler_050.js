const primeSieve = require("./utils/sieveOfEratosthenes");
const isPrime = require("./utils/isPrime");

function consecutivePrimeSum(limit) {
  const primes = primeSieve(limit);
  // console.log(primes);
  // console.log(`--------`);
  let longestSequence = 0;
  let result;
  for (let i = 1; i <= primes.length; i++) {
    // console.log(`i: ${i}`);
    for (let j = 0; j < i - longestSequence; j++) {
      // console.log(`j: ${j}`);
      let primesSlice = primes.slice(j, i);
      // console.log(`primesSlice: ${primesSlice}`);

      let currentSum = primesSlice.reduce(
        (currentValue, accumulator) => accumulator + currentValue,
        0
      );
      if (currentSum > limit) break;
      // console.log(currentSum);

      if (isPrime(currentSum) && primesSlice.length > longestSequence) {
        longestSequence = primesSlice.length;
        result = currentSum;
        // console.log(isPrime(currentSum));
        // console.log(longestSequence);
      }
    }
    // console.log(`--------`);
  }

  return result;
}

console.log(consecutivePrimeSum(1_000_000));

// Okay so the issue here is that they don't have to start at 1, it can be any string of consequtive primes.

/* sum += primes[i];

    if (isPrime(sum)) highest = sum; */
