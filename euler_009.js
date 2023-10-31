// let a = 3;
// let b = 4;
// let c = 5;

// let aSq = a ** 2;
// let bSq = b ** 2;
// let cSq = c ** 2;

// let aSqPlusBsq = aSq + bSq;
// if (aSqPlusBsq === cSq) {
//   console.log(`This is a pythagorean triplet: ${a}^2 + ${b}^2 = ${c}^2`);
// }

// cycle through all possiblities for a and b and check if sqrt(a^2 + b^2) is a natural number between 334 and 500

function allAs(b) {
  for (let a = 1; a < 333; a++) {
    let c = Math.sqrt(a ** 2 + b ** 2);

    if (a + b + c === 1000) {
      console.log(`${a} + ${b} + ${c} = 1000`);
      return a * b * c;
    }
  }
}

for (let b = 1; b < 500; b++) {
  if (allAs(b)) {
    console.log(allAs(b));
    break;
  }
}
