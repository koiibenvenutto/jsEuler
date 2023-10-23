// const primes = [2];

// function isPrime(n) {
//   if (n === 1) {
//     return false;
//   } else if (n % 2 === 0) {
//     return false;
//   } else if (n % 3 === 0) {
//     return false;
//   }
//   for (let i = 5; i < n; i += 2) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return n;
// }

// for (let j = 3; j < 2_000_000; j += 2) {
//   isPrime(j) ? primes.push(isPrime(j)) : "";
// }

// Find the sum of all primes under 2_000_000
// primes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// function sieveOfEratosthenes(n) {
//   let primes = Array(n + 1).fill(true); // Initially, mark all numbers as prime
//   primes[0] = primes[1] = false; // 0 and 1 are not primes

//   for (let i = 2; i * i <= n; i++) {
//     if (primes[i]) {
//       for (let j = i * i; j <= n; j += i) {
//         primes[j] = false; // Marking all multiples of i as not prime
//       }
//     }
//   }

//   // Extracting the prime numbers from the array
//   let result = [];
//   for (let i = 2; i <= n; i++) {
//     if (primes[i]) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(sieveOfEratosthenes(2000000));

// console.log(
//   sieveOfEratosthenes(2000000).reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   )
// );

// function sieveOfEratosthenes(n) {
//   let primes = Array(n + 1).fill(true);
//   primes[0] = primes[1] = false;
//   console.log(primes);

//   for (let i = 2; i <= Math.sqrt(n); i++) // so because in the next step, we go through and multiply every number

// }

// sieveOfEratosthenes(30);

// it's saying that if i^2 is greater than n,

// why in the inner loop is j equal to i^2

// for(let i = 2; i * i <= n; i++) {
//     if (primes[i]) {
//         for(let j = i * i; j <= n; j += i) {
//             primes[j] = false; // Marking all multiples of i as not prime
//         }
//     }
// }

// let i = 2
// for(let j = 4; j <= 30; j += 2) {
//     primes[j] = false; // Marking all multiples of i as not prime
// }

// for(let i = 2; i * i <= 30; i++) {
//     if (primes[i]) {
//         for(let j = i * i; j <= n; j += i) {
//             primes[j] = false; // Marking all multiples of i as not prime
//         }
//     }
// }
//
//
//
//
//

// let i = 2

// for(let j = 4; j <= n; j += 2) {
//     primes[j] = false; // Marking all multiples of i as not prime
// }
// This gets rid of all even numbers other than 2 which is prime
// 4,6,8,10,12,14,16,18...

// let i = 3

// for(let j = 9; j <= n; j += 3) {
//     primes[j] = false; // Marking all multiples of i as not prime
// }
// This eliminates all multiples of 3
// 9, 12, 15, 18, 21, 24, 27, 30...

// So because of the way that primes work now we've eliminated the 2s and 3s [2,3,4,6,8,9,10,12,14,15,16,18,20]

// So then we get to 4

// let i = 4

// for(let j = 16; j <= n; j += 4) {
//     primes[j] = false; // Marking all multiples of i as not prime
// }
// So this wouldn't actually occur because 4 would have already been marked as not prime and would get caught by
// if (primes[i]) {...}
// So then it moves to 5
// let i = 5
// for(let j = 25; j <= n; j += 5) {
//     primes[j] = false; // Marking all multiples of i as not prime
// }
// then we get 5,10,15,20,25,30,35,40
// Okay but isn't this also redundant because... so not it isn't because looks at 35: 35%2 !== 0 and 35%3 !== 0 so it's important still.

function sieveOfEratosthenes(n) {
  let primes = Array(n + 1).fill(true); // Initially, mark all numbers as prime
  primes[0] = primes[1] = false; // 0 and 1 are not primes

  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false; // Marking all multiples of i as not prime
      }
    }
  }

  // Extracting the prime numbers from the array
  let result = [];
  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }
  return result;
}

console.log(sieveOfEratosthenes(2_000_000)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

let sum = sieveOfEratosthenes(2_000_000).reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);
