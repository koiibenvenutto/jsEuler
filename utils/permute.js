const factorial = require("./factorial");

function permute(string, test) {
  if (string.length < 2) return [string];

  const table = Array(Number(factorial(string.length))).fill(0);
  table[0] = string;

  // console.log(table);

  let truePermutations = [];

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

    if (table[n] !== 0 && test(table[n])) {
      truePermutations.push(table[n]);
    }
  }

  return truePermutations;
}

// function test(n) {
//   return true;
// }

module.exports = permute;

// console.log(permute("123", test));
