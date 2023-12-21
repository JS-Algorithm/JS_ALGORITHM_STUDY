// 메모리 초과

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'ex.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let ballonNum = Array.from({length: N}, (_, i) => i + 1);
let resultArr = [];
let idx = 0;

let K = arr.splice(idx, 1)[0];
resultArr.push(ballonNum.splice(idx, 1)[0]);

while (arr.length > 0) {
  if (K > 0) {
    idx = (idx + (K - 1)) % arr.length;
  } else {
    K = K * -1;
    idx = arr.length - idx - 1;
    idx = arr.length - ((idx + K) % arr.length) - 1;
  }
  K = arr.splice(idx, 1)[0];
  resultArr.push(ballonNum.splice(idx, 1)[0]);
}

console.log(resultArr.join(' '));
