function revArray(array) {
  const reversed = [];
  for (let i = array.length - 1; i > -1; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

// console.log(revArray([1, 2, 3]));

module.exports = revArray;
