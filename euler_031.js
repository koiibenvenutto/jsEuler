const uniqueSumsRec = (target, coinBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [[]];
  if (target < 0) return null;

  let result = [];
  for (let coin of coinBank) {
    let returnValue = uniqueSumsRec(target - coin, coinBank, memo);
    if (returnValue) {
      let combos = returnValue.map((combo) => [coin, ...combo]);
      combos.map((combo) => combo.sort());
      result.push(...combos);
      result = Array.from(new Set(result.map(JSON.stringify))).map(JSON.parse);
    }
  }
  memo[target] = result;
  return result;
};

// console.log(uniqueSumsRec(3, [1, 2]));
// // [[1,1,1], [1,2]]

// console.log(uniqueSumsRec(10, [3, 7, 5]));
// // [[3,7], [5,5]]

console.log(uniqueSumsRec(200, [1, 2, 5, 10, 20, 50, 100, 200]).length);
