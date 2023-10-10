const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(input) {
  let [[N], ...wires] = input;

  wires = wires.sort((a, b) => a[0] - b[0]);
  wires = wires.map((wire) => wire[1]);

  // i를 마지막 원소로 하는, 증가하는 부분 수열 길이 기록
  const dp = Array(N).fill(1);

  for (let i = 1; i < N; i++) {
    const wire = wires[i];
    for (let j = 0; j < i; j++) {
      if (wires[j] < wire) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  console.log(N - Math.max(...dp));
}
solution(input);

/** DFS 풀이
 
// 1. 입력값들을 A의 번호를 기준으로 정렬하고
// 2. DFS로 전깃줄 하나씩 선택한 경우 / 선택 안한 경우로 탐색 (전깃줄이 서로 교차하지 않도록)
// 3. 가지치기 진행 (안하면 시간초과 발생)

function solution(input) {
  const N = Number(input[0]);
  const arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(input[i + 1].split(' ').map(Number));
  }
  arr.sort((a, b) => a[0] - b[0]);
  let maxCnt = 0;
  const DFS = (i, cnt, min) => {
    const left = arr.length - i + cnt; // 최대로 고를 수 있는 수
    if (left <= maxCnt) {
      // 끝까지 탐색해봤자 답이 될 수 없는 경우 가지치기
      return;
    }
    if (i === arr.length) {
      // 마지막 전깃줄까지 체크한 경우
      maxCnt = Math.max(cnt, maxCnt);
      return;
    }
    if (arr[i][1] > min) {
      // 추가 가능한 전깃줄일때
      // 추가하는 경우
      DFS(i + 1, cnt + 1, arr[i][1]);
    }
    // 추가하지 않는 경우
    DFS(i + 1, cnt, min);
  };

  DFS(0, 0, 0);
  console.log(arr.length - maxCnt);
}
solution(input);
 */
