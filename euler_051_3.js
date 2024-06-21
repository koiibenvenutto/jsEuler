const isPrime = require("./utils/isPrime");

// function primeDigitReplacement() {
//   const numArr = [1, 3];
//   //   console.log(numArr);
//   let family = [];
//   for (let i = 2; i < 10; i++) {
//     number = Number(numArr.join(""));
//     // console.log(number);
//     if (isPrime(number)) family.push(number);

//     numArr[0] = i;
//   }

//   return family;
// }

// console.log(primeDigitReplacement());

// I think the hardest part here is just knowing how to generate the combos

// Testing that this logic works:
// const array = [1, 2, ""];
// let numberOfEmptyStrings = array.filter((element) => element === "");
// console.log(numberOfEmptyStrings.length);

// testing base cases:
// const array = [1];
// Expected -> []
// Confirmed

// const array = ["", "", 3];
// Expected -> ["", "", 3];
// Confirmed

// function generateCombos(array) {
//   //   if (array.length < 2) return [];
//   let numberOfEmptyStrings = array.filter((element) => element === "").length;
//   //   console.log(numberOfEmptyStrings);
//   if (numberOfEmptyStrings >= array.length - 1) return [];

//   let results = [];

//   for (let i = 0; i < array.length; i++) {
//     let currentCombo = array.slice();
//     currentCombo[i] = "";
//     if (currentCombo.toString() !== array.toString()) {
//       //   console.log(currentCombo);
//       results.push(currentCombo, ...generateCombos(currentCombo));
//     }
//   }

//   return results;
// }

// const array = [1, 2, 3];
// console.log(generateCombos(array));

// const array2 = ["", 2, 3];
// console.log(generateCombos(array2));

// I think that I would rather use a string than array... for example *23, 1*3, 12* That way I don't have to deal with these reference errors when setting currentCombo equal to array or having to do a whole bunch of extra work to filter out the duplicates when I turn the array into a set. But hey! Take a moment to pat yourself on the back! I did it! I got it to neatly return all possible combos in an array! Just need to optimize now! that's a big accomplishment! You got this, it's hard but keep going!

const primeSieve = require("./utils/sieveOfEratosthenes");

function generateCombos(string) {
  if (string.length < 2) return [];
  let starsLength = string
    .split("")
    .filter((element) => element === "*").length;
  // console.log(starsLength);
  if (starsLength >= string.length - 1) return [];

  let results = [];

  for (let i = 0; i < string.length; i++) {
    let comboArr = string.split("");
    comboArr[i] = "*";
    // console.log(comboArr);
    comboStr = comboArr.join("");
    // console.log(results);
    // console.log(comboStr);
    if (comboStr !== string) {
      // console.log(comboStr);
      results.push(comboStr, ...generateCombos(comboStr));
    }
  }

  const uniqueCombos = new Set([...results]);
  results = [...uniqueCombos];

  return results;
}

// const string = "123";
// console.log(generateCombos(string));

// console.log(generateCombos("abcdef"));
function primeDigitReplacement(limit, length) {
  let primes = primeSieve(limit);

  primes = primes.filter((prime) => prime.toString().length > 1);
  primes = primes.map((prime) => prime.toString());

  for (let prime of primes) {
    let combos = generateCombos(prime);

    for (let combo of combos) {
      let results = [];

      for (let ix = 1; ix < 10; ix++) {
        let comboClone = combo
          .split("")
          .map((char) => {
            return char === "*" ? ix : char;
          })
          .join("");

        comboClone = Number(comboClone);
        if (isPrime(comboClone)) results.push(comboClone);
      }

      if (results.length >= length) return results; // Key change: return the results properly
    }
  }
}
// console.log(primeDigitReplacement(14, 6));
console.log(primeDigitReplacement(1000000, 8));

// const limit = 14;

// console.log(primeSieve(limit));

// 052124_1503 Alright you did it! Great work! Now stop for today, give yourself some love, and next time you pick this up, move onto the next part of the problem!
