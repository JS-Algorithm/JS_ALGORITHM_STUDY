function solution_(n, from, through, to) {
  if (n == 1) return [[from, to]]; // 1번에서 3번으로 이동
  let result = [];
  result = [...result, ...solution_(n - 1, from, to, through)]; // 1번에서 n-1개가 3번을 거쳐 2번으로 이동
  result.push([from, to]); // 1번에서 3번으로 이동
  result = [...result, ...solution_(n - 1, through, from, to)]; // 2번에서 n-1개를 1번을 거쳐 3번으로 이동
  return result;
}

function solution(n) {
  return solution_(n, 1, 2, 3);
}
