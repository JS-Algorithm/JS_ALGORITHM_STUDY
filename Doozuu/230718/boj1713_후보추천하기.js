const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin')
    : `3
14
2 1 4 3 5 6 2 7 2 100 100 54 54 50`
)
  .toString()
  .trim()
  .split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const K = +input();
const arr = input().split(' ').map(Number);
const candidates = new Map();

for (let i = 0; i < K; i++) {
  let num = arr[i];

  if (candidates.has(num)) {
    candidates.get(num)[0]++; // 이미 있으면 count 증가
  } else {
    if (candidates.size === N) {
      let min = null;

      for ([key, value] of candidates.entries()) {
        if (!min) {
          min = [key, value];
          continue;
        }

        const [minCnt, minTime] = min[1];
        const [nowCnt, nowTime] = value;

        if (nowCnt < minCnt || (nowCnt === minCnt && nowTime < minTime)) {
          min = [key, value];
        }
      }
      candidates.delete(min[0]);
    }
    candidates.set(num, [1, i]); // 사이즈가 N보다 작으면 바로 채워넣기
  }
}

let answer = '';
[...candidates.keys()].sort((a, b) => a - b).forEach((candidate) => (answer += candidate + ' '));
console.log(answer);

// 틀린 풀이
// const input = require('fs').readFileSync('ex.txt').toString().trim().split('\n');

// let [N, M, list] = input; // 사진틀 개수, 추천 횟수, 추천 리스트
// let arr = list.split(' ');
// let obj = {};

// arr.map((el) => (obj[el + '+'] = (obj[el + '+'] || 0) + 1));
// 객체에 반복 횟수 넣기
// ex. {2: 3, 1: 1, 4: 1, 3: 1, 5: 1, 6: 1, 7: 1}

// let sort = Object.entries(obj).sort(([, a], [, b]) => a - b);
// 반복 횟수 기준으로 오름차순 정렬
// ex. [[1, 1], [4, 1], [3, 1], [5, 1], [6, 1], [7, 1], [2, 3]]

// let answer = [];
// let s = sort.slice(-N); // ex. [[6, 1], [7, 1], [2, 3]]
// let temp = [];
// let i = N - 1;

// while (i >= 0) {
//   if (s[i][1] !== s[i - 1][1]) {
//     answer.push(s[i][0]);
//   } else {
//     while (i > 0 && s[i][1] === s[i - 1][1]) {
//       temp.push(s[i][0]);
//       i--;
//     }
//     temp.push(s[i][0]);
//     answer.push(...temp.reverse());
//   }
//   i--;
// }
// ex. [2, 6, 7]

// let result = answer.map((el) => +el[0]).join(' ');

// console.log(result);
