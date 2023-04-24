function solution(n, m, x, y, r, c, k) {
  let fastAnswer = k - (Math.abs(x - r) + Math.abs(y - c));
  if (fastAnswer < 0 || fastAnswer % 2 != 0) return 'impossible';

  let direction = [
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r'],
    [-1, 0, 'u'],
  ];

  let answer = 'z'.repeat(k);

  function dfs(L, py, px, sum, dist) {
    if (L > k) return;
    if (dist > k) return;
    if (L === k && py === r && px === c) {
      if (answer > sum) {
        answer = sum;
        return;
      }
    }
    if (answer !== 'z'.repeat(k)) return;

    for (const [dy, dx, direct] of direction) {
      const [ny, nx] = [py + dy, px + dx];
      if (ny <= n && ny > 0 && nx <= m && nx > 0) {
        dfs(
          L + 1,
          ny,
          nx,
          sum + direct,
          Math.abs(ny - r) + Math.abs(nx - c) + L + 1,
        );
      }
    }
  }
  dfs(0, x, y, '', k);

  if (answer === 'z'.repeat(k)) return 'impossible';

  return answer;
}
