function getMax(w, h, n) {
  return Math.floor((-h / w) * n + h);
}

function solution(w, h) {
  let count = 0;
  for (let i = 1; i < w; i++) {
    count += getMax(w, h, i);
  }
  return 2 * count;
}
