// 대나무 다 먹으면 상, 하, 좌, 우 중 한 곳으로 이동
// 최대한 많이 이동할 수 있는 경로 구하기

// 처음 시도: dfs (시간초과) > 현재까지의 이동한 숫자 메모이제이션하도록 dp로 수정

//const env = '/dev/stdin';
const env = './input.txt';
let fs = require('fs');
let input = fs.readFileSync(env).toString().trim().split('\n');

const n = input.shift();

input = input.map((row) => row.split(' ').map(Number));

let dp = Array.from({length: n}, () => Array(n).fill(0));

console.log(dp);

let answer = 0;
let dir = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

const dfs = (r, c) => {
  if (dp[r][c] != 0) return dp[r][c]; // 이미 방문한 곳이라면 메모이제이션된 값 리턴
  dp[r][c] = 1; // dp[x][y] = (x,y)에서 나아갈 수 있는 개수, 1로 초기화

  for (let i = 0; i < 4; i++) {
    let [nx, ny] = [r + dir[i][0], c + dir[i][1]];
    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
    if (input[nx][ny] > input[r][c]) {
      dp[r][c] = Math.max(dp[r][c], dfs(nx, ny) + 1); // 기존에 들어 있던 값
    }
  }
  return dp[r][c];
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    answer = Math.max(answer, dfs(i, j));
  }
}

console.log(answer);
