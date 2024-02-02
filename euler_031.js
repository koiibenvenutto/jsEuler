// const canSum = (target, coinBank) => {
//   if (target === 0) return true;
//   if (target < 0) return false;

//   for (let coin of coinBank) {
//     if (canSum(target - coin, coinBank)) return true;
//   }

//   return false;
// };

// console.log(canSum(10, [1, 2, 5]));
// // true

// console.log(canSum(10, [7, 9]));
// // false

// const allSum = (target, coinBank, sum = 0, memo = {}) => {
//   if (target === 0) return 1;
//   if (target in memo) return memo[target];
//   if (target < 0) return 0;

//   for (let coin of coinBank) {
//     let result = allSum(target - coin, coinBank, sum, memo);
//     if (result) {
//       sum += allSum(target - coin, coinBank, sum, memo);
//     }
//   }
//   memo[target] = sum;
//   return sum;
// };

// console.log(allSum(3, [1, 2]));
// // 3

// console.log(allSum(5, [1, 2, 5, 10, 20, 50, 100, 200]));

// console.log(BigInt(allSum(200, [1, 2, 5, 10, 20, 50, 100, 200])));

// Okay so I think the problem is that it's askting for "different" ways I don't think that the same coins in a different order count toward the number of ways. I think they define different as a unique combintation of coins regardless of order.

// const uniqueSums = (target, coinBank) => {
//   if (target === 0) return [[]];
//   if (target < 0) return null;

//   const result = [];
//   for (let coin of coinBank) {
//     let returnValue = uniqueSums(target - coin, coinBank);
//     if (returnValue) {
//       let combos = returnValue.map((combo) => [coin, ...combo]);
//       result.push(...combos);
//     }
//   }

//   return result;
// };

// console.log(uniqueSums(3, [1, 2]));
// // [[1,1,1], [1,2]]

// const allConstruct = (target, wordBank) => {
//   if (target === "") return [[]];

//   const result = [];

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       const suffixWays = allConstruct(suffix, wordBank);
//       const targetWays = suffixWays.map((way) => [word, ...way]);
//       result.push(...targetWays);
//     }
//   }

//   return result;
// };

// console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

// Now I have the core function working, it's time to ensure that all values are unique

// function uniqueSums(target, coinBank) {
//   const uniqueSumsRec = (target, coinBank) => {
//     if (target === 0) return [[]];
//     if (target < 0) return null;

//     const result = [];
//     for (let coin of coinBank) {
//       let returnValue = uniqueSumsRec(target - coin, coinBank);
//       if (returnValue) {
//         let combos = returnValue.map((combo) => [coin, ...combo]);
//         combos.map((combo) => combo.sort());
//         result.push(...combos);
//       }
//     }

//     return result;
//   };

//   return Array.from(
//     new Set(uniqueSumsRec(target, coinBank).map(JSON.stringify))
//   ).map(JSON.parse);
// }

// console.log(uniqueSums(3, [1, 2]));
// // [[1,1,1], [1,2]]

// console.log(uniqueSums(10, [3, 7, 5]));
// // [[3,7], [5,5]]

// console.log(uniqueSums(200, [1, 2, 5, 10, 20, 50, 100, 200]));

// Okay now that I have it totally unique, it's time to add in the memoization

function uniqueSums(target, coinBank) {
  const memo = {};
  const uniqueSumsRec = (target, coinBank) => {
    if (target in memo) return memo[target];
    if (target === 0) return [[]];
    if (target < 0) return null;

    const result = [];
    for (let coin of coinBank) {
      let returnValue = uniqueSumsRec(target - coin, coinBank, memo);
      if (returnValue) {
        let combos = returnValue.map((combo) => [coin, ...combo]);
        combos.map((combo) => combo.sort());
        result.push(...combos);
      }
    }
    memo[target] = result;
    return result;
  };

  return Array.from(
    new Set(uniqueSumsRec(target, coinBank).map(JSON.stringify))
  ).map(JSON.parse);
}

console.log(uniqueSums(3, [1, 2]));
// [[1,1,1], [1,2]]

console.log(uniqueSums(10, [3, 7, 5]));
// [[3,7], [5,5]]

console.log(uniqueSums(200, [1, 2, 5, 10, 20, 50, 100, 200]));
