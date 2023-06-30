const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const arr = Array.from({length: N}, (v, i) => input[i + 1].split(' ').map(Number));
  const visited = Array.from({length: N}, () => Array(M).fill(false));

  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let max = 0;
  const DFS = (i, j, count, sum) => {
    sum += arr[i][j];
    if (count === 4) {
      max = Math.max(max, sum);
      return;
    }
    for (const [dy, dx] of dir) {
      const [ny, nx] = [i + dy, j + dx];
      if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
        continue;
      }
      if (visited[ny][nx]) {
        continue;
      }
      visited[ny][nx] = true;
      DFS(ny, nx, count + 1, sum);
      visited[ny][nx] = false;
    }
    return;
  };

  const checkException = (i, j) => {
    let sum;
    if (i > 0 && j > 0 && j < M - 1) {
      sum = arr[i][j] + arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1];
      max = Math.max(max, sum);
    }
    if (i < N - 1 && j > 0 && j < M - 1) {
      sum = arr[i][j] + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];
      max = Math.max(max, sum);
    }
    if (j > 0 && i > 0 && i < N - 1) {
      sum = arr[i][j] + arr[i - 1][j - 1] + arr[i][j - 1] + arr[i + 1][j - 1];
      max = Math.max(max, sum);
    }
    if (j < M - 1 && i > 0 && i < N - 1) {
      sum = arr[i][j] + arr[i - 1][j + 1] + arr[i][j + 1] + arr[i + 1][j + 1];
      max = Math.max(max, sum);
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      visited[i][j] = true;
      DFS(i, j, 1, 0);
      visited[i][j] = false;
      checkException(i, j);
    }
  }

  console.log(max);
}
solution(input);

// 메모리초과 나는 코드...

// function solution(input) {
//   const [N, M] = input[0].split(' ').map(Number);
//   const arr = Array.from({length: N}, (v, i) => input[i + 1].split(' ').map(Number));

//   const dir = [
//     [-1, 0],
//     [1, 0],
//     [0, -1],
//     [0, 1],
//   ];
//   let max = 0;
//   const DFS = (i, j, count, sum, set) => {
//     set.add([i, j]);
//     sum += arr[i][j];
//     if (count === 4) {
//       max = Math.max(max, sum);
//       return;
//     }
//     for (const [si, sj] of set) {
//       for (const [dy, dx] of dir) {
//         const [ny, nx] = [si + dy, sj + dx];
//         if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
//           continue;
//         }
//         if (visited[ny][nx]) {
//           continue;
//         }
//         visited[ny][nx] = true;
//         DFS(ny, nx, count + 1, sum, set);
//       }
//     }
//     return;
//   };

//   let visited = Array.from({length: N}, () => Array(M).fill(false));
//   let set = new Set();
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < M; j++) {
//       visited = Array.from({length: N}, () => Array(M).fill(false));
//       visited[i][j] = true;
//       set.clear();
//       DFS(i, j, 1, 0, set);
//     }
//   }
//   console.log(max);
// }
