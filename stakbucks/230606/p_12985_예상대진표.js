function solution(n, a, b) {
  let count = 0;
  while (1) {
    count++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    if (a === b) {
      break;
    }
  }
  return count;
}
