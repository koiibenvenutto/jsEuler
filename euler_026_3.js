const longDivide = require("./utils/longDivide");
const arraysContainEqual = require("./utils/arraysContainEqual");
const arraysNotMultiple = require("./utils/arraysNotMultiple");

function longestRep(n) {
  const memo = {};
  for (let d = 14; d < n; d++) {
    let longestCycle = [];
    let seq = [];
    let nextSeq = [];

    let expansion = longDivide(1, d, d * 2).slice(2);

    for (let i = 1; i <= d; i++) {
      console.log(i);
      for (let j = 0; j < i; j++) {
        seq = expansion.slice(j, i);
        console.log(seq);
        nextSeq = expansion.slice(i, i + seq.length);

        if (arraysContainEqual(seq, nextSeq)) {
          longestCycle = seq;
          console.log("found rep -----");
          break;
        }
      }
    }
    if (longestCycle[0])
      memo[d] = [
        longestCycle.length,
        longDivide(1, d, d * 2)
          .slice(2)
          .join(""),
      ];
  }

  return memo;
}

console.log(longestRep(15));
