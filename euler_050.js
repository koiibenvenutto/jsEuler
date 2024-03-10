const primeSieve = require("./utils/sieveOfEratosthenes");
const isPrime = require("./utils/isPrime");

function consecutivePrimeSum(limit) {
  const primes = primeSieve(limit);
  console.log(primes);
  let highest = 0;
  for (let i = 1; primes[i] < limit; i++) {
    console.log(`i: ${i}`);
    for (let j = 0; j < i; j++) {
      let primeSlice = primes.slice(j, i);
      console.log(primeSlice);
      let currentSum = primeSlice.reduce(
        (currentValue, accumulator) => accumulator + currentValue,
        0
      );

      console.log(currentSum);

      if (isPrime(currentSum) && currentSum > highest) highest = currentSum;
    }
  }

  return highest;
}

console.log(consecutivePrimeSum(10));

// Okay so the issue here is that they don't have to start at 1, it can be any string of consequtive primes.

/* sum += primes[i];

    if (isPrime(sum)) highest = sum; */
