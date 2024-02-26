const factorial = require("./utils/factorial");
const isPrime = require("./utils/isPrime");

function permute3(string) {
  if (string.length < 2) return [string];

  const table = Array(Number(factorial(string.length))).fill(0);
  table[0] = string;

  let sum = 0;

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

    if (hasProperty(table[n])) {
      sum += Number(table[n]);
    }
  }

  return sum;
}

// Here we're going to make a helper function that will check if a given pandigital has the property described in problem 43. If it does, then we're going to add it to the sum.

function hasProperty(string) {
  let primes = [2, 3, 5, 7, 11, 13, 17];
  let hasProp = true;
  for (let i = 1; i < string.length - 2; i++) {
    // // console.log(i);
    let slice = Number(string.slice(i, i + 3));
    // console.log(slice);
    // console.log(primes[i - 1]);
    if (slice % primes[i - 1] !== 0) {
      hasProp = false;
      break;
    }
  }
  return hasProp;
}

// console.log(hasProperty("1406357289"));

console.log(permute3("0123456789"));
