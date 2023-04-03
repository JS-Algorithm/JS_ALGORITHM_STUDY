// const readFileSyncAddress = "/dev/stdin";
const readFileSyncAddress = "text.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const [H, W, T] = input[0].split(" ").map(Number);
const map = input.slice(1, 1 + H).map((el) => el.trimEnd().split(""));
const direction = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
const start = [];

let goguma_cnt = 0;
let answer = 0;

// 시작 위치와 고구마의 개수 확인
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (map[i][j] === "G") {
      start.push(i);
      start.push(j);
      map[i][j] = ".";
    }
    if (map[i][j] === "S") goguma_cnt++;
  }
}

dfs(0, start[0], start[1], 0);

console.log(answer);

// dfs(시간, y, x, 먹은 고구마 수)
function dfs(time, y, x, cnt) {
  // 시간을 다 썼거나 || 먹은 고구마 수가 최대일 경우 종료
  if (time === T || cnt === goguma_cnt) {
    answer = Math.max(answer, cnt);
    return;
  }

  for (const [dy, dx] of direction) {
    const [ny, nx] = [y + dy, x + dx];

    if (ny < 0 || nx < 0 || ny >= H || nx >= W || map[ny][nx] === "#") continue;

    // 다음 위치에 고구마가 있다면
    // 고구마를 먹고 'S' => '.' , 백트래킹 후에는 다시 고구마를 돌려놓음 '.' => 'S'
    // 고구마가 없다면
    // 그냥 다음 위치로 이동
    if (map[ny][nx] === "S") {
      map[ny][nx] = ".";
      dfs(time + 1, ny, nx, cnt + 1);
      map[ny][nx] = "S";
    } else {
      dfs(time + 1, ny, nx, cnt);
    }
  }
}
