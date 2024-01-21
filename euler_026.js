function longestRep(n, memo = {}) {
  function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

    return true;
  }

  function notMultiple(array1, array2) {
    if (array1.length % array2.length !== 0) {
      return true;
    }

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i % array2.length]) {
        return true;
      }
    }

    return false;
  }

  for (let d = 1; d < n; d++) {
    if (/*factorize(d).filter((isPrime).hasPrimeFactorsNot2or5)*/ true) {
      let expansion = [...(1 / d).toFixed(d * 2)].splice(2).map(Number);

      let longestCycle = [];
      let seq = [];

      for (let i = 1; i < expansion.length; i++) {
        seq = expansion.slice(0, i);
        let nextSeq = expansion.slice(i, i + seq.length);

        if (
          arraysAreEqual(seq, nextSeq) &&
          seq.length > longestCycle.length &&
          notMultiple(seq, longestCycle)
        ) {
          longestCycle = seq;
        }
      }

      let cycleLength = longestCycle.length;
      let checkReps = Math.floor(expansion.length / cycleLength);
      let checkHere = (checkReps - 1) * cycleLength;
      let endSegment = expansion.slice(checkHere, checkHere + cycleLength);

      if (arraysAreEqual(endSegment, longestCycle)) {
        memo[d] = cycleLength;
      } else {
        memo[d] = 0;
      }
    }
  }

  return memo;
}

console.log(longestRep(10));

// Awesome now I just need to add the functionality for category 2 numbers: divisible by primes 2, 5, and others... Because right now if there's a non repeating section in the beginning then it's going to return 0 which is incorrect. Time for lunch.
