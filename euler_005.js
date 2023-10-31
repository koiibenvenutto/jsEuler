// function test(x) {
//   for (let i = 1; i <= 10; i++) {
//     let remainder = x % i;
//     if (remainder !== 0) {
//       return false;
//     }
//     console.log(`${x} is divisible by ${i}`);
//   }
//   return x;
// }

// // test(2520);
// const arr = [];

// for (let i = 1; i <= 3000; i++) {
//   let result = test(i);
//   if (result) {
//     arr.push(result);
//   }
// }

// console.log(arr);

function test(x) {
  for (let i = 1; i <= 20; i++) {
    if (x % i !== 0) {
      return false;
    }
  }
  return x;
}

// test(2520);
let solution = 0;

for (let i = 1; ; i++) {
  let result = test(i);
  if (result) {
    solution = result;
    break;
  }
}

console.log(solution);
