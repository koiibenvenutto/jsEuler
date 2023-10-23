// Okay so this is for sure going to have the i%2 to check if it's even?
// Next I think it's just about making a for loop that generates fibonacci numbers. Let's have a couple wacks at that and see where I get with it.

let sum = 0;
const fibs = [1, 1];
for (i = 1; fibs[i] <= 4_000_000; i++) {
  let fibNumber = fibs[i] + fibs[i - 1];
  fibs.push(fibNumber);
  if (fibNumber % 2 === 0) {
    sum += fibNumber;
  }

  console.log(fibs);
  console.log(sum);
}

// So what is the best algorithm to generate fibonacci numbers?
// I guess I should start with 1 and 2...

// Okay got that working...now I just need to make it cut off at 4000000 instead of 10. How should I do that?

// console.log(2 % 2);

// function factorial(n) {
//   if (n === 0) {
//     return 1; // Base case
//   } else {
//     return n * factorial(n - 1); // Recursive case
//   }
// }
// console.log(factorial(5));

// Okay so how can this be applied to the fibonacci sequence?
//

// const map = new Map();

// function fibonacci(n) {
//   if (n < 2) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// console.log(fibonacci(10));


// This is Chat GPTs solution that uses memoization to make sure that the solution isn't getting bogged down due to exponential duplicate calculations. 
// function fibonacci(n, memo = {}) {
//   if (n in memo) return memo[n];
//   if (n < 2) return n;

//   memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//   return memo[n];
// }

// function sumEvenFibonacci(limit) {
//   let sum = 0;
//   let i = 0;
//   let fib = fibonacci(i);

//   while (fib <= limit) {
//     if (fib % 2 === 0) {
//       sum += fib;
//     }
//     i++;
//     fib = fibonacci(i);
//   }

//   return sum;
// }

// console.log(sumEvenFibonacci(4000000));


