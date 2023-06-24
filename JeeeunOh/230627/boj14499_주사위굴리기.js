const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : '/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230627/input.txt';
const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n');

let [N, M, x, y, K] = input[0].split(' ').map(Number);
let arr = input.slice(1, 1 + N).map((item) => item.split(' ').map(Number));
let order = input.at(-1).split(' ').map(Number);

// 동, 서, 북, 남 순서
let d = ['_', [0, 1], [0, -1], [-1, 0], [1, 0]];

// 주사위
let dice = {
  bottom: 0,
  top: 0,
  front: 0,
  left: 0,
  right: 0,
  back: 0,
};

for (const num of order) {
  let [nx, ny] = [x + d[num][0], y + d[num][1]];
  if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

  if (num === 1) {
    // 동
    dice = {front: dice.front, back: dice.back, right: dice.top, top: dice.left, left: dice.bottom, bottom: dice.right};
  } else if (num === 2) {
    // 서
    dice = {front: dice.front, back: dice.back, right: dice.bottom, top: dice.right, left: dice.top, bottom: dice.left};
  } else if (num === 3) {
    // 남
    dice = {left: dice.left, right: dice.right, top: dice.back, front: dice.top, bottom: dice.front, back: dice.bottom};
  } else if (num === 4) {
    // 북
    dice = {left: dice.left, right: dice.right, top: dice.front, front: dice.bottom, bottom: dice.back, back: dice.top};
  }

  if (arr[nx][ny] === 0) {
    // 이동한 칸이 0 -> 주사위 숫자가 칸에 복사
    arr[nx][ny] = dice.bottom;
  } else {
    // 이동한 칸이 0 아닐 때 -> 칸 숫자가 주사위에 복사, 칸은 0
    dice.bottom = arr[nx][ny];
    arr[nx][ny] = 0;
  }

  [x, y] = [nx, ny];

  console.log(dice.top);
}
