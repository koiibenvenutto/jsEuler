function problem28SucksAlso(dimension) {
  let spiral = dimension ** 2;

  let sum = 1;
  let sFactor = 2;
  let counter = 0;

  for (let num = 3; num <= spiral; num += sFactor) {
    sum += num;
    counter++;
    console.log(counter);
    if (counter % 4 === 0) {
      sFactor += 2;
    }
  }
  return sum;
}

console.log(problem28SucksAlso(1001));
