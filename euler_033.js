const factorize = require("./utils/factorize");

function digitCancellingFractions() {
  const sharedElement = (a, b) => {
    let shared = false;
    let i = a.length - 1;
    while (i > -1) {
      //   console.log(i);
      for (let j = b.length - 1; j > -1; j--) {
        // console.log(j);
        // console.log(shared);

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
      //   console.log("t1");
      // the fraction must be <1 so d must never be less than n
      for (let d = n + 1; d < 100; d++) {
        if (d % 10 !== 0) {
          //   console.log("t2");
          // Check if n and d have at least one number in common other than 0
          let nArray = n.toString().split("").map(Number);
          let dArray = d.toString().split("").map(Number);

          //   console.log(n);
          //   console.log(d);
          //   console.log(nArray);
          //   console.log(dArray);

          let commonNum = sharedElement(nArray, dArray);
          //   console.log(commonNum);
          if (commonNum[0]) {
            // console.log("t3");
            // Check if n and d have at least one shared factor
            let sharedFactor = sharedElement(factorize(n), factorize(d));
            if (sharedFactor[0]) {
              // Working up to here :)

              //   Next let's check if when we cancel the shared digit, the fraction is still <1
              let nCancel = Number(
                nArray.filter((num) => num !== commonNum[1]).join()
              );
              let dCancel = Number(
                dArray.filter((num) => num !== commonNum[1]).join()
              );
              //   This makes sure that even if both numbers get removed from n or d that we add one back in (eg: 99 -> 0 -> 9)
              if (nCancel === 0) nCancel = commonNum[1];
              if (dCancel === 0) dCancel = commonNum[1];

              //   console.log(nCancel);
              //   console.log(dCancel);

              let cancelDecimal = nCancel / dCancel;
              //   console.log(`CancelDecimal: ${cancelDecimal}`);
              if (cancelDecimal < 1) {
                // Confirmed: this method works to find the GCD
                // console.log(`GCD of ${n} and ${d}: ${sharedFactor[1]}`);

                // Now it's time to divide n and d by their GCD and see if it's equal to cancelDecimal
                // Wait if I just convert it to a decimal then I don't have to bother with all of this simplifying fractions BS until I know for sure that it's a digit cancelling fraction

                if (n / d === cancelDecimal) {
                  //   console.log(n);
                  //   console.log(d);
                  //   console.log(`${n / d} === ${cancelDecimal}`);
                  //   console.log("--------");
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

// console.log(digitCancellingFractions());
/* 







*/

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

  // Initialize product numerator and denominator
  let productNumerator = 1;
  let productDenominator = 1;

  // Multiply all numerators and denominators
  fractions.forEach((fraction) => {
    productNumerator *= fraction[0];
    productDenominator *= fraction[1];
  });

  // Reduce the resulting fraction
  return reduceFraction(productNumerator, productDenominator);
}

console.log(productOfFractions(digitCancellingFractions())[1]);
