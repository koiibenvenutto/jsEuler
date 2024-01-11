function permute2(string, permutationNumber) {
  if (string.length < 2) return [string];

  if (string.length === 2) {
    return [
      string,
      string
        .split("")
        .sort((a, b) => b - a)
        .join(""),
    ];
  }

  const memo = [string];

  const permuteRec = (string, memo, justSwapped = null) => {
    if (!memo.includes(string)) memo.push(string);

    let stringArr = string.split("");
    for (let i = 0; i < string.length - 1; i++) {
      if (i === justSwapped) i++;
      [stringArr[i], stringArr[i + 1]] = [stringArr[i + 1], stringArr[i]];
      let result = stringArr.join("");

      if (!memo.includes(result)) {
        permuteRec(result, memo, i);
      }
    }

    return memo;
  };

  return permuteRec(string, memo).sort()[permutationNumber];
}

console.log(permute2("012345", 20));

