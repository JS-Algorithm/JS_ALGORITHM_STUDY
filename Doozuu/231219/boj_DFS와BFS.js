const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'ex.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, V] = input.shift().split(' ').map(Number);
const numbers = input.map((el) => el.split(' ').map(Number));
const graph = Array.from({length: N + 1}, () => []);

numbers.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

graph.forEach((nodes) => nodes.sort((a, b) => a - b));

// DFS
function DFS(graph, startNode) {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return visited;
}

// BFS
function BFS(graph, startNode) {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
}

const dfs = DFS(graph, V);
const bfs = BFS(graph, V);

console.log(dfs.join(' '));
console.log(bfs.join(' '));
