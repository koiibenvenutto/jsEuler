const isPrime = require("./utils/isPrime");
const primeSieve = require("./utils/sieveOfEratosthenes");

// What this really comes down to is how many combinations of binary on off transistors there are in a 10 bite system.
// Because all the sselected bits are going to count together, the most important part is simply finding the right combination of bits to count together from 0->10
// So the question is, How do I generate all combinations of 0,0,0,0,0,0,0,0,0,0
// For example 1,0,0,1,0,1,1,1,0
// One things that's really tricky about this problem as well is that it's not set in stone how many numbers need to change or which ones. Again this simply comes down to knowing all the
// A good place to start would be going back to the permutations algorithm...Right?
// It's binary, the number of possiblities are going to be equal to the number of bits that can be stored in a 9 bit byte remember how that works?
// 0, 0, 0, 0, 0, 0, 0, 0, 0
// 9, 8, 7, 6, 5, 4, 3, 2, 1
// 9! -> 362,880
// That's how many combintations I will need to test. Nothing crazy. (*1)

// If you're having trouble remembering, maybe reverse angineer it. there's 256 possibilities with an 8 bit byte
// 8 7 6 5 4 3 2 1
// 0 0 0 0 0 0 0 0
// 0x4+1x3+1x2+0x1
//   0,  1,  1,  0
// = 3+2 = 5
// But 5 could also be 1001? 1x4 + 1x1?
// 0 - 0000
// 1 - 0001
// 2 - 0010
// 3 - 0100
// 4 - 1000
// 5 - 1001
// 6 - 1010
// 7 - 1100
// 8 - ...

// *1: Ah but is that true? Because there's nothing saying that it must be a 10 digit long prime...It could be longer. However, knowing what I know now I can write the logic to solve the first two examples and go from there.
// I can think of one way to do it...
// So if you have a prime number that's 3 digits long, then you are either going to be replacing 1 or 2 digits
// eg: 123 -> *23, *2*, but you're not going to be replacing all three because then you wouldn't really be working with that number at all.
// So if you set up a two dimensional array like this:
// const Arr = [
//   [1, 0, 0],
//   [1, 1, 0],
// ];
// // And then you permutated both of those arrays, you could take the solutions and spread them into one array, then you'd have your punchcard so to speak of all the different combinations of numbers that will count together.
// // Let's give it a try...

// const test = (n) => {
//   return true;
// };

// // Hmmm this works...
// console.log(permute("123", test));

// // However, this does not
// console.log(permute("100", test));
// // Maybe that's because the string needs to be in the lowest value position rather than the highest...
// console.log(permute("01", test));

// Okay I think I have enough to start writing this thing

function primeDigitReplacement(limit) {
  const test = (n) => {
    return true;
  };
  let primes = primeSieve(limit);
  //   console.log(primes);
  primes = primes.slice(primes.indexOf(11)).map((prime) => prime.toString());
  console.log(primes);

  const matrix = ["01"];
  // Right now I'm thinking there should really be a simpler method...
  // The issue is that far each length of prime, I need a difference matrix. Frustrating.
  // However, for now I'm just going to hard code the length of the matrix and focus on getting replicating the result of the first example problem
  console.log(primes.pop());
  const punchcards = [];
  for (let k = 0; k < primes.pop().length - 1; k++) {
    console.log(k);
    punchcards.push(...permute(matrix[k], test));
  }

  console.log(punchcards);
  //
  //
  //
  //   for (let i = 0; i < primes.length; i++) {
  //     // Now we have our first prime loaded into the test chamber
  //     // Next we need to create a 2D array with primes[i].length sub arrays of length primes[i].length -1 where each sub array has one more bit flipped on than the one before it starting from the right. Given a 2 digit prime it would look like this:
  //     // [[0, 1]];
  //     // Given a 5 digit prime it would look like this
  //     // const array = [
  //     //   [0, 0, 0, 0, 1],
  //     //   [0, 0, 0, 1, 1],
  //     //   [0, 0, 1, 1, 1],
  //     //   [0, 1, 1, 1, 1],
  //     // ];
  //     // Then, these all need to be sent to the permute function which will give us every permutation of each sub array.
  //     for (let j = 0; j < primes[i].length; j++) {
  //       // Now hold on a moment, the matrix isn't going to change with each prime that we load into the chamber so lets pre calculate it so we can just cycle through the various combinations of on/off punchcards
  //     }
  //   }
}

console.log(primeDigitReplacement(20));
