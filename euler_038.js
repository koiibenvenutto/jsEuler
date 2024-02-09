function pandigitalMultiples(n) {
  let largest = 0;
  for (let i = 1; i < n; i++) {
    let concatProduct = [];
    let j = 1;
    while (j < 10) {
      let product = (i * j).toString();
      //console.log(product);

      concatProduct.push(...product);
      //console.log(concatProduct);
      let test = [...new Set([...concatProduct])].length;

      if (
        concatProduct.indexOf("0") !== -1 ||
        concatProduct.length > 9 ||
        concatProduct.length !== test
      )
        break;

      // Now we know that the product has all unique digits...
      // is not going to make the concatProduct longer than 9 digits
      // and has no shared digits with the current concatProduct

      if (concatProduct.length === 9) {
        if (Number(concatProduct.join("")) > largest) {
          largest = Number(concatProduct.join(""));
          break;
        }
      }

      j++;
    }
  }

  return largest;
}

console.log(pandigitalMultiples(10_000));

// .toString().split("").sort()
