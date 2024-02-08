const isPalindrome = require("./utils/isPalindrome");

function dblBasePalindromes(limit) {
  let sum = 0;
  for (let i = 0; i < limit; i++) {
    if (isPalindrome(i.toString())) {
      if (isPalindrome(i.toString(2))) {
        sum += i;
      }
    }
  }
  return sum;
}

console.log(dblBasePalindromes(1_000_000));
