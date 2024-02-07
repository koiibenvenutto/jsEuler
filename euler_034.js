const factorials0to9 = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

function digitFactorials() {
  let result = 0;
  for (let n = 3; n < 10_000_000; n++) {
    let nArr = n.toString().split("").map(Number);
    // console.log(nArr);
    const factorials = [];
    for (let digit of nArr) {
      factorials.push(factorials0to9[digit]);
    }
    // console.log(factorials);
    let factorialSum = factorials.reduce(
      (accumulator, currentValue) => currentValue + accumulator,
      0
    );
    // console.log(factorialSum);
    if (factorialSum === n) {
      result += n;
    }
  }
  return result;
}

console.log(digitFactorials());
