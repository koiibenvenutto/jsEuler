function oddComposites(limit) {
  // Function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num <= 3) return true; // 2 and 3 are prime numbers
    if (num % 2 === 0 || num % 3 === 0) return false; // Check divisibility by 2 or 3
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  const oddCompositeNumbers = [];

  for (let num = 3; num <= limit; num += 2) {
    // Iterate through odd numbers only
    if (!isPrime(num)) {
      // If the number is not prime, it's composite
      oddCompositeNumbers.push(num);
    }
  }

  return oddCompositeNumbers;
}

// Example usage
// const limit = 100;
// console.log(oddComposites(limit));

module.exports = oddComposites;
