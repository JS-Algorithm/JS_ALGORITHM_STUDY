const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : '/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230711/input.txt';
const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n');

let [N, M, S] = input.slice(0);

let P = 'I' + 'OI'.repeat(+N);
let ans = 0;
let length = 0;

S = S.split('');

for (let i = 0; i < S.length; i++) {
  // IOIOI의 시작 : length++
  if (length === 0 && S[i] === 'I') length++;
  // 시작점이 아니면서 이전 문자와 다르면 length++
  else if (length !== 0 && S[i] != S[i - 1]) {
    length++;
    // 이 때, P의 범위 이상이고 홀수 개의 length라면 새로운 Pn 찾음 -> answer++
    if (P.length <= length && length % 2 != 0) ans++;
  } else if (length != 0) {
    // 이전 문자와 같은데 Pn의 시작점도 아니라면
    // length 초기화해주고 현재 문자를 시작점으로 다시 탐색
    length = 0;
    i--;
  }
}

console.log(ans);

/** 
 * 50점 풀이
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : '/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230711/input.txt';
const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n');

let [N, M, S] = input.slice(0);

let P = 'I' + 'OI'.repeat(+N);
let ans = 0;

S.split('').forEach((_, idx) => {
  let temp = S.slice(idx, idx + P.length);
  if (temp === P) ans++;
});

console.log(ans);
*/
