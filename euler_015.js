// const grid = [
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
// ];

// const grid = [
//   [0, 1, 2],
//   [0, 1, 2],
//   [0, 1, 2],
// ];

// const allPaths = new Set();

// function curiousSnake(row, column, previousPoints = []) {
//   // If we've reached the bottom right corner of the grid, log the path
//   if (row === grid.length - 1 && column === grid[0].length - 1) {
//     previousPoints.push([row, column]);
//     allPaths.add(previousPoints);
//     console.log(previousPoints);
//     return;
//   }

//   // Add the current point to the path
//   const currentPath = [...previousPoints, [row, column]];

//   // Move down, if possible
//   if (row < grid.length - 1) {
//     curiousSnake(row + 1, column, currentPath);
//   }

//   // Move right, if possible
//   if (column < grid[0].length - 1) {
//     curiousSnake(row, column + 1, currentPath);
//   }
// }

// curiousSnake(0, 0);

// console.log(allPaths);

// Okay so the hint that Graham gave me was to start by giving every point in the grid a number for how many paths there are to it.
// So I suppose that would look like this

// const grid = [
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
//   [1],
// ];

// console.log(grid.length);

// // This loop will calculate the number of paths by which a point can be reached
// function helper(r) {
//   for (let i = 1; i < grid.length; i++) {
//     grid[r].push(grid[r - 1][i] + grid[r][i - 1]);
//     console.log(grid[r]);
//   }
// }

// for (let i = 1; i < grid.length; i++) {
//   helper(i);
// }

// Now I think I need to simply put this loop inside a helper function that will also iterate through all arrays.

// Now I'm revisiting the problem after gaining a better understanding of dynamic programing 121223_2045:

// const numRoutes = (m, n, i = 0, j = 0) => {
//   if (m === 0 || n === 0) return null;
//   if (i === m) return 1;
//   if (j === n) return 1;

//   return numRoutes(m, n, i + 1, j) + numRoutes(m, n, i, j + 1);
// };

// console.log(numRoutes(2, 3));

// Here's another way to think about it that's more in line with this youtube video (https://www.youtube.com/watch?v=oBt53YbR9Kk) rather than the project euler problem:

const gridTraveler = (m, n, memo = {}) => {
  if (m === 0 || n === 0) return null;
  if (m === 1) return 1;
  if (n === 1) return 1;
  if (m + "," + n in memo) return memo[m + "," + n];
  if (n + "," + m in memo) return memo[n + "," + m];

  memo[m + "," + n] = memo[n + "," + m] =
    gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);

  return memo[m + "," + n];
};

console.log(gridTraveler(20, 10));

// Now how do I use memoization here? Is it applicable?
// Nice!
