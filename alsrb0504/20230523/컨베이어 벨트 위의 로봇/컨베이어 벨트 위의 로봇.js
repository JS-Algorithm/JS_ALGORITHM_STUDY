const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "text.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const belt = input[1].split(" ").map(Number);
const END = 2 * N; // 벨트 최대 길이
let answer = 0;

let robotQueue = []; // 로봇의 현재 위치를 저장할 배열

// 내구도가 0인 칸의 수가 K 이상이 될 때까지 반복
while (!countZeroCnt()) {
  // 정답(진행 횟수) 증가
  answer++;

  // 1. 벨트 회전과 로봇 위치 업데이트 => 로봇이 N-1의 위치라면 제거
  rotateBelt();

  // 2. 로봇 이동
  moveRobot();

  // 3. 로봇 올리기
  setRobot();
}

console.log(answer);

/** 내구도가 0인 칸의 개수가 K개 이상인지 판별하는 함수 */
function countZeroCnt() {
  let zeroCnt = 0;
  for (let i = 0; i < END; i++) {
    if (belt[i] <= 0) zeroCnt++;
  }

  return zeroCnt >= K ? true : false;
}

/** 벨트를 회전시키고 N-1의 위치의 로봇을 제거하는 함수 */
function rotateBelt() {
  let tmp = belt.at(-1);
  for (let i = END - 1; i > 0; i--) {
    belt[i] = belt[i - 1];
  }
  belt[0] = tmp;

  // 내리는 위치가 아니라면 로봇의 위치값 업데이트
  for (let i = 0; i < robotQueue.length; i++) {
    const curr = robotQueue[i];
    const next = curr + 1 === END ? 0 : curr + 1;

    // 내리는 위치라면 내림 처리 (-1)
    if (next === N - 1) robotQueue[i] = -1;
    else robotQueue[i] = next;
  }
  robotQueue = robotQueue.filter((val) => val !== -1);
}

/** 현재 벨트 위의 로봇을 이동시키는 함수 */
// 다음칸의 내구도가 남아있고 로봇이 존재하지 않는다면 로봇 이동
function moveRobot() {
  for (let i = 0; i < robotQueue.length; i++) {
    const curr = robotQueue[i];
    const next = curr + 1 === END ? 0 : curr + 1;

    if (belt[next] > 0 && !robotQueue.some((val) => val === next)) {
      robotQueue[i] = next;
      belt[next]--;

      if (next === N - 1) robotQueue[i] = -1;
    }
  }
  robotQueue = robotQueue.filter((val) => val !== -1);
}

/** 올리는 위치(0번)에 로봇을 설치하는 함수 */
// 현재 시작위치에 로봇을 올릴 수 있다면 로봇을 올림
function setRobot() {
  if (belt[0] > 0 && !robotQueue.some((val) => val === 0)) {
    robotQueue.push(0);
    belt[0]--;
  }
}
