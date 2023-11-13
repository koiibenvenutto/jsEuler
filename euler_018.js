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
function greatestPath(pyramid) {
  // Declaring a variable to keep track of the paths sum as it walks from top to bottom. We'll initialize it as the value we're starting from because we know for certain that it will be part of the sum no matter what
  let sum = pyramid[0][0];
  console.log(sum);
  //   This array keeps track of the adjacent numbers which the path can choose from
  let xPos = 0;

  //   y Pos is the index for the pyramid row AKA position on the y axis
  for (let yPos = 0; yPos < pyramid.length - 1; yPos++) {
    if (pyramid[yPos + 1][xPos] <= pyramid[yPos + 1][xPos + 1]) {
      sum += pyramid[yPos + 1][xPos + 1];
      // We need to update where we are on the x pos which is a little tricky to think about because every row appears to be backsliding so to speak on the x axis in relation to the row above it, which gives it the pyramid shape. In practice though it's simple because it's just like a slanted grid where every row is one longer than the one above it :D
      xPos++;
    } else {
      sum += pyramid[yPos + 1][xPos];
    }
    // Now we need to update the adjacent options variable so that it's corrent for the next iteration of the loop, but it depends on which adjacent option was chosen
  }
  return sum;
}

console.log(greatestPath(littlePyramid));
