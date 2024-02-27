// function smallestPentagonDiff() {
//   function pnum(n) {
//     return (n * (3 * n - 1)) / 2;
//   }
//   // // console.log(pn(10));

//   function pnums(limit) {
//     const arr = [];
//     for (let i = 1; i < limit; i++) {
//       arr.push(pnum(i));
//     }
//     return arr;
//   }
//   //   // console.log(pnums(11));

//   let pentagonNums = pnums(11);
//   // console.log(pentagonNums);

//   let smallestDiff = Infinity;
//   for (let i = 1; i < 11; i++) {
//     for (let j = i + 1; j < 11; j++) {
//       if (pnum(i) + pnum(j)) {
//         // console.log(pnum(i), pnum(j));
//       }
//     }
//   }
// }
// // console.log(smallestPentagonDiff());

// function smallestPentagonDiff() {
//   function pn(n) {
//     return (n * (3 * n - 1)) / 2;
//   }

//   const array = [];
//   let smallestD = Infinity;
//   for (let n = 1; n < 3; n++) {
//     array.push(pn(n));
//     // console.log(array);
//     for (let i = 1; i < 10; i++) {
//       for (let j = i + 1; pn(i) + pn(j) <= pn(n); j++) {
//         // console.log(pn(i), pn(j));
//         let diff = Math.abs(pn(i) - pn(j));
//         if (array.includes(pn(i) + pn(j)) && array.includes(diff)) {
//           // console.log(pn(i), pn(j));
//           if (diff < smallestD) {
//             smallestD = diff;
//           }
//         }
//       }
//     }
//   }

//   return smallestD;
// }

// // console.log(smallestPentagonDiff());

function smallestPentagonDiff() {
  function pn(n) {
    return (n * (3 * n - 1)) / 2;
  }

  const array = {};
  let smallestD = Infinity;
  //   for (let n = 1000; n <= 1000; n++) {
  let n;
  for (n = 1; n < 10000; n++) {
    array[pn(n)] = true;
  }

  // console.log(array);
  for (let i = 1; pn(i) < pn(n); i++) {
    for (let j = i + 1; pn(i) + pn(j) <= pn(n); j++) {
      // console.log(pn(i), pn(j));
      let diff = Math.abs(pn(i) - pn(j));
      if (array[pn(i) + pn(j)] && array[diff]) {
        // console.log(pn(i), pn(j));
        if (diff < smallestD) {
          smallestD = diff;
        }
      }
    }
  }
  //   }

  return smallestD;
}

console.log(smallestPentagonDiff());

// After a conversation with Greg, I have decided that the elegance in this one is optimizing for my own time rather than the effeciency of the function. On to the next.
