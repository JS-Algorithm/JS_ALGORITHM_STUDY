// 29 / 31~36 틀림.
function solution(m, n, startX, startY, balls) {
  var answer = [];

  for (const ball of balls) {
    const [x, y] = ball;
    let ans = [];
    if (startY != y) {
      // 1. (0, a)
      ans.push(Math.pow(startX + x, 2) + Math.pow(Math.abs(startY - y), 2));
      // 2. (m, a)
      ans.push(Math.pow(2 * m - (startX + x), 2) + Math.pow(Math.abs(startY - y), 2));
    }
    if (startX != x) {
      // 3. (a, 0)
      ans.push(Math.pow(Math.abs(startX - x), 2) + Math.pow(startY + y, 2));
      // 4. (a, n)
      ans.push(Math.pow(Math.abs(startX - x), 2) + Math.pow(2 * n - (startY + y), 2));
    }

    answer.push(Math.min(...ans));
  }
  return answer;
}
