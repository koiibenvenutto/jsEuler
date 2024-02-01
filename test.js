function longDivide(n, d, length) {
  if (d === 0) return undefined;

  let array = Array(length).fill(0);
  let nLength = n.toString().length;
  let nArray = n.toString().split("").map(Number);

  array.splice(0, nLength, ...nArray);

  console.log(array);

  const longDivideRec = (n, d, result = [], i = 1, startN = 1) => {
    if (i === n.length) return result;

    let j = 0;
    while (j < n.length) {
        if
    }


    let quotient = Math.floor(currentN / d);
    console.log(`quotient: ${quotient}`);

    if (quotient >= 1) {
      result.push(quotient);
      console.log(result);

      let difference = currentN - quotient * d;
      nextN = Number(difference.toString() + n[i + 1]);

      //   return longDivideRec(n, d, result, i++);
    }
  };

  return longDivideRec(array, d);
}

console.log(longDivide(1, 1, 100));

//  First step: does the divisor go in to the first digit of the dividend?
// Yes -> * // No -> add a zero to the result and then check if the divisor goes into the 2nd place in the dividend
// *: How many times = n -> first digit of dividend - n*d + next digit of dividend, then repeat.
