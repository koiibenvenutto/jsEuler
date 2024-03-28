function selfPowers(limit) {
  let power,
    sum = 0;
  for (let i = 1; i < limit; i++) {
    console.log(i);
    power = i ** i;
    sum += power;
  }

  return sum;
}

console.log(selfPowers(11));
