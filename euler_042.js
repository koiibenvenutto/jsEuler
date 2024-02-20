const arrayFromFile = require("./utils/arrayFromFile");

const wordBank = arrayFromFile("./files/0042_words.txt");

function triangleWords(wordBank) {
  const wordToValue = (word) => {
    // console.log(word);

    const letterValues = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
      I: 9,
      J: 10,
      K: 11,
      L: 12,
      M: 13,
      N: 14,
      O: 15,
      P: 16,
      Q: 17,
      R: 18,
      S: 19,
      T: 20,
      U: 21,
      V: 22,
      W: 23,
      X: 24,
      Y: 25,
      Z: 26,
    };

    word = word.split("");
    // console.log(word);

    return word
      .map((letter) => letterValues[letter])
      .reduce((currentValue, accumulator) => accumulator + currentValue, 0);
  };

  const valueBank = wordBank
    .map((word) => wordToValue(word))
    .sort((a, b) => a - b);
  console.log(valueBank);
  const highestValueWord = valueBank.pop();
  console.log(highestValueWord);

  const triangleNumbers = (limit) => {
    // console.log(limit);
    let n = 1;
    const tNs = [0];
    while (tNs[tNs.length - 1] <= limit) {
      let currentTn = n * 0.5 * (n + 1);
      console.log(currentTn);
      tNs.push(currentTn);
      n++;
    }
    return tNs.slice(0, tNs.length - 1);
  };
  const tNumbers = triangleNumbers(highestValueWord);
  console.log(tNumbers);

  const triangleWordBank = valueBank.filter(
    (value) => tNumbers.indexOf(value) !== -1
  );
  return triangleWordBank.length;
}

console.log(triangleWords(wordBank));
