const factorial = require("./utils/factorial");

// function permute(string) {
//   if (string.length < 2) return [string];

//   const table = Array(Number(factorial(string.length))).fill(0);
//   table[0] = string;

//   // console.log(table);
//   let arr = string.split("");

//   let truePermutations = [];

//   // loop through entire table
//   for (let n = 1; n < table.length; n++) {
//     // Find first character
//     for (let i = arr.length - 2; i >= 0; i--) {
//       if (arr[i + 1] > arr[i]) {
//         // Find ceiling
//         let ceil = Infinity;
//         let j = arr.length;
//         while (j > i) {
//           // once ceiling is found, swap it with first character and then sort in ascending order everything after og position of first char, then break the j loop
//           if (arr[j] > arr[i] && arr[j] < ceil) {
//             ceil = arr[j];
//             break;
//           }
//           j--;
//         }

//         // swap the positions of chars at i and j
//         let temp = arr[i];
//         arr[i] = ceil;
//         arr[j] = temp;

//         // put all the characters after the original position of the first character in ascending order
//         let right = arr.slice(i + 1);
//         right.sort((a, b) => a - b);

//         arr.splice(i + 1, right.length, ...right);
//         let result = arr.join("");
//         table[n] = result;
//         break;
//       }
//     }
//   }

//   for (let k = 0; k < table.length; k++) {
//     if (table[k] !== 0) {
//       truePermutations.push(table[k]);
//     }
//   }

//   return truePermutations;
// }

// module.exports = permute;

// // console.log(permute("123"));

// const isPrime = require("./utils/isPrime");
// const primeSieve = require("./utils/sieveOfEratosthenes");

// function primeDigitReplacement(limit) {
//   let primes = primeSieve(limit);
//   //   console.log(primes);
//   primes = primes
//     .slice(primes.indexOf(11))
//     .map((prime) => prime.toString().split("").map(Number));
//   //   console.log(primes);
//   //   console.log(primes.length);

//   const matrix = ["01"];

//   const punchcards = [];
//   for (let k = 0; k < primes[primes.length - 1].length - 1; k++) {
//     // console.log(k);
//     punchcards.push(
//       ...permute(matrix[k]).map((combo) => combo.split("").map(Number))
//     );
//   }
//   //   console.log(punchcards);

//   for (let i = 0; i < primes.length; i++) {
//     // Cycle through primes
//     // console.log(primes[i]);
//     let currentPrime = primes[i];

//     for (let j = 0; j < punchcards.length; j++) {
//       // Cycle through punchcards
//       // console.log(punchcards[j]);

//       for (let u = 0; u < currentPrime.length; u++) {
//         //   Cycle through current punchcard and prime together
//         // console.log(punchcards[j][u]);
//         // console.log(primes[i][u]);
//         // Tests working up to here...

//         if (punchcards[j][u] === 1) {
//           currentPrime[u] = "*";
//         }
//         // console.log(currentPrime);
//         // for (let m = 0; m < 10; m++) {
//         //   // Cycle through digits 0-9
//         //   //   console.log(m);
//         //   for (let d = 0; d < primes[i].length; d++) {
//         //     if (currentPrime[d] === "*") currentPrime[d] = m;
//         //   }
//         //   //   console.log(currentPrime);
//         // }
//         currentPrime = primes[i];
//       }
//     }
//   }
// }

// console.log(primeDigitReplacement(12));

// So what am I trying to do here?

const punchcards = [
  [0, 1],
  [1, 0],
];

const prime = [1, 1];

for (let u = 0; u < prime.length; u++) {
  //   Cycle through current punchcard and prime together
  // console.log(punchcards[j][u]);
  // console.log(primes[i][u]);
  // Tests working up to here...

  if (punchcards[j][u] === 1) {x
    currentPrime[u] = "*";
  }
  // console.log(currentPrime);
  // for (let m = 0; m < 10; m++) {
  //   // Cycle through digits 0-9
  //   //   console.log(m);
  //   for (let d = 0; d < primes[i].length; d++) {
  //     if (currentPrime[d] === "*") currentPrime[d] = m;
  //   }
  //   //   console.log(currentPrime);
  // }
  currentPrime = primes[i];
}
