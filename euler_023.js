const factorize = require("./utils/factorize");
const sumArr = require("./utils/sumArr");

const cantAdundantSum = (limit) => {
  // Build an array of abundant numbers
  const abundantNumbers = [];
  for (let i = 12; i < limit; i++) {
    if (sumArr(factorize(i)) > i) abundantNumbers.push(i);
  }

  //   Now we'll find all the possible sums and put them in our array:

  const abundantSums = new Array(limit).fill(false);
  for (let i of abundantNumbers) {
    for (let j of abundantNumbers) {
      if (i + j <= limit) abundantSums[i + j] = true;
    }
  }

  nonAbundantSumsSum = 0;
  for (let i = 0; i < limit; i++) {
    if (!abundantSums[i]) {
      nonAbundantSumsSum += i;
    }
  }

  console.log(abundantSums);

  return nonAbundantSumsSum;
};

console.log(cantAdundantSum(28123));

// TODO: See about maybe using a memoizing canSum funciton to cut down time complexity here?
// Just need to make sure that I'm doing it in a way where the memo is utilized correctly
// canSumRec added to utils...Mayb need to pull it into here to have the memo work correctly...will investigate.
