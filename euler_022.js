const fs = require("fs");
const sumArr = require("./utils/sumArr");

function readNamesFromFile(filePath) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, "utf8");

    // Split the data by comma and remove the quotes from each name
    const names = data.split(",").map((name) => name.replace(/"/g, "").trim());

    return names;
  } catch (err) {
    console.error("Error reading the file:", err);
    return [];
  }
}

const namesArray = readNamesFromFile("./files/0022_names.txt");

// console.log(namesArray);

function letterToAlphabetPosition(letter) {
  let charCode = letter.charCodeAt(0);
  if (charCode >= 97 && charCode <= 122) {
    // Lowercase letters
    return charCode - 96;
  } else if (charCode >= 65 && charCode <= 90) {
    // Uppercase letters
    return charCode - 64;
  } else {
    return null; // Not a letter
  }
}

function nameScore(unordNameArray) {
  const alphabeticalNames = unordNameArray.sort();
  const nameToBaseScore = (nameStr) => {
    const nameArray = nameStr
      .split("")
      .map((letter) => letterToAlphabetPosition(letter));

    return sumArr(nameArray);
  };

  const nameScores = alphabeticalNames.map((nameStr) =>
    nameToBaseScore(nameStr)
  );

  let sum = 0;
  for (let i = 0; i < nameScores.length; i++) {
    sum += nameScores[i] * (i + 1);
  }

  return sum;
}

console.log(nameScore(namesArray));
