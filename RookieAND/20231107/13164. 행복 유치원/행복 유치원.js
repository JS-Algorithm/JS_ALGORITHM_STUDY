// 조에서 가장 키가 큰 원생과 가장 작은 원생의 키 차이만큼 든다는 이야기는..
// 결국 인접한 학생들 간의 키 목록 중에서, 차이가 "크게" 나는 케이스를 제거하면 된다.
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const [[N, K], talls] = input;
const differences = [];

// 인접한 학생들 간의 키 차이를 구해야 한다. 이후 차이가 큰 순으로 정렬한다.
for (let i = 1; i < N; i++) {
  differences.push(talls[i] - talls[i - 1]);
}

differences.sort((a, b) => a - b);

// 키가 큰 원생은 혼자 그룹을 생성하도록 하여, 큰 비용이 생기지 않게 방어
const answer = differences.slice(0, N - K).reduce((acc, cur) => acc + cur, 0);
console.log(answer);
