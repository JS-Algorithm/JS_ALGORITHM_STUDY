const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let num = Number(input[0]);
let idx = 1;
while (num--) {
  let cnt = +input[idx];
  // 전화번호 문자열 길이 기준 오름차순
  let arr = input.slice(idx + 1, idx + cnt + 1);
  arr.sort();
  let ans = 'YES';
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1].substring(0, arr[i].length)) {
      ans = 'NO';
      break;
    }
  }

  console.log(ans);
  idx += cnt + 1;
}
