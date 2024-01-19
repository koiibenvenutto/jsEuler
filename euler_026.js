function longestRep(n, memo = {}) {
  for (let d = 1; d < n; d++) {
    if (/*factorize(d).filter((isPrime).hasPrimeFactorsNot2or5)*/ true) {
      let expansion = [...(1 / d).toFixed(d * 2)].splice(2).map(Number);
      for (let i = 0; i < expansion.length; i++) {
        let sequence = expansion.slice(0, i);
        let remainder = expansion.slice(i, sequence.length);
        if (sequence) {
        }
      }
    }
  }
}

function arraysAreEqual(array1, array2) {
  // Check if the arrays are the same length
  if (array1.length !== array2.length) {
    return false;
  }

  // Check each element in the arrays
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  // If all elements are equal, return true
  return true;
}

function notMultiple(array1, array2) {
  // Check if length of array1 is a multiple of the length of array2
  if (array1.length % array2.length !== 0) {
    return true;
  }

  // Calculate how many times array2 should repeat
  const repeatCount = array1.length / array2.length;

  // Check if array1 is composed of array2 repeated 'repeatCount' times
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i % array2.length]) {
      return true;
    }
  }

  // If all checks pass, then array1 is a multiple of array2
  return false;
}

const memo = {};
//                          i
//                          j
//                 0  1  2  3  4  5  6  7  8  -------> length = 9, last index = 8
const expansion = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];

let longestCycle = [];
let seq = [];
let seqMultiple = false;

for (let i = 1; i < expansion.length; i++) {
  console.log("---------");
  console.log(`i: ${i}`);
  seq = expansion.slice(0, i);
  let nextSeq = expansion.slice(i, i + seq.length);

  console.log(seq);
  console.log(nextSeq);

  if (
    arraysAreEqual(seq, nextSeq) &&
    seq.length > longestCycle.length &&
    notMultiple(seq, longestCycle)
  ) {
    longestCycle = seq;
    console.log("SEQ == NEXTSEQ && not multiple");
  }
}

// This code ensures that once a long rep has been found that it truly is the entire length of the expansion and therefore a real repeating cycle
// Only performed once at the end, I suppose it could lead to a false positive but the chances are astronomically low...
let cycleLength = longestCycle.length;
let checkReps = Math.floor(expansion.length / cycleLength);
let checkHere = (checkReps - 1) * cycleLength;
let endSegment = expansion.slice(checkHere, checkHere + cycleLength);

console.log(`checkReps: ${checkReps}`);
console.log(`cycleLength: ${cycleLength}`);
if (arraysAreEqual(endSegment, longestCycle)) {
  memo["n"] = cycleLength;
} else {
  memo[n] = 0;
}

console.log(memo);

// But what about the situation where you have something like 123_123_999 where longestCycle would end up being 123 even though it's not a repeating cycle...Why don't I just check that