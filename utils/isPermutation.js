// How do I want to handle when they are equal? Is that a permutation of something? I'm going to say no, if they're equal that's a base case no
function isPermutation(j, k) {
  if (j === k) return false;
  let jStr = j.toString();
  // console.log(jStr);
  let kStr = k.toString();
  // console.log(kStr);
  if (jStr.length !== kStr.length) return false;
  let jSorted = jStr.split("").map(Number).sort().join("");
  // console.log(jSorted);
  let kSorted = kStr.split("").map(Number).sort().join("");
  // console.log(kSorted);

  if (jSorted !== kSorted) return false;

  return true;
}

// console.log(isPermutation(123, 123));
// false
// console.log(isPermutation(1234, 324));
// false
// console.log(isPermutation(12398742, 4463));
// false
// console.log(isPermutation(123, 312));
// true

module.exports = isPermutation;
