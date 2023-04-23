function solution(n, m, x, y, r, c, k) {
  const FAIL = "impossible";
  // d, l, r, u 순으로 우선 순위가 높음.
  const [DOWN, LEFT, RIGHT, UP] = ["d", "l", "r", "u"];
  const dir = {
    d: [1, 0],
    l: [0, -1],
    r: [0, 1],
    u: [-1, 0],
  };
  const answer = [];
  let [curY, curX] = [x, y];
  let [endY, endX] = [r, c];
  let moveCnt = 0;

  // 이동횟수가 k보다 작을때까지 반복
  while (moveCnt < k) {
    // dist: 현재 위치에서의 종료지점까지의 거리
    // rest: 현재 더 움질일 수 있는 횟수
    const dist = calcDist();
    const rest = k - moveCnt;

    // 종료 : 이동거리 부족 || 도달 불가능 (남은 여유 이동 가능거리가 2의 배수여야 함)
    if (dist > rest || (dist < rest && (rest - dist) % 2 !== 0)) return FAIL;

    // 1. 남은거리와 움직일 수 있는 횟수가 같은 경우
    // => 최단 거리로 찾아가야 함
    // => d, l, r, u 순으로 최단 거리 이동
    if (dist === rest) {
      let nextDir;

      if (curY < endY) nextDir = DOWN;
      else if (curX > endX) nextDir = LEFT;
      else if (curX < endX) nextDir = RIGHT;
      else nextDir = UP;

      answer.push(nextDir);
      const [ny, nx] = dir[nextDir];
      [curY, curX] = [curY + ny, curX + nx];
    }
    // 2. 더 움직일 수 있음 => d, l, r, u 순으로 남는 방향 이동
    else {
      let nextDir;

      if (curY + 1 <= n) nextDir = DOWN;
      else if (curX - 1 > 0) nextDir = LEFT;
      else if (curX + 1 <= m) nextDir = RIGHT;
      else if (curY - 1 > 0) nextDir = UP;

      answer.push(nextDir);
      const [ny, nx] = dir[nextDir];
      [curY, curX] = [curY + ny, curX + nx];
    }

    moveCnt++;
  }

  return answer.join("");

  /** 현재 위치에서 남은 거리 계산하는 함수 */
  function calcDist() {
    return Math.abs(curY - endY) + Math.abs(curX - endX);
  }
}

const [n, m, x, y, r, c, k] = [3, 4, 2, 3, 3, 1, 5]; // dllrl
// const [n, m, x, y, r, c, k] = [3, 3, 1, 2, 3, 3, 4]; // impossible

console.log(solution(n, m, x, y, r, c, k));
