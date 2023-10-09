// 1. 특정 정점과 연결된 다른 정점을 배열 형태로 구현한다.
// 2. 특정 정점을 루트로 하는 트리의 하위 노드를 재귀적으로 탐색한다.

/**
 * [시간 초과] 발생
 * - 원인을 아작 파악하지 못함..
 * - 메모이제이션을 정상적으로 활용하지 못함인가?
 */

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trimEnd()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const [[N, R, Q], ...rest] = input;
const connections = rest.slice(0, N - 1);
const querys = rest.slice(N - 1).map(([query]) => query);

const tree = new Map();
const subNodeAmount = new Map(
  Array.from({ length: N }, (_, index) => [index + 1, 1])
);

const visited = new Set();

for (const [first, second] of connections) {
  tree.set(first, tree.has(first) ? [...tree.get(first), second] : [second]);
  tree.set(second, tree.has(second) ? [...tree.get(second), first] : [first]);
}

const getSubtreeNode = (current) => {
  // 이미 방문한 노드라면 0을 return 한다.
  if (visited.has(current)) return 0;
  visited.add(current);

  for (const subNode of tree.get(current)) {
    // 아직 미방문한 좌표에 대해서만 탐색을 진행한다.
    if (visited.has(subNode)) continue;

    // 이전에 방문하여 정점의 수를 구했다면, 메모이제이션된 값을 return
    const nextSubNodeAmount = visited.has(subNode)
      ? subNodeAmount.get(subNode)
      : getSubtreeNode(subNode);

    subNodeAmount.set(current, subNodeAmount.get(current) + nextSubNodeAmount);
  }

  return subNodeAmount.get(current);
};

getSubtreeNode(R);

for (const query of querys) {
  console.log(subNodeAmount.get(query));
}
