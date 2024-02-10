function champsConstant() {
  let product = 1;
  let decimalLength = 0;
  let flag = 1;
  let i = 1;
  while (decimalLength <= 1_000_000) {
    decimalLength += i.toString().length;
    if (decimalLength >= flag) {
      let iArr = i.toString().split("").map(Number);
      let overshoot = decimalLength - flag;
      product *= iArr[iArr.length - 1 - overshoot];
      flag *= 10;
    }
    i++;
  }

  return product;
}

console.log(champsConstant());
