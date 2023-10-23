const primes = [2];

function isPrime(n) {
  if (n % 2 === 0) {
    return false;
  } else if (n % 3 === 0) {
    return false;
  }
  for (let i = 5; i < n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return n;
}

for (let j = 3; primes.length <= 10_000; j += 2) {
  isPrime(j) ? primes.push(isPrime(j)) : "";
}

console.log(primes);
console.log(primes[10_000]);
