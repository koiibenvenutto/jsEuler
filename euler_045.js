function pn(n) {
  return (n * (3 * n - 1)) / 2;
}

function hn(n) {
  return n * (2 * n - 1);
}

function tnpnhn() {
  for (let k = 144; k < 10_000_000; k++) {
    const H = hn(k);
    const n = (1 + Math.sqrt(1 + 24 * H)) / 6;
    if (n % 1 === 0) {
      console.log(n, pn(n));
      return pn(n);
    }
  }
}

console.log(tnpnhn());
