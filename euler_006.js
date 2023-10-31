let sumOfSq = 0;
let sqOfSum = 0;
for (let i = 1; i <= 100; i++) {
  sumOfSq += i ** 2;
  sqOfSum += i;
}
sqOfSum = sqOfSum ** 2;
let difference = sqOfSum - sumOfSq;

console.log(sumOfSq);
console.log(sqOfSum);
console.log(difference);

