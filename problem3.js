// I'm going to start by finding the largest prime factors for a smaller number like 12. One way to do this is to start from the top and basically check using modulus if there's a remainder and then go through the factors of 12 to see which ones are prime and then find the largest number, that's you're answer. That would look like this:

// What is the largest prime factor of 12?

// const factors = [];
// for (i = 12; i > 0; i--) {
//   if (12 % i === 0) {
//     factors.push(i);
//   }
// }
// console.log(factors);

// function isPrime(n) {
//   let factorFactors = [];
//   for (i = n - 1; i > 1; i--) {
//     if (n % i === 0) {
//       factorFactors.push(i);
//     }
//     // console.log(factorFactors);
//   }
//   if (factorFactors.length === 0) {
//     console.log(`${n} is prime`);
//     return factorFactors;
//   } else {
//     console.log(`${n} is not prime`);
//   }
// }

// // Testing
// isPrime(29);
// isPrime(9);

// for (j = 0; j < factors.length; j++) {
//   isPrime(factors[j]);
// }

// function primeFactors(n) {
//   const factors = [];
//   for (i = n; i > 0; i--) {
//     if (n % i === 0) {
//       factors.push(i);
//     }
//   }
//   console.log(factors);
//   //
//   //
//   //
//   //
// }
// primeFactors(12);

// // for (j = 0; j < factors.length; j++) {
// //   isPrime(factors[j]);
// // }

// let factorFactors = [];
// for (i = factors[i] - 1; i > 1; i--) {
//   if (n % i === 0) {
//     factorFactors.push(i);
//   }
//   // console.log(factorFactors);
// }
// if (factorFactors.length === 0) {
//   console.log(`${n} is prime`);
// } else {
//   console.log(`${n} is not prime`);
// }

// I think I'm going to start over
// So step one is to get the factors of the number that you put in. Let's start with something small.
// const factors = [];
// function allFactors(n) {
//   for (i = n; i > 0; i--) {
//     if (n % i === 0) {
//       factors.push(i);
//     }
//   }
//   console.log(factors);
// }

// function isPrime(x) {
//   const factorFactors = [];
//   for (j = x - 1; j > 1; j--) {
//     if (x % j === 0) {
//       factorFactors.push(j);
//     }
//   }
//   if (factorFactors.length > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// allFactors(20);

// const primeFactors = [];
// for (z = 0; z < factors.length; z++) {
//   if (isPrime(factors[z])) {
//     primeFactors.push(factors[z]);
//   }
// }

// console.log(primeFactors[0]);

// TRYING TO SIMPLIFY THINGS NOW A LITTLE BIT

// function highestPrimeFactor(number) {
//   const factors = [];
//   function allFactors(n) {
//     for (i = n; i > 0; i--) {
//       if (n % i === 0) {
//         factors.push(i);
//       }
//     }
//     console.log(factors);
//   }
//   function isPrime(x) {
//     const factorFactors = [];
//     for (j = x - 1; j > 1; j--) {
//       if (x % j === 0) {
//         factorFactors.push(j);
//       }
//     }
//     if (factorFactors.length > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   allFactors(number);
//   const primeFactors = [];
//   for (z = 0; z < factors.length; z++) {
//     if (isPrime(factors[z])) {
//       primeFactors.push(factors[z]);
//     }
//   }

//   console.log(primeFactors[0]);
//   return primeFactors[0];
// }

// highestPrimeFactor(13195);

// Okay so that's the first way to do it. It's the brute force method. However this will start getting really really bogged down with larger numbers...let's experiment.
// Next up I want to keep this same method but when it finds a prime number we'll use memoization to make sure that it doesn't have to compute the same stuff multiple times...

function highestPrimeFactor(n, memo = {}) {
  if (n in memo) return memo[n];
  //   So it looks like all factors is pretty costly because
  const factors = [];
  function allFactors(n) {
    const x = n % 2 === 0 ? 2 : 3;
    for (i = Math.ceil(n / x); i > 0; i--) {
      if (n % i === 0) {
        factors.push(i);
      }
    }
    // console.log(factors);
  }
  function isPrime(x) {
    // const factorFactors = [];
    for (j = x - 1; j > 1; j--) {
      if (x % j === 0) {
        // factorFactors.push(j);
        return false;
      }
    }
    return true;
    // if (factorFactors.length > 0) {
    //   return false;
    // } else {
    //   return true;
    // }
  }

  allFactors(n);
  let highestPrimeFactor = 0;
  for (z = 0; z < factors.length; z++) {
    if (isPrime(factors[z])) {
      highestPrimeFactor = factors[z];
      break;
    }
  }

  console.log(highestPrimeFactor);
  return highestPrimeFactor;
}

highestPrimeFactor(54);

