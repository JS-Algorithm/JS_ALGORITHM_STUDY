// 매 초마다 이동 가능한 경로를 queue 에 담아서 실행시킨다.
// 이전 초에서 이동 가능한 경로의 길이만큼 반복을 수행해야 한다.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trimEnd()
  .split('\n');

const [N, k] = input[0].split(' ').map(Number);
const map = input.slice(1).map((row) => row.trimEnd().split('').map(Number));
const visited = Array.from({length: 2}, () => new Array(N).fill(false));

let queue = [[0, 0]];
let second = 0;
let canWin = false;

const pushNewElement = (y, x) => {
  queue.push([y, x]);
  visited[y][x] = true;
};

while (queue.length && !canWin) {
  const currentLoopCount = queue.length;
  for (let i = 0; i < currentLoopCount; i++) {
    const [ny, nx] = queue.shift();

    // 현재 위치에서 게임을 끝낼 수 있는지를 체크
    if (nx + k >= N) {
      canWin = true;
      break;
    }
    // 현재 시간을 기준으로 사라진 칸에 위치했는지 체크
    if (nx <= second - 1) continue;

    // 세 가지 케이스 중에서 이동 가능한 경로가 있는지 탐색
    if (!visited[ny][nx + 1] && map[ny][nx + 1]) pushNewElement(ny, nx + 1);
    if (nx - 1 >= 0 && !visited[ny][nx - 1] && map[ny][nx - 1])
      pushNewElement(ny, nx - 1);
    // 그렇지 않을 경우 현재 위치에서 반대편 줄로 이동이 가능한지 체크
    if (!visited[(ny + 1) % 2][nx + k] && map[(ny + 1) % 2][nx + k]) {
      pushNewElement((ny + 1) % 2, nx + k);
    }
  }
  second++;
}

console.log(Number(canWin));
