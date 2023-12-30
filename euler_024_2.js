// function permute(string, memo = new Set()) {
//   if (string.length < 2) return [string];

//   memo.add(string);
//   const stringArr = string.split("");

//   if (string.length === 2) {
//     return [string, stringArr.sort((a, b) => b - a).join("")];
//   }

//   for (let i = 0; i < string.length; i++) {
//     let notFixed = stringArr.slice();
//     let fixed = notFixed.splice(i, 1);

//     notFixed.sort((a, b) => b - a);

//     notFixed.splice(i, 0, ...fixed);
//     let swapped = notFixed.join("");

//     if (!memo.has(swapped)) {
//       permute(swapped, memo);
//     }
//   }

//   return [...memo].sort();
// }

// console.log(permute("456"));
//
//
//
//
//
//

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
  console.log(memo);

  const permuteRec = (string, memo, justSwapped = null) => {
    if (!memo.includes(string)) memo.push(string);

    // TODO: so it turns out that to do this I'would need to also know that the memo was complete up until that point...which I can't know here...so really I have to be keeping the memo in sorted order at each step AND I need to check not only if there's permutationNumber of permutations but I also have to check if all those permutations are sequential... hmmm challenging. Gotta go to work though. Damn! aight will get this later.
    if (memo.length === permutationNumber) return memo.pop();

    let stringArr = string.split("");
    for (let i = 0; i < string.length - 1; i++) {
      if (i === justSwapped) i++;
      [stringArr[i], stringArr[i + 1]] = [stringArr[i + 1], stringArr[i]];
      let result = stringArr.join("");

      if (!memo.includes(result)) {
        permuteRec(result, memo, i);
      }
    }
  };

  return permuteRec(string, memo);
}

console.log(permute2("012", 3));
