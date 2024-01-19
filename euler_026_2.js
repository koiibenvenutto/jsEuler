function longestRep(n, memo = {}) {
  for (let d = 1; d < n; d++) {
    if (/*factorize(d).filter((isPrime).hasPrimeFactorsNot2or5)*/ true) {
      let expansion = [...(1 / d).toFixed(d * 2)].splice(2).map(Number);
    }
  }
}

// This is how I will get rid of the first two digits of the array and expand out the decimal easily...
// let d = 17;
// let expansion = [...(1 / d).toFixed(d * 2)].splice(2).map(Number);

// console.log(expansion);

// const memo = {};
// //                          i
// //                          j
// //                 0  1  2  3  4  5  6  7  8  -------> length = 9, last index = 8
// const expansion = [1, 2, 3, 1, 2, 3, 1, 2, 3];

// for (let i = 1; i < expansion.length; i++) {
//   console.log("---------");
//   console.log(`i: ${i}`);
//   let seq = expansion.slice(0, i);

//   console.log(seq);

//   let j = i;
//   let foundRep = true;
//   while (j < expansion.length - seq.length) {
//     console.log(`j: ${j}`);
//     let nextSeq = expansion.slice(j, j + seq.length);
//     console.log(nextSeq);
//     if (!arraysAreEqual(seq, nextSeq)) {
//       foundRep = false;
//     }
//     j += seq.length;
//   }

//   console.log(foundRep);

//   if (foundRep === true) {
//     memo["n"] = seq;
//   }
// }

// console.log(memo);

// Just realized there's a way easier way to do this:

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
    notMultiple(seq, longestCycle) &&
    seq.length > longestCycle.length
  ) {
    longestCycle = seq;
    console.log("SEQ == NEXTSEQ && not multiple");
  }
}

// This code ensures that once a long rep has been found that it truly is the entire length of the expansion and therefore a real repeating cycle
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
