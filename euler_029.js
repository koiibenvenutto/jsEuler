const distinctPowers = (limit) => {
  const distinctTerms = new Set([]);
  for (let base = 2; base <= limit; base++) {
    for (let pow = 2; pow <= limit; pow++) {
      distinctTerms.add(base ** pow);
    }
  }

  return [...distinctTerms].length;
};

console.log(distinctPowers(5));
console.log(distinctPowers(100));
