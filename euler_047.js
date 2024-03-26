const primeSieve = require("./utils/sieveOfEratosthenes");

function distinctPrimeFactors(limit) {
  const primes = primeSieve(limit);
  const consecutiveIntegers = [];
  for (let n = 2; n < limit; n++) {
    console.log(`n ${n}`);
    for (let a = 1; a < n; a++) {
      console.log(`- a: ${a}`);
      for (let b = a + 1; a * b < limit; b++) {
        console.log(`-- b: ${b}`);
        if (primes[a] * primes[b] === n) {
          console.log(n);
          if (consecutiveIntegers[consecutiveIntegers.length - 1] === n - 1)
            return [n - 1, n];
          consecutiveIntegers.push(n);
        }
      }
    }
  }
}

console.log(distinctPrimeFactors(16));

// Since these inner loops are only going to be prime is makes a lot more sense to start by generating an array of prime numbers up to the given limit and looping through that rather than just incrimenting by 1...and I believe that this removes the need for the isPrime function...

//   I know there's a better way to do this but I just need to check if there's two consecutive numbers with distinct primes here. Doesn't make sense to story an array of all n's with distinct prime factors...Only need to keep track of them if they are consecutive. So if an n has two distinct prime factors...then we need to check the next one...How do I go about this...
// Ahh this can be done here... by only pushing if it's consecutive to the last element
//   Or why don't we just clear the array every time that it's false... all we need to know about is the last one...Don't worry about thinking ahead just yet.
// Now it will only push n if it's consecutive to the last element in the consecutive integers array...
