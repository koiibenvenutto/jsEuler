const longDivide = require("./utils/longDivide");
const arraysContainEqual = require("./utils/arraysContainEqual");
const arraysNotMultiple = require("./utils/arraysNotMultiple");

// function longestRep(n) {
//   const memo = {};
//   for (let d = 14; d < n; d++) {
//     let longestCycle = [];
//     let seq = [];
//     let nextSeq = [];

//     let expansion = longDivide(1, d, d * 2).slice(2);

//     for (let i = 1; i <= d; i++) {
//       console.log(i);
//       for (let j = 0; j < i; j++) {
//         seq = expansion.slice(j, i);
//         console.log(seq);
//         nextSeq = expansion.slice(i, i + seq.length);

//         if (arraysContainEqual(seq, nextSeq)) {
//           longestCycle = seq;
//           console.log("found rep -----");
//           break;
//         }
//       }
//     }
//     if (longestCycle[0])
//       memo[d] = [
//         longestCycle.length,
//         longDivide(1, d, d * 2)
//           .slice(2)
//           .join(""),
//       ];
//   }

//   return memo;
// }

// console.log(longestRep(15));

const num = 7;

console.log(longDivide(1, 7, 7).join(""));

function longestRepUpTo(n) {
  const findRepeatingPart = (num = 1) => {
    if (num % 2 === 0 || num % 5 === 0) {
      return -1;
    } else {
      let res = 10 % num,
        count = 1;
      while (res != 1) {
        // console.log(`${res} * 10 % 7 = ${(res * 10) % num}`);
        res = (res * 10) % num;
        count++;
      }
      return count;
    }
  };
  const memo = [];
  let longestRep = [0, 0];
  for (let d = 2; d < n; d++) {
    let rep = findRepeatingPart(d);
    if (rep > longestRep[1]) {
      longestRep = [d, rep];
    }
  }

  return longestRep;
}

console.log(longestRepUpTo(1000));
