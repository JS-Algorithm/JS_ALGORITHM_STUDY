// 1. 일단 1부터 N까지 순서대로 나열해본다.
// 2. 왼쪽에 있는 사람이 오른쪽에 있는 사람보다 더 크다면 그렇고 그런 사이이다.
// 3. 그러면 몇 가지 예시를 좀 써보자.
// 1, 2, 4, 3 => 1개, 1, 4, 2, 3 => 2개, 4, 1, 2, 3 => 3개, 4, 1, 3, 2 => 4개, 4, 3, 1, 2 => 5개, 4, 3, 2, 1 => 6개
// 따라서 사람이 N명이면 이를 조합한 순열의 갯수는 nC2 => N(N + 1) / 2 이다.

// 결론 : 가장 오른쪽 수부터 수를 움직인다고 가정했을 때, K번째 순열을 구해야 한다.
// N = 5, K = 7 이라면, 내가 내린 가정을 통해서 산술했을 때 아래와 같다.
// 1, 2, 3, 4, 5 (0)

// 1, 2, 3, 5, 4 (1)
// 1, 2, 5, 3, 4 (2)
// 1, 5, 2, 3, 4 (3)
// 5, 1, 2, 3, 4 (4)

// 5, 1, 2, 4, 3 (5)
// 5, 1, 4, 2, 3 (6)
// 5, 4, 1, 2, 3 (7) => 정답

// 먼저 N, K를 입력 받는다.
let [N, K] = require("fs")
  .readFileSync("./text.txt")
  .toString()
  .trimEnd()
  .split(" ")
  .map(Number);

let numbers = [...new Array(N + 1).keys()].slice(1);

let count = 0;

// 예외 케이스 : k = 0일 경우, 그냥 numbers 배열을 보여준다.
  if (K > 0) {
  // (N - 1) / 2 만큼의 반복을 계속해서 진행한다. K번째 순서에서 멈춘다.
  for (let i = 1; i < N; i++) {
    for (let movedIndex = N - 1; movedIndex > i - 1; movedIndex--) {
      if (count >= K) break;
      let temp = numbers[movedIndex];
      numbers[movedIndex] = numbers[movedIndex - 1];
      numbers[movedIndex - 1] = temp;
      count++;
    }
    if (count >= K) break;
  }
}

console.log(numbers.join(" "));
