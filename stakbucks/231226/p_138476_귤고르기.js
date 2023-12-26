function solution(k, tangerine) {
  const map = new Map();

  tangerine.forEach((v) => {
    map.set(v, map.get(v) + 1 || 1);
  });
  const sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

  let count = 0; // 누적 귤 개수 카운트
  let result = 0; // 정답

  while (1) {
    if (count >= k) return result;
    count += sorted[result++][1];
  }
}
