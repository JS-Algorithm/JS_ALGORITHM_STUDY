const readFileSyncAddress = "/dev/stdin";
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

function makeKey(y, x, t) {
  return `${y}-${x}-${t}`;
}

/** 큐 방문처리 및 큐에 원소 삽입 함수 */
function pushQueue(y, x, t) {
  const key = makeKey(y, x, t);

  if (!visited.has(key)) {
    visited.add(key);
    q.push({ currX: x, currY: y, currT: t });
  }
}

const [N, K] = input[0].split(" ").map(Number);
const visited = new Set();

const path = [];
path.push(input[1].trimEnd().split("").map(Number));
path.push(input[2].trimEnd().split("").map(Number));
path[0].unshift(-1);
path[1].unshift(-1);

const q = [{ currX: 1, currY: 0, currT: 0 }];

while (q.length) {
  const { currX, currY, currT } = q.shift();

  const nextX = currX + 1; // 다음칸
  const backX = currX - 1; // 이전칸
  const crossX = currX + K; // 건너편으로 이동할 칸
  const blockX = currT + 1; // 앞으로 없어질 칸

  // 종료조건 : N 너머까지 이동
  if (nextX > N || crossX > N) {
    console.log(1);
    return;
  }

  // 앞으로 한 칸 이동 가능
  // 조건 : (다음칸이 1이고 다음초에 사라질 칸이 아니면서 현재 사라진 칸도 아님)
  if (path[currY][nextX] === 1 && blockX !== nextX && nextX !== currT) {
    // 다음에 이동할 칸으로 Key를 만들고
    // 방문여부에 따라 큐에 저장
    pushQueue(currY, nextX, currT + 1);
  }

  // 뒤로 한 칸 이동 가능 (앞으로 이동과 동일)
  if (path[currY][backX] === 1 && blockX !== backX && backX !== currT) {
    pushQueue(currY, backX, currT + 1);
  }

  // 건너편 다리로 이동을 저리할 변수
  const nextCrossY = currY === 1 ? 0 : 1;

  // 대각선 건너 이동 가능
  // 조건(이동 가능한 칸이고 앞으로 없어질 칸이 아니면서 현재 없어진 칸도 아님)
  if (path[nextCrossY][crossX] === 1 && blockX !== crossX && crossX !== currT) {
    pushQueue(nextCrossY, crossX, currT + 1);
  }
}

console.log(0);
