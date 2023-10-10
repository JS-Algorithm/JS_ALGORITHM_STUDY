// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v.split(' ').map(Number));

// class Node {
//   constructor(number) {
//     this.number = number;
//     this.subtree = new Set();
//     this.children = new Set();
//   }
// }

// function solution(input) {
//   const [N, R, Q] = input.slice(0, 1).flat();
//   const edges = input.slice(1, N);
//   const targets = input.slice(N).flat();

//   const visited = new Set(); // 트리 생성 시, 방문한 정점 기록

//   const edgeMap = new Map();
//   edges.forEach((edge) => {
//     const [i, j] = edge;

//     const iArr = edgeMap.get(i);
//     edgeMap.set(i, [...iArr, j]);

//     const jArr = edgeMap.get(j);
//     edgeMap.set(j, [...jArr, i]);
//   });

//   const rootNode = new Node(R);

//   makeTree(rootNode);

//   function makeTree(currentNode) {
//     for (const node of connectedNodes) {
//       makeTree(node);
//     }
//   }
// }
// solution(input);
