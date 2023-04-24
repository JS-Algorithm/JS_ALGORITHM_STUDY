function solution(n, m, x, y, r, c, k) {
  let fastAnswer = k - (Math.abs(x - r) + Math.abs(y - c));
  if (fastAnswer < 0 || fastAnswer % 2 != 0) return "impossible";

  let d = [
    [1, 0], // d
    [0, -1], // l
    [0, 1], // r
    [-1, 0], // u
  ];

  let str = {
    0: "d",
    1: "l",
    2: "r",
    3: "u",
  };

  let answer = "z".repeat(k);

  function dfs(L, py, px, sum, dist) {
    if (L > k) return;
    if (dist > k) return;
    if (L === k && py === r && px === c) {
      if (answer > sum) {
        answer = sum;
        return;
      }
    }
    if (answer !== "z".repeat(k)) return;

    for (let i = 0; i < 4; i++) {
      const dy = py + d[i][0];
      const dx = px + d[i][1];

      if (dy <= n && dy > 0 && dx <= m && dx > 0) {
        dfs(
          L + 1,
          dy,
          dx,
          sum + str[i],
          Math.abs(dy - r) + Math.abs(dx - c) + L + 1
        );
      }
    }
  }
  dfs(0, x, y, "", k);

  if (answer === "z".repeat(k)) return "impossible";

  return answer;
}
