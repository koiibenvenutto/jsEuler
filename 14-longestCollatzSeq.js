// if (known.has(n)) {
//     return false;
//   } else

// function loop(starter) {
//   let seq = [];
//   for (i = starter; i > 1; i++) {
//     if (!known.has(i)) {
//       seq.push(collatz(i));
//     }
//   }
// }

const knownSeqs = new Map();

function collatzSeqLengthOf(n) {
  let seqLength = 1;
  if (knownSeqs.has(n)) {
    return (seqLength += knownSeqs.get(n) - 1);
  }

  function checkEvenOdd(n) {
    let result = 0;
    if (n % 2 === 0) {
      result = n / 2;
    } else {
      result = 3 * n + 1;
    }
    // console.log(result);
    seqLength += 1;
    if (result !== 1) {
      checkEvenOdd(result);
    }
    return result;
  }

  checkEvenOdd(n);
  return seqLength;
}

let longestSeq = [0, 0];
for (i = 2; i < 1_000_000; i++) {
  if (!knownSeqs.has(i)) {
    knownSeqs.set(i, collatzSeqLengthOf(i));
    if (collatzSeqLengthOf(i) > longestSeq[1]) {
      longestSeq = [i, collatzSeqLengthOf(i)];
    }
  }
}

console.log(knownSeqs);
console.log(longestSeq);

// console.log(collatzSeqLengthOf(13));

// console.log(knownSeqs.get(4));

// The next step is to check along the way so that we don't do duplicate work

// Why not just keep track of which has the highest value along the way instead of waiting until the end?
