const canSumRec = (targetValue, numbers, memo = {}) => {
  if (targetValue in memo) return memo[targetValue];
  if (targetValue === 0) return true;
  if (targetValue < 0) return false;

  let shortest = null;
  for (let num of numbers) {
    let remainder = targetValue - num;
    if (canSumRec(remainder, numbers, memo)) {
      memo[targetValue] = true;
      return true;
    }
  }

  memo[targetValue] = false;
  return false;
};

module.exports = canSumRec;
