// 시간초과 답안

let fs = require('fs');
let [n, k] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let temp = [];
let visit = Array.from({length: n}).fill(0);

// temp 배열에서 2개 뽑아서 그렇고 그런 사이 만족하는지 확인하는 함수
function checkValid(temp) {
  let result = 0;

  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[i] > temp[j]) {
        result++;
      }
    }
  }

  return result;
}

let flag = 0;

// dfs + backtracking 으로 순열 만드는 함수
function dfs(cnt, n) {
  if (flag === 1) return;
  if (cnt === n) {
    let resultCnt = checkValid(temp);

    if (resultCnt == k) {
      console.log(temp.join(' '));
      flag = 1;
      return;
    }
    return;
  }
  if (flag === 1) return;

  for (let i = 0; i < n; i++) {
    if (!visit[i]) {
      visit[i] = 1;
      temp.push(i + 1);
      dfs(cnt + 1, n);
      temp.pop();
      visit[i] = 0;
    }
  }
}

dfs(0, n);
