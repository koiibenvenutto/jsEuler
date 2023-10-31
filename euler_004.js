// function testAllNumbers(x, largestPalSoFar) {
//   for (let i = 999; i > 1; i--) {
//     let product = x * i;
//     if (product > largestPalSoFar) {
//       let str = product.toString();
//       let reversedStr = str.split("").reverse().join("");
//       if (str === reversedStr) {
//         return [product, true];
//       }
//     }
//   }
//   return [0, false];
// }

// // let largestPalindrome = 10000;
// console.log(testAllNumbers(1000000, 10000));

// for (let j = 999; j > 1; j--) {
//   const result = testAllNumbers(j);
//   console.log(largestPalindrome);
//   if (result[1] === true && result[0] > largestPalindrome) {
//     largestPalindrome = result[0];
//   }
// }

// console.log(largestPalindrome);

//
//
//
//
//
// let i = 99;
// while (i > 1) {
//   console.log(99 * i);
//   i--;
// }

// function testProducts(x, largestPal) {
//   for (let i = 999; i > 1; i--) {
//     let product = x * i;
//     if (product > largestPal) {
//       let str = product.toString();
//       let reversedStr = str.split("").reverse().join("");
//       if (str === reversedStr) {
//         return [product, true];
//       }
//     } else {
//       return [product, false];
//     }
//   }
// }

// let largestPalindrome = 0;

// for (let j = 999; j > 1; j--) {
//   console.log(j);
//   console.log(largestPalindrome);
//   const result = testProducts(j, largestPalindrome);
//   console.log(result);
//   if (result[0] > largestPalindrome) {
//     if (result[1] === true) {
//       largestPalindrome = result[0];
//     }
//   } else {
//     break;
//   }
// }
// console.log(largestPalindrome);

// console.log(`----${testProducts(998)}`);

function testProducts(x, largestPal) {
  for (let i = 999; i > 1; i--) {
    let product = x * i;
    if (product <= largestPal) {
      // If the maximum product for this iteration is smaller, then break.
      break;
    }
    let str = product.toString();
    let reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
      return [product, true];
    }
  }
  return [0, false];  // Returning a default value if no palindrome is found
}

let largestPalindrome = 0;

for (let j = 999; j > 1; j--) {
  // If even the max product for this 'j' can't surpass the current largest, break out of the outer loop.
  if (j * 999 <= largestPalindrome) {
    break;
  }
  const result = testProducts(j, largestPalindrome);
  if (result[0] > largestPalindrome && result[1] === true) {
    largestPalindrome = result[0];
  }
}
console.log(largestPalindrome);