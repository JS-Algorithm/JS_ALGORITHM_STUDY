function solution(k, d) {
  let count = 0;

  for (let i = 0; i <= d; i = i + k) {
    count += Math.floor(Math.floor(Math.sqrt(d ** 2 - i ** 2)) / k) + 1;
  }
  return count;
}
