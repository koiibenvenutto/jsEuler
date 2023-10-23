// Okay so this sounds simple enough, since I've already worked with modulus before. We need to find the factors of numbers.
// First we need an algorithm that finds triangle numbers
// Then we need a function that tests triangle numbers to see how many factors they have and we search for the triangle number that has at least  501 factors

// What a map is perfect for: operation on every single item in an array
// Also for each loops
// with maps you can do element name, i (i will be the index), you can ,[] to access the array in every iteration.
// .map is a member function, it can accurately be called a function

let triangleNumber = 0;
for (i = 1; i; i++) {
  triangleNumber += i;
  let factors = [];
  for (j = 1; j <= triangleNumber; j++)
    if (triangleNumber % j === 0) {
      factors.push(j);
    }
  if (factors.length > 5) {
    console.log(triangleNumber);
    break;
  }
}

// Yes, it works on the smaller example!
// Well I think this will work, but it's not very fast, and by not very fast I mean okay this ain't gon work!
// Time to optimize!

// Okay so what I'm thinking is where are the optimizations? I feel like they need to be pretty drastic, is there a way that I can tell how many factors a number will have in advance? Is there some indicator of how many factors it will have?

// Other than that is there some way to start with much higher triangleNumbers?
