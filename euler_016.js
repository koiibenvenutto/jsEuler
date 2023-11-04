const bigNum = BigInt(2) ** BigInt(1000);
// console.log(bigNum);

const bigNumStr = bigNum.toString();
// console.log(bigNumStr);

const bigNumStrArr = [...bigNumStr];
// console.log(bigNumArr);

const bigNumArr = bigNumStrArr.map(Number);

const sum = bigNumArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);
