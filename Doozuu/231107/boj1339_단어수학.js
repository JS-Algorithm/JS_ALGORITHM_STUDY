const input = require('fs').readFileSync('ex.txt').toString().split('\n');
const [N, ...list] = input;

const map = new Map();
let number = 10;

// 각 자리수에 숫자 부여하고 더하기
list.map((item) =>
  [...item].map((a, idx) => {
    const val = map.get(a);
    map.set(a, (val || 0) + 10 ** (item.length - idx - 1));
  }),
);

const mapEntries = Array.from(map);
// 내림차순 정렬하기
let sortedMap = mapEntries.sort((a, b) => b[1] - a[1]);
// 9부터 순서대로 곱해서 누적합 구하기
let answer = sortedMap.reduce((acc, cur) => {
  number--;
  return acc + cur[1] * number;
}, 0);

console.log(answer);
