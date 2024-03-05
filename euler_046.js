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
  console.log(ocArray);

  // This is for the
  const primeArray = primeSieve(limit);

  // squares
  const squaresArray = squares(limit);

  let y, a, b;
  let equation;
  for (y = 0; ocArray[y] < limit; y++) {
    equation = false;
    for (a = 0; !equation && primeArray[a] < limit; a++) {
      for (b = 0; !equation && squaresArray[b] < limit; b++) {
        equation = ocArray[y] === primeArray[a] + 2 * squaresArray[b];

        if (equation) {
          console.log(
            `${ocArray[y]} = ${primeArray[a]} + 2 * ${squaresArray[b]}`
          );
          console.log(equation);
        }
      }
    }
    if (!equation) return ocArray[y];
  }
  return "all oddComposites test true so far. :P";
}

console.log(goldbachsOther(10000));
