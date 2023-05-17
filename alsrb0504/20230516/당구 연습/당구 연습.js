// https://school.programmers.co.kr/questions/45903
function solution(m, n, startX, startY, balls) {
  const answer = [];
  const [W, H] = [m, n];

  for (let [x, y] of balls) {
    answer.push(calcDist(x, y));
  }

  return answer;

  function calcDist(x, y) {
    // 1. 같은 높이(가로줄)에 있는 경우
    // 1-1, 1-2 중 최소값 리턴
    if (y === startY) {
      // 1-1. 대각선으로 벽에 쿠션하는 경우
      const minDist = Math.min(y, H - y);
      const result = Math.abs(startX - x) ** 2 + (minDist * 2) ** 2;

      // 1-2. 직선 방향으로 벽에 쿠션하는 경우
      if (x > startX) {
        return Math.min((startX * 2 + (x - startX)) ** 2, result);
      } else {
        return Math.min(((W - startX) * 2 + (startX - x)) ** 2, result);
      }
    }

    // 2. 같은 컬럼(세로줄)에 있는 경우
    // 1의 경우와 동일
    if (x === startX) {
      const minDist = Math.min(x, W - x);
      const result = Math.abs(startY - y) ** 2 + (minDist * 2) ** 2;

      if (y > startY) {
        return Math.min((startY * 2 + (y - startY)) ** 2, result);
      } else {
        return Math.min(((H - startY) * 2 + (startY - y)) ** 2, result);
      }
    }

    // 3. 같은 줄에 있지 않은 경우
    // 아래 2가지 경우에서 최소값을 리턴

    // 3-1. 세로벽(좌, 우)에 쿠션을 할 경우
    // (높이 차이)^2 + (최솟값(너비, 양쪽 벽으로부터의 두 당구공의 길이 합))^2
    // 3-2. 가로벽(상, 하)에 쿠션을 할 경우
    const minDistY =
      Math.abs(startY - y) ** 2 +
      Math.min(W, x + startX, 2 * W - x - startX) ** 2;
    const minDistX =
      Math.abs(startX - x) ** 2 +
      Math.min(H, y + startY, 2 * H - y - startY) ** 2;

    return Math.min(minDistX, minDistY);
  }
}

const [m, n, startX, startY] = [10, 10, 3, 7];
const balls = [
  [7, 7],
  [2, 7],
  [7, 3],
];

console.log(solution(m, n, startX, startY, balls));
