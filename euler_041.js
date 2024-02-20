// largest pandigital prime...
/* 
so the first thing that pops into my head is to use the prime sieve and go up to like 10_000_000 right away and then just loop through those and see okay which of these are a pandigital prime...
The issue with this though is that we're going to be going up to a specific n and that's not really in line with what the problem is asking
Or is it though because the largest pandigital number in general is 987654321
*/

// What if I reuse my code from euler 24 where I had to find the 1millions permutation of 0123456789...
// Can I repurpose this to find the largest pandigital prime?
// I like this because there's only 362_880 permutations of 123_456_789

// Well the easiest thing to do here is add the functionality of as it generates the permutations, just checking to see if they're prime and then if they're prime and larger than the previous one, keeping track of that in a variable

const factorial = require("./utils/factorial");
const isPrime = require("./utils/isPrime");

function permute3(string) {
  if (string.length < 2) return [string];

  const table = Array(Number(factorial(string.length))).fill(0);
  table[0] = string;

  let largestPrime = 0;

  let arr = string.split("");

  // loop through entire table
  for (let n = 1; n < table.length; n++) {
    // Find first character
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i + 1] > arr[i]) {
        // Find ceiling
        let ceil = Infinity;
        let j = arr.length;
        while (j > i) {
          // once ceiling is found, swap it with first character and then sort in ascending order everything after og position of first char, then break the j loop
          if (arr[j] > arr[i] && arr[j] < ceil) {
            ceil = arr[j];
            break;
          }
          j--;
        }

        // swap the positions of chars at i and j
        let temp = arr[i];
        arr[i] = ceil;
        arr[j] = temp;

        // put all the characters after the original position of the first character in ascending order
        let right = arr.slice(i + 1);
        right.sort((a, b) => a - b);

        arr.splice(i + 1, right.length, ...right);
        let result = arr.join("");
        table[n] = result;
        break;
      }
    }

    console.log(isPrime(Number(table[n])));

    if (isPrime(Number(table[n])) && Number(table[n]) > largestPrime) {
      largestPrime = Number(table[n]);
    }
  }

  return largestPrime;
}

console.log(permute3("1234567"));

// Fascinating: this one is actually slower! But it still works :) How could I make it faster? I guess the original one is just so much more efficient at perumting because it only creates viable options...
function largestPanPrimeAlt() {
  const pandigital = "123456789";
  let largestPrime = 0;
  for (let i = 1; i <= 987654321; i++) {
    if (isPrime(i)) {
      if (
        i.toString().split("").map(Number).sort().join("") ==
          pandigital.slice(0, i.toString().length) &&
        i > largestPrime
      ) {
        largestPrime = i;
      }
    }
  }

  return largestPrime;
}

console.log(largestPanPrimeAlt());

// So ultimately i got the solution, I was pretty effecient about how much work I put in to get there as well. The thing is that this code doesn't exactly handle the problem automatically. It turns out that there are no 9 digit pandigital primes so the largest is actually 7 digits long which I got through manually entering pandigital numbers of different lengths to permute through...So if I wanted to make a more elegant and workable solution I would need to add the capabitlity for this to work through pandigital numbers of various lengths. I wonder if this would be faster than just looping through all numbers, checking if they're pandigital and then checking if they're prime?? Well all stuff to explore another time.
