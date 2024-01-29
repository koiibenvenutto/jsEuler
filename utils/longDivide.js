function longDivide(n, d, resolution = n.toString().length) {
  nArr = n.toString().split("").map(Number);

  let diff = 0;
  const result = [];

  for (let i = 0; i < Infinity; i++) {
    if (i === n.toString().length) {
      result.push(".");
    }
    let currentN = diff.toString() + "0";
    if (nArr[i]) {
      currentN = Number(diff.toString() + nArr[i].toString());
    }

    let q = Math.floor(currentN / d);
    diff = currentN - d * q;

    result.push(q);

    if (
      result.indexOf(".") !== -1 &&
      result.length - result.indexOf(".") >= resolution + 1
    ) {
      break;
    }
  }

  result.splice(0, result.indexOf(".") - 1);
  return result;
}

// console.log(longDivide(1, 584, 50).join(""));
// console.log(longDivide(1, 17, 50).join(""));
// console.log(longDivide(1, 997, 50).join(""));

// 7 / 53 to a resolution of 20 decimal places
// console.log(longDivide(7, 53, 20));
// Expected Result: 0.13207547169

// console.log(longDivide(1, 2, 10));
// Expected Result: 0.500000000

// console.log(longDivide(13, 29, 12));
// Expected Result: 0.44827586206

// console.log(longDivide(119, 2332, 20));
// // Expected Result: 0.05102915951

module.exports = longDivide;
