function solution(k, ranges) {
  let sequence = [];
  let area = [];
  // 1. 우박수열 구하기
  while (k > 1) {
    sequence.push(k);
    k = k % 2 ? k * 3 + 1 : k / 2;
  }
  sequence.push(1);
  // 2. 각 구역의 넓이 구하기
  for (let i = 0; i < sequence.length - 1; i++) {
    area.push((sequence[i] + sequence[i + 1]) / 2);
  }
  // 3. ranges 범위 값들을 더하기
  ranges = ranges.map(([a, b]) => {
    let sum = 0;
    for (let i = a; i < area.length + b; i++) {
      sum += area[i];
    }
    return a > area.length + b ? -1 : sum;
  });
  return ranges;
}
