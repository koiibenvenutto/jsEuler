const digitPowers = (pow) => {
  let sum = 0;
  for (let num = 2; num < 1_000_000; num++) {
    let products = num
      .toString()
      .split("")
      .map((num) => Number(num) ** pow);

    // console.log(`products: ${products}`);

    let result = products.reduce(
      (accumulator, currentValue) => currentValue + accumulator,
      0
    );

    // console.log(result);

    if (result === num) sum += num;
  }

  return sum;
};

// console.log(digitPowers(4));
// Expected Return: 19316

console.log(digitPowers(5));
// Soution: 443839
