let fs = require('fs');
let [n, k] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// 원래의 배열 생성
let arr = Array.from({length: n}).map((_, i) => i + 1);

let result = Array.from({length: n}).fill(0);

let changed_num = 0;

for (let i = n - 1; i > 0; i--) {
  if (k >= i) {
    k -= i;
    arr[i] = -1;
    result[changed_num++] = i + 1;
  }
}
// 배열 result를 앞에서부터 출력
// 이때 배열 original에서 -1이 아닌 원소를 changed에 차례대로 옮긴다

for (let i = 0; i < n; i++) {
  // 남은거 옮겨주기
  if (arr[i] >= 0) {
    result[changed_num++] = arr[i];
  }
}

console.log(result.join(' '));
