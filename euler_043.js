const permute = require("./utils/permute");

// permute util function takes a string and test function to be run on every permutation of the string allowing for easy testing. It will return an array off all permutations that pass the test.

function hasProperty(string) {
  let primes = [2, 3, 5, 7, 11, 13, 17];
  let hasProp = true;
  for (let i = 1; i < string.length - 2; i++) {
    // // console.log(i);
    let slice = Number(string.slice(i, i + 3));
    // console.log(slice);
    // console.log(primes[i - 1]);
    if (slice % primes[i - 1] !== 0) {
      hasProp = false;
      break;
    }
  }
  return hasProp;
}

// console.log(hasProperty("1406357289"));

console.log(
  permute("0123456789", hasProperty)
    .map(Number)
    .reduce((currentValue, accumulator) => accumulator + currentValue, 0)
);
