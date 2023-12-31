// Okay so this sounds simple enough, since I've already worked with modulus before. We need to find the factors of numbers.
// First we need an algorithm that finds triangle numbers
// Then we need a function that tests triangle numbers to see how many factors they have and we search for the triangle number that has at least  501 factors

// What a map is perfect for: operation on every single item in an array
// Also for each loops
// with maps you can do element name, i (i will be the index), you can ,[] to access the array in every iteration.
// .map is a member function, it can accurately be called a function

// let triangleNumber = 0;
// for (i = 232543800; i; i++) {
//   triangleNumber += i;
//   let factors = [];
//   for (j = 1; j <= triangleNumber; j++)
//     if (triangleNumber % j === 0) {
//       factors.push(j);
//     }
//   if (factors.length > 200) {
//     console.log(triangleNumber);
//     console.log(factors);
//     break;
//   }
// }

// Yes, it works on the smaller example!
// Well I think this will work, but it's not very fast, and by not very fast I mean okay this ain't gon work!
// Time to optimize!

// Okay so what I'm thinking is where are the optimizations? I feel like they need to be pretty drastic, is there a way that I can tell how many factors a number will have in advance? Is there some indicator of how many factors it will have?

// Other than that is there some way to start with much higher triangleNumbers?

// const pattern = [1, 2, 3];
// console.log(pattern.length);

// const result = new Array(length)
//   .fill(undefined)
//   .map((_, i) => pattern[i % pattern.length]);
// console.log(pattern);

const integers = new Array(1_000_000).fill(0).map((_, i) => i++);
// console.log(integers);

function findFactors(n) {
  let factors = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);

      // Check if the divisors are the same (this happens when n is a perfect square)
      if (i !== n / i) {
        factors.push(n / i);
      }
    }
  }

  return factors.sort((a, b) => a - b); // Sorting the factors
}

// console.log(findFactors(28)); // Outputs: [ 1, 2, 4, 7, 14, 28 ]

for (i = 1; i < 500_000; i += 1) {
  let tNumber = integers
    .slice(0, i)
    .reduce((currentValue, accumulator) => currentValue + accumulator, 0);

  if (findFactors(tNumber).length > 500) {
    console.log(tNumber);
    console.log(findFactors(tNumber));
    break;
  }
}

// number of factors of n cannot be greater than n/2
