function integerRightTriangles(n) {
  let bestP = 0;
  let mostSolutions = 0;
  for (let p = 3; p <= n; p++) {
    let solutions = [];
    for (let a = 1; a < p; a++) {
      for (let b = a; b < p - a; b++) {
        let c = p - a - b;
        if (a ** 2 + b ** 2 === c ** 2) {
          solutions.push([a, b, c]);
        }
      }
    }

    if (solutions.length > mostSolutions) {
      mostSolutions = solutions.length;
      bestP = p;
    }
  }

  console.log(mostSolutions);
  return bestP;
}

console.log(integerRightTriangles(1000));
