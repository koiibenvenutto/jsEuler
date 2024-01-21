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

  for (let d = 2; d <= n; d++) {
    let longestCycle = [];
    let seq = [];

    if (/*factorize(d).filter((isPrime).hasPrimeFactorsNot2or5)*/ true) {
      //   console.log("--------------------------");
      let expansion = [...(1 / d).toFixed(d * 2)].splice(2).map(Number);

      for (let i = 1; i < expansion.length; i++) {
        for (let j = 0; j < i; j++) {
          seq = expansion.slice(j, i);
          let nextSeq = expansion.slice(i, i + seq.length);

          //   console.log(`d: ${d}, j: ${j}, i: ${i}`);
          //   console.log(expansion);
          //   console.log(`seq: ${seq} --- nextSeq: ${nextSeq}`);

          //   Check that it's not a repeating pattern of 0's
          let nonZero = nextSeq.every((element) => element !== 0);
          //   console.log(nonZero);

          if (
            nonZero &&
            arraysAreEqual(seq, nextSeq) &&
            seq.length > longestCycle.length &&
            notMultiple(seq, longestCycle)
          ) {
            longestCycle = seq;
          }
        }
      }
      if (longestCycle[0]) memo[d] = longestCycle.length;
    }
  }

  return memo;
}

console.log(longestRep(50));

// Awesome now I just need to add the functionality for category 2 numbers: divisible by primes 2, 5, and others... Because right now if there's a non repeating section in the beginning then it's going to return 0 which is incorrect. Time for lunch.

//   Okay so the next step is making this work for situations where there's a non repeating section before the repeating section begins...

/* UNUSED STUFFS

      let checkReps = Math.floor(expansion.length / cycleLength);
      let checkHere = (checkReps - 1) * cycleLength;
      let endSegment = expansion.slice(checkHere, checkHere + cycleLength);

      //   if (arraysAreEqual(endSegment, longestCycle)) {
      //   } else {
      //     memo[d] = 0;
      //   }
*/

/* Amazing so as of 012124_1105 I have this working for numbers 1-10! Awesome the issue I'm running into is that when I try and run this for any number with a decimal expansion longer than 100 digits TODO: the toFixed method throws as error because I guess it can only handle 100 digits... So I'll need to come back and fix that. However, today was amazing progress, I barely felt any resistance and that makes me super super happy!!! TODO: I think I'm going to consider adding this updates to the readMe section of the github repo so that people can see my growth more clearly when they look at the repo*/
