const revArray = require("./revArray");

function isPalindrome(string) {
  const arr = string.split("");
  if (string === revArray(arr).join("")) return true;
  return false;
}

// console.log(isPalindrome("1234"));
// console.log(isPalindrome("1001"));

module.exports = isPalindrome;
