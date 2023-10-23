const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const CLEANER = -1;

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(input) {
  const [R, C, T] = input.shift();

  // 공기청정기 위치
  const cleanerLocs = [];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (input[i][j] === CLEANER) {
        cleanerLocs.push(i);
      }
    }
  }

  for (let i = 0; i < T; i++) {
    spread();
    airCleanerOperate();
  }

  let count = 0;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (input[i][j] > 0) count += input[i][j];
    }
  }
  console.log(count);

  // 미세먼지 확산
  function spread() {
    // 동시에 확산되므로 임시 배열 temp에 확산된 결과를 저장하고
    // 마지막에 확산이 다 끝났을 때 한 번에 원본을 갱신해준다
    const temp = input.map((v) => [...v]);

    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        // 미세먼지 양이 5 이상인 경우에만 확산한다
        if (input[i][j] >= 5) {
          const spreadVal = ~~(input[i][j] / 5); // 확산되는 양

          for (const [dx, dy] of dirs) {
            const [nx, ny] = [i + dx, j + dy];

            if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
            if (input[nx][ny] === CLEANER) continue;

            temp[nx][ny] += spreadVal;
            temp[i][j] -= spreadVal;
          }
        }
      }
    }
    input = temp.map((v) => [...v]);
  }

  // 공기청정기 작동
  function airCleanerOperate() {
    const temp = input.map((v) => [...v]);

    const [topIdx, bottomIdx] = cleanerLocs;

    // 위쪽 공기청정기 순환
    for (let j = 1; j < C; j++) {
      temp[topIdx][j] = input[topIdx][j - 1] === CLEANER ? 0 : input[topIdx][j - 1];
    }
    for (let i = topIdx - 1; i >= 0; i--) {
      temp[i][C - 1] = input[i + 1][C - 1];
    }
    for (let j = C - 2; j >= 0; j--) {
      temp[0][j] = input[0][j + 1];
    }
    for (let i = 1; i < topIdx; i++) {
      temp[i][0] = input[i - 1][0];
    }

    // 아래쪽 공기청정기 순환
    for (let j = 1; j < C; j++) {
      temp[bottomIdx][j] = input[bottomIdx][j - 1] === CLEANER ? 0 : input[bottomIdx][j - 1];
    }
    for (let i = bottomIdx + 1; i < R; i++) {
      temp[i][C - 1] = input[i - 1][C - 1];
    }
    for (let j = C - 2; j >= 0; j--) {
      temp[R - 1][j] = input[R - 1][j + 1];
    }
    for (let i = R - 2; i > bottomIdx; i--) {
      temp[i][0] = input[i + 1][0];
    }

    input = temp.map((v) => [...v]);
  }
}
solution(input);
