function highestPrimeFactor(n, counter = 2) {
  let x = 0;
  for (i = counter; i < n; i) {
    if (n % i === 0) {
      x = n / i;
      console.log(`${n} / ${counter} = ${x}`);
      highestPrimeFactor(x, counter);
      break;
    } else {
      i++;
      counter = i;
    }
  }
}

highestPrimeFactor(600851475143);