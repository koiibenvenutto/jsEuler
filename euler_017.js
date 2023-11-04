// First we're going to import a node package that allows us to convert numbers into written strings
const writtenNumber = require("written-number");

// Let's give it a test!
console.log(writtenNumber(12345));

// Now we need to figure out how to remove the spaces and hyphens using regex and get the number of letters in the written number
let numberNoSpacesLength = writtenNumber(1278).replace(/[- ]/g, "").length;
console.log(numberNoSpacesLength);

// Great now let's use a loop to add all the letters to a sum variable
let sum = 0;
for (let i = 1; i < 1001; i++) {
  sum += writtenNumber(i).replace(/[- ]/g, "").length;
}

console.log(sum);
