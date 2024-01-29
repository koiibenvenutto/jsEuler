const arraysContainEqual = require("./arraysContainEqual");

function arraysNotMultiple(array1, array2) {
  if (array1.length > array2.length) {
    let temp = array1;
    array1 = array2;
    array2 = temp;
  }

  if (array2.length % array1.length !== 0) {
    return true;
  }

  let multiple = array2.length / array1.length;
  let array1multiple = [];

  for (let i = 0; i < multiple; i++) {
    array1multiple.push(...array1);
  }

  if (arraysContainEqual(array1multiple, array2)) return false;

  return true;
}

module.exports = arraysNotMultiple;
