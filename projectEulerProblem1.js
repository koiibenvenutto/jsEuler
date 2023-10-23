// Okay so I'm going to start with trying to just copy the original pattern before I worry about all the numbers up to 1000

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i > numbers.length; i++) {
// }

// So the first step is find out if a number is a multiple of 3, 5 will come later
// I think the most straight forward way to do this is with an if statement
// No the fastest way to do this is for sure to just multiply the numbers until it's <= 1000
// So why don't we go ahead and use a regular for loop and multiply 3 * 1,2,3,4,5... etc until the product is <= 1000

// THIS IS MY FIRST ATTEMPT I WANT TO FIND A SIMPLER METHOD
// let sum3 = 0;
// let sum5 = 0;
// let done = 0;
// for (let i = 1; i < 1000; i++) {
//   if (sum3 * i > 1000) {
//     done += 1;
//   } else {
//     sum3 = 3 * i;
//   }
//   console.log(`sum3 ${sum3}`);

//   if (sum5 * i > 1000) {
//     done += 1;
//   } else {
//     sum5 = 5 * i;
//   }
//   console.log(`sum5 ${sum5}`);

//   if (done == 2) {
//     break;
//   }
// }

// console.log(`sum3 ${sum3}`);
// console.log(`sum5 ${sum5}`);

// const a = 5 % 2; // 1
// const b = 6 % 3; // 0;
// console.log(a, b);

// let sum = 0;
// for (let i = 0; i < 1000; i++) {
//   if (5 * i < 1000) {
//     sum += 5 * i;
//   }
//   if (3 * i < 1000) {
//     sum += 3 * i;
//   } else {
//     break;
//   }
// }
// console.log(sum);

// This actually doesn't work because the ternary operator does not accept break as the valueIfFalse
// let sum = 0;
// for (let i = 0; i < 1000; i++) {
//   5 * i < 1000 ? (sum += 5 * i) : null;
//   3 * i < 1000 ? (sum += 3 * i) : break;
// }
// console.log(sum);

// This is Chat GPT's answer
let sum2 = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum2 += i;
  }
}
console.log(sum2);

// 1,2,3,4,5,6,7,8,9
// i % 3
// 9  3 = 27
// 27 > 10 => WRONG
