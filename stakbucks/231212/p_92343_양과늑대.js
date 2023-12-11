const SHEEP = 0;
const WOLF = 1;

function solution(info, edges) {
  const wolvesOnTheWay = Array(info.length).fill([]);

  const tree = new Map();

  edges.forEach((edge, i) => {
    const [parent, child] = edge;
    tree.set(parent, [...(tree.get(parent) ?? []), child]);
  });

  getWolvesOntheWayByDFS(0, []);

  // 해당 노드로 가기 위해 반드시 거쳐야 하는 늑대들 구하기
  function getWolvesOntheWayByDFS(node) {
    const children = tree.get(node);
    children?.forEach((child) => {
      wolvesOnTheWay[child] = info[child] === WOLF ? [...wolvesOnTheWay[node], child] : [...wolvesOnTheWay[node]];
      getWolvesOntheWayByDFS(child);
    });
  }

  const sheepNodes = new Set(info.reduce((acc, cur, idx) => (cur === WOLF ? [...acc] : [...acc, idx]), []));
  sheepNodes.delete(0);

  let maxSheeps = 0;

  visitSheepNodesByDFS(sheepNodes, 1, new Set());

  function visitSheepNodesByDFS(sheepNodes, sheepCnt, passedWolves) {
    maxSheeps = Math.max(sheepCnt, maxSheeps);

    sheepNodes.forEach((nextNode) => {
      const nextPassedWolves = new Set(passedWolves);
      wolvesOnTheWay[nextNode].forEach((passedWolf) => {
        nextPassedWolves.add(passedWolf);
      });
      if (sheepCnt > nextPassedWolves.size) {
        const nextSheepNodes = new Set(sheepNodes);
        nextSheepNodes.delete(nextNode);
        visitSheepNodesByDFS(nextSheepNodes, sheepCnt + 1, nextPassedWolves);
      }
    });
  }
  return maxSheeps;
}
