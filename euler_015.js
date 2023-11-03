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

const grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
  [1],
];

console.log(grid.length);

// This loop will calculate the number of paths by which a point can be reached
function helper(r) {
  for (let i = 1; i < grid.length; i++) {
    grid[r].push(grid[r - 1][i] + grid[r][i - 1]);
    console.log(grid[r]);
  }
}

for (let i = 1; i < grid.length; i++) {
  helper(i);
}

// Now I think I need to simply put this loop inside a helper function that will also iterate through all arrays.
