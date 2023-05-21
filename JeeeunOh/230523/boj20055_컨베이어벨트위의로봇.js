const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230523/input.txt').toString().trim().split('\n');

// 올리는 위치 : 0 / 빼는 위치 : (N-1)

let [N, K] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
let robot = Array(N).fill(0); // 로봇이 올라가있는 위치
let cnt = arr.reduce((acc, cur) => (cur === 0 ? acc + 1 : acc), 0);

let ans = 0;

while (cnt < K) {
  ans++;
  // 1. 한칸 회전
  // 1-1. 컨테이너 칸 이동
  let last = arr[2 * N - 1];
  arr = [last].concat(arr.slice(0, 2 * N - 1));
  // 1-2. 로봇위치도 같이 이동 : 이 때, 어쩌피 N-1번째 칸에는 로봇 없음.
  robot = [0].concat(robot.slice(0, N - 1));
  robot[N - 1] = 0; // 빼는 위치에 있는 로봇은 없애주기

  // 2. 이동할 수 있는 로봇 있으면 차례대로 이동 N-2(빼는 위치 바로 전) ~ 0 순서대로 이동하기
  for (let i = N - 2; i >= 0; i--) {
    if (robot[i] === 0) continue;
    // 이동할 자리의 내구도와 로봇 유무 확인
    if (arr[i + 1] > 0 && robot[i + 1] === 0) {
      robot[i] = 0;
      if (i + 1 === N - 1) robot[i + 1] = 0; // 빼는 위치면 올리자마자 빠짐.
      else robot[i + 1] = 1;

      arr[i + 1]--;
      if (arr[i + 1] === 0) cnt++;
    }
  }
  robot[N - 1] = 0; // 빼는 위치에 있는 로봇은 없애주기

  // 3. 올리는 위치에 올릴 수 있으면 올리기
  if (arr[0] > 0) {
    robot[0] = 1;
    arr[0]--;
    if (arr[0] === 0) cnt++;
  }
}

console.log(ans);

// 1:20, 1:54
