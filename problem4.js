function testAllNumbers(x) {
  for (let i = 999; i > 1; i--) {
    let product = x * i;
    const str = product.toString();
    const reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
      return [product, true];
    }
  }
  return [null, false];
}

const palindromes = [];

for (let j = 999; j > 1; j--) {
  const result = testAllNumbers(j);
  if (result[1] === true) {
    palindromes.push(result[0]);
  }
}

palindromes.sort((a, b) => b - a);
console.log(palindromes);
