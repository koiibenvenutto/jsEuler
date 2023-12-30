function permute(string, memo = new Set()) {
  if (string.length < 2) return [string];
  const stringArr = string.split("");

  if (string.length === 2) {
    return [string, stringArr.sort((a, b) => b - a).join("")];
  }

  for (let i = 0; i < string.length; i++) {
    let notFixed = stringArr.slice();
    let fixed = notFixed.splice(i, 1);

    notFixed.sort((a, b) => b - a);

    notFixed.splice(i, 0, ...fixed);
    let swapped = notFixed.join("");

    if (!memo.has(swapped)) {
      memo.add(swapped);
      permute(swapped, memo);
    }
  }

  return [...memo].sort();
}

console.log(permute("456"));
