function pandigitalIdentity() {
  const pdIdentityProducts = new Set();
  //   i and j start at 3 and 4 respectively because first pandigital num is 12 (1,2,3,4)
  for (let i = 1; i <= 9_999; i++) {
    let jLimit = Number(
      Array(5 - i.toString().length)
        .fill("9")
        .join("")
    );
    // console.log(jLimit);

    for (let j = 1; j <= jLimit; j++) {
      let product = i * j;
      let identity = [i, j, product]
        .map((num) => num.toString())
        .join("")
        .split("")
        .sort();

      //   console.log(identity);
      const isPanDigital = identity.join("") === "123456789";

      if (isPanDigital === true) {
        // console.log(product);
        pdIdentityProducts.add(product);
      }
    }
  }

  const sum = [...pdIdentityProducts].reduce(
    (accumulator, currentValue) => currentValue + accumulator,
    0
  );

  return sum;
}

console.log(pandigitalIdentity());

// let i = 10_000;
// let jLimit = Number(
//   Array(6 - i.toString().length)
//     .fill("9")
//     .join("")
// );

// console.log(jLimit);
