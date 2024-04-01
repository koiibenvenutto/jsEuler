const primeSieve = require("./utils/sieveOfEratosthenes");
const isPermutation = require("./utils/isPermutation");
const isPrime = require("./utils/isPrime");

function primePermutations(limit) {
  let primes = primeSieve(limit);
  //   console.log(primes.indexOf(9679));

  let ix;
  for (ix = 0; ix < primes.length; ix++) {
    if (primes[ix] > 999) break;
  }
  primes = primes.slice(ix);
  //   console.log(primes.slice(0, 1));
  //   console.log(primes.pop());
  //   console.log(primes.length);
  //   At this point we have all the primes in the valid range
  const results = [];
  for (let jx = 0; jx < primes.length - 1; jx++) {
    // console.log(`- jx: ${jx}`);
    for (let kx = jx + 1; kx < primes.length; kx++) {
      //   console.log(`-- kx: ${kx}`);
      if (isPermutation(primes[jx], primes[kx])) {
        // console.log(`--- primes[jx]: ${primes[jx]}`);
        // console.log(`--- primes[kx]: ${primes[kx]}`);

        // *
        let diff = primes[kx] - primes[jx];
        // console.log(diff);
        let third = primes[kx] + diff;
        if (isPrime(third)) {
          //   console.log(third);
          if (isPermutation(primes[jx], third)) {
            results.push(
              [
                primes[jx].toString() +
                  primes[kx].toString() +
                  third.toString(),
              ],
              diff
            );
          }
        }
      }
    }
  }
  return results;
}

console.log(primePermutations(10_000));
// console.log(primePermutations(10));

// How can the first 1000 prime numbers not exceed 999? Wouldn't that require there to be 1 prime for every integer?
// Okay so it's not getting the first 1000 primes, it's getting primes up to 1000 that's all.

/* 5471
--- primes[kx]: 5741
--- primes[jx]: 5471 */

// *: I realized that my diffs were all negative which was leading to subtracting from kx rather than adding to it. Needed to flip the order of subtraction to get the positive difference.
