function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let d = 0; // 배달용
  let p = 0; // 수거용

  for (let i = n - 1; i >= 0; i--) {
    let count = 0;
    d -= deliveries[i];
    p -= pickups[i];

    while (d < 0 || p < 0) {
      d += cap;
      p += cap;
      count++;
    }

    answer += (i + 1) * 2 * count;
  }

  return answer;
}
