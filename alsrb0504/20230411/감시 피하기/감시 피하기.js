// const readFileSyncAddress = "/dev/stdin";
const readFileSyncAddress = "text.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const N = Number(input[0]);
const map = input.slice(1, 1 + N).map((el) => el.trimEnd().split(" "));

const teachers = [];
const spaces = [];

// 선생님과 빈 공간의 위치를 저장
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (map[y][x] === "T") teachers.push([y, x]);
    if (map[y][x] === "X") spaces.push([y, x]);
  }
}

// dfs 조합과 부르트포스 탐색을 통해 결과 도출
// 최대 계산 : 벽의 조합(34 C 3 => 5984) * 선생님의 탐색(최대 32 * 12)
// 따라서 대략 10^5 ~ 10^6의 연산이므로 브루트포스 가능
console.log(dfs(0, 0) ? "YES" : "NO");

/** 선생님들이 학생을 발견하는지 확인하는 함수 */
function isPossible() {
  for (let i = 0; i < teachers.length; i++) {
    const [startY, startX] = teachers[i];

    // 상하좌우 탐색
    for (let y = startY - 1; y >= 0; y--) {
      if (map[y][startX] === "O") break;
      if (map[y][startX] === "S") return false;
    }

    for (let y = startY + 1; y < N; y++) {
      if (map[y][startX] === "O") break;
      if (map[y][startX] === "S") return false;
    }

    for (let x = startX - 1; x >= 0; x--) {
      if (map[startY][x] === "O") break;
      if (map[startY][x] === "S") return false;
    }

    for (let x = startX + 1; x < N; x++) {
      if (map[startY][x] === "O") break;
      if (map[startY][x] === "S") return false;
    }
  }

  return true;
}

/** 빈 공간의 조합을 만들어주는 dfs */
// 3개의 벽을 세우고, 조건을 통과하는지 확인
function dfs(cnt, start) {
  if (cnt === 3) {
    if (isPossible()) return true;

    return false;
  }

  for (let i = start; i < spaces.length; i++) {
    const [y, x] = spaces[i];
    map[y][x] = "O";
    if (dfs(cnt + 1, i + 1)) return true;
    map[y][x] = "X";
  }

  return false;
}
