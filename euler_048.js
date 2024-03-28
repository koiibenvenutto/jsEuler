function selfPowers(limit) {
  limit = BigInt(limit);
  console.log(limit);
  let power,
    sum = 0n;
  for (let i = 1n; i < limit; i++) {
    console.log(i);
    power = i ** i;
    sum += power;
  }
  let string = sum.toString();
  return string.slice(string.length - 10);
}

console.log(selfPowers(1001));
