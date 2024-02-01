function isPrime(num) {
    if (num <= 1) return false; // numbers less than 2 are not prime
    if (num <= 3) return true; // 2 and 3 are prime
  
    // check if num is divisible by 2 or 3
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    // check for divisibility by all numbers of form 6k ± 1, up to sqrt(num)
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }

  module.exports = isPrime;