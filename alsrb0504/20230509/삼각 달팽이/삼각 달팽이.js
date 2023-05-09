function solution(n) {
  // (3가지) 방향 : 아래로, 옆으로, 위로
  const dir = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];

  // 규칙: 현재 이동 횟수을 3으로 나누었을 때,
  // 나머지가 0이면 => 아래로, 1이면 => 옆으로, 2면 왼쪽 대각선 위로 이동
  // [1, 0, 0, 0]
  // [2, 9, 0, 0]
  // [3, 10, 8, 0]
  // [4, 5, 6, 7]
  const arr = Array.from({length: n}, () => new Array(n).fill(0));
  const answer = [];

  // 현재 위치 : 처음은 y 이동방향을 +1 하기 때문에 -1로 설정
  let [currY, currX] = [-1, 0];
  let curr = 1;

  // n번의 방향 전환으로 이동 방향 변경
  for (let i = 0; i < n; i++) {
    const [moveY, moveX] = dir[i % 3];

    // 매 방향 전환마다 0 ~ (i - 1)까지 이동
    for (let j = 0; j < n - i; j++) {
      [currY, currX] = [currY + moveY, currX + moveX];

      arr[currY][currX] = curr++;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      answer.push(arr[i][j]);
    }
  }

  return answer;
}

const [n] = [4];

console.log(solution(n));
