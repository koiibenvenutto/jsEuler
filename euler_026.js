function longestRepCycle(n) {
  for (let d = 1; d < n; d++) {
    if (/*factorize(d).filter((isPrime).hasPrimeFactorsNot2or5)*/ true) {
      let decExpansion = (1 / d)
        .toFixed(d * 2)
        .toString()
        .split("");
      for (let i = 0; i < d * 2; i++) {}
    }
  }
}

// This is how I will get rid of the first two digits of the array and expand out the decimal easily...
let d = 17;
let decExpansion = [...(1 / d).toFixed(d * 2)].splice(2).map(Number);

console.log(decExpansion);
