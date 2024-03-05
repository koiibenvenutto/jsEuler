const primeSieve = require("./utils/sieveOfEratosthenes");

const oddComposites = require("./utils/oddComposites");

const squares = (limit) => {
  const array = Array(limit).fill(0);
  for (let ix = 0; ix < array.length; ix++) {
    array[ix] = ix ** 2;
  }

  return array;
};

// console.log(squares(10));

function goldbachsOther(limit) {
  // This is for the y loop where we'll cycle through all odd composite numbers
  const ocArray = oddComposites(limit);

  // This is for the
  const primeArray = primeSieve(limit);

  // squares
  const squaresArray = squares(limit);

  let result = 0;

  for (let y = 0; ocArray[y] < limit; y++) {
    for (let a = 0; primeArray[a] < limit; a++) {
      for (let b = 0; squaresArray[b] < limit; b++) {
        for (let c = 0; squaresArray[c] < limit; c++) {}
      }
    }
  }
}

console.log(goldbachsOther(10));
