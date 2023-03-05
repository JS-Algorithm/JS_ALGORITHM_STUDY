// 1. 정답 풀이
// 기존 널빤지 배열 생성 방법에서
// 널빤지 마지막 위치 저장하는 방식으로 변경

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, L] = input[0].split(' ').map(Number);
let arr = [];
let max = 0;
let idx = 1;
while (idx != N + 1) {
  let [start, end] = input[idx].split(' ').map(Number);
  arr.push([start, end]);
  idx++;
}

arr.sort(compare);

let ans = 0;
// 마지막 널빤지 좌표
let lastSquare = 0;

for (let i = 0; i < arr.length; i++) {
  let start = arr[i][0];
  let end = arr[i][1] - 1;

  // 시작점이 널빤지가 위치한 좌표보다 작으면
  // 그 다음 좌표로 옮기기
  if (start <= lastSquare) start = lastSquare + 1;
  // 웅덩이 끝지점 덮을때까지 널빤지 놓기
  for (let j = start; j <= end; ) {
    ans++;
    j += L;
    lastSquare = j - 1;
  }
}

console.log(ans);

function compare(a, b) {
  if (max < b[1]) max = b[1];
  if (max < a[1]) max = a[1];
  if (a[0] != b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
}

// 2. 메모리 초과 풀이

// const fs = require('fs');
// const input = fs
//   .readFileSync(
//     '/dev/stdin',
//   )
//   .toString()
//   .split('\n');

// let [N, L] = input[0].split(' ').map(Number);
// let arr = [];
// let max = 0;
// let idx = 1;
// while (idx != N + 1) {
//   let [start, end] = input[idx].split(' ').map(Number);
//   arr.push([start, end]);
//   idx++;
// }

// arr.sort(compare);

// // 널빤지 저장할 배열
// let square = Array(max + 1).fill(0);
// let ans = 0;
// // 마지막 널빤지 좌표
// let last = 0;

// for (let i = 0; i < arr.length; i++) {
//   let start = arr[i][0];
//   let end = arr[i][1] - 1;

//   for (let j = start; j <= end; ) {
//     // 널빤지 없을 때만 널빤지 넣음.
//     if (square[j] === 0) {
//       ans++;
//       for (let k = j; k < j + L; k++) {
//         square[k] = 1;
//       }
//       j += L;
//     } else if (square[j] === 1) {
//       j++;
//     }
//   }
// }

// console.log(ans);

// function compare(a, b) {
//   if (max < b[1]) max = b[1];
//   if (max < a[1]) max = a[1];
//   if (a[0] != b[0]) {
//     return a[0] - b[0];
//   } else {
//     return a[1] - b[1];
//   }
// }
