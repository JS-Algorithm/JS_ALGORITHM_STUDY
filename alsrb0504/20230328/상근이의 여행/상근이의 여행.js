const readFileSyncAddress = "/dev/stdin";
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const tc = Number(input[0]);
const answer = [];
let line = 1;

// 문제에서 비행 스케쥴이 항상 연결 그래프(=신장 트리)라는 점이 보장
// + 동일한 비행기를 여러번 탑승하는 것은 카운트 횟수가 "1"
// 그러므로, 모든 정점은 이미 연결된 하나의 그래프(=신장 트리)가 보장되기에 답은 N - 1
for (let i = 0; i < tc; i++) {
  const [N, M] = input[line].split(" ").map(Number);

  answer.push(N - 1);
  line += M + 1;
}
console.log(answer.join("\n"));
