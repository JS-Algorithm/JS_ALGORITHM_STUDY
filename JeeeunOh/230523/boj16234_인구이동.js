const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230523/input.txt').toString().trim().split('\n');

const [N, L, R] = input[0].split(' ').map(Number);
let arr = input.slice(1).map((item) => item.split(' ').map(Number));

const d = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let day = 0;

while (true) {
  let flag = true;

  let visited = Array.from({length: N}, () => Array(N).fill(0)); // 해당 지역이 연합에 포함되어 있었는가???
  for (let i = 0; i < N; i++) {
    // 맵 처음부터 끝까지 탐색하면서 연합 찾기
    for (let j = 0; j < N; j++) {
      if (visited[i][j]) continue; // 이전에 연합 계산했으면 패스
      visited[i][j] = 1;
      let sum = arr[i][j]; // 연합 숫자 합
      let idx = [[i, j]]; // 연합 내 위치 인덱스

      let q = [[i, j]];
      while (q.length) {
        const [cx, cy] = q.shift();
        for (const [dx, dy] of d) {
          const [nx, ny] = [cx + dx, cy + dy];
          if (nx < 0 || nx >= N || ny < 0 || ny >= N || visited[nx][ny]) continue;
          if (Math.abs(arr[cx][cy] - arr[nx][ny]) >= L && Math.abs(arr[cx][cy] - arr[nx][ny]) <= R) {
            // 주어진 조건에 따라 연합에 포함된다면
            visited[nx][ny] = 1;
            sum += arr[nx][ny];
            idx.push([nx, ny]);
            q.push([nx, ny]);
          }
        }
      }

      // 연합에 포함된 이웃 나라가 있다면
      if (idx.length != 1) {
        let newNum = Math.floor(sum / idx.length);
        for (const [x, y] of idx) {
          arr[x][y] = newNum;
        }
        flag = false;
      }
    }
  }

  if (flag) break;
  day++;
}
console.log(day);

//11:24, 11:56
