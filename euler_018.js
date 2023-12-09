const littlePyramid = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];
const bigPyramid = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
];
// First I'm going to start by making a function that can just walk through the pyramid using adjacent numbers. Then I'll add logic to make it choose the highest one. If that doesn't work, then I'll have it look a little into the future as well :)

// First attempt 111323_1102:
// function greatestPath(pyramid) {
//   // Declaring a variable to keep track of the paths sum as it walks from top to bottom. We'll initialize it as the value we're starting from because we know for certain that it will be part of the sum no matter what
//   let sum = pyramid[0][0];
//   console.log(sum);
//   //   This array keeps track of the adjacent numbers which the path can choose from
//   let xPos = 0;

//   //   y Pos is the index for the pyramid row AKA position on the y axis
//   for (let yPos = 0; yPos < pyramid.length - 1; yPos++) {
//     if (pyramid[yPos + 1][xPos] <= pyramid[yPos + 1][xPos + 1]) {
//       sum += pyramid[yPos + 1][xPos + 1];
//       // We need to update where we are on the x pos which is a little tricky to think about because every row appears to be backsliding so to speak on the x axis in relation to the row above it, which gives it the pyramid shape. In practice though it's simple because it's just like a slanted grid where every row is one longer than the one above it :D
//       xPos++;
//     } else {
//       sum += pyramid[yPos + 1][xPos];
//     }
//   }
//   return sum;
// }

// console.log(greatestPath(littlePyramid));

// Second Attempt:
// the first attempt was good but it was too short sited to be certain of finding the largest sum. Sorry Kilton but you were wrong!
// As I suspected, we need to be a little smarter.
// Two ideas pop into my head:
// 1: look further ahead before commiting to a path
// 2: Map out the highest number in every row and build a path that hits as many of them as possible along the way

// I'm going to start by just having it look one row further ahead and see if that makes the difference :)
function greatestPathV2(pyramid) {
  let sum = pyramid[0][0];
  let x = 0;

  for (let y = 0; y < pyramid.length - 1; y++) {}
  return sum;
}

function eyes(pyramid, x, y, distance = 0, sum = 0) {
  // Base case: this determines how far ahead the function will look
  if (distance > 1) {
    return [sum, endingXY];
  }

  distance++;

  eyes(pyramid, x + 1, y + 1, distance, (sum += pyramid[y + 1][x + 1]));
  eyes(pyramid, x, y + 1, distance, (sum += pyramid[y + 1][x + 1]));

  return [sum, endingXY];
}

const options = [eyes(littlePyramid, 0, 0)];

console.log(options);

// Okay so this recursive part is working, it's just formatted in a weird way because it's a bunch of arrays inside arrays
