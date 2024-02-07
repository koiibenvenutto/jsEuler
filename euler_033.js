const factorize = require("./utils/factorize");

function digitCancellingFractions() {
  const sharedElement = (a, b) => {
    let shared = false;
    let i = a.length - 1;
    while (i > -1) {
      for (let j = b.length - 1; j > -1; j--) {
        if (a[i] === b[j]) {
          shared = true;
          break;
        }
      }
      if (shared) break;
      i--;
    }
    return [shared, a[i]];
  };

  const result = [];
  for (let n = 12; n < 100; n++) {
    if (n % 10 !== 0) {
      for (let d = n + 1; d < 100; d++) {
        if (d % 10 !== 0) {
          let nArray = n.toString().split("").map(Number);
          let dArray = d.toString().split("").map(Number);

          let commonNum = sharedElement(nArray, dArray);
          if (commonNum[0]) {
            let sharedFactor = sharedElement(factorize(n), factorize(d));
            if (sharedFactor[0]) {
              let nCancel = Number(
                nArray.filter((num) => num !== commonNum[1]).join()
              );
              let dCancel = Number(
                dArray.filter((num) => num !== commonNum[1]).join()
              );
              if (nCancel === 0) nCancel = commonNum[1];
              if (dCancel === 0) dCancel = commonNum[1];

              let cancelDecimal = nCancel / dCancel;
              if (cancelDecimal < 1) {
                if (n / d === cancelDecimal) {
                  result.push([n, d]);
                }
              }
            }
          }
        }
      }
    }
  }

  return result;
}

function productOfFractions(fractions) {
  function gcd(a, b) {
    while (b !== 0) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  function reduceFraction(numerator, denominator) {
    let greatestCommonDivisor = gcd(numerator, denominator);
    return [
      numerator / greatestCommonDivisor,
      denominator / greatestCommonDivisor,
    ];
  }

  let productNumerator = 1;
  let productDenominator = 1;

  fractions.forEach((fraction) => {
    productNumerator *= fraction[0];
    productDenominator *= fraction[1];
  });

  return reduceFraction(productNumerator, productDenominator);
}

console.log(productOfFractions(digitCancellingFractions())[1]);
