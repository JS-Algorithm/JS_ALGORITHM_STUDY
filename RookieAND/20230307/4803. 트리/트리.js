/**
 * 각 노드들에 대한 집합을 구한 후, 만약 서로가 같은 집합에 소속되게 되었는지 체크
 * 사이클이 결성되는 경우 => 서로가 모두 같은 루트 노드를 가리키고 있는지를 체크
 */
const input = require('fs')
  .readFileSync("/dev/stdin")
  .toString()
  .trimEnd()
  .split('\n');

let [idx, tCase] = [0, 1]
while (true) {
    const [N, M] = input[idx].split(" ").map(Number);
    if (N === 0 && M === 0) break;

    const treeSize = testCase(N, M, idx);
    switch(treeSize) {
        case 0:
            console.log(`Case ${tCase}: No trees.`)
            break;
        case 1:
            console.log(`Case ${tCase}: There is one tree.`)
            break;
        default: 
            console.log(`Case ${tCase}: A forest of ${treeSize} trees.`)
            break;
    }
    idx += M + 1;
    tCase += 1;
}


function testCase(N, M, idx) {
    // 각 노드의 루트 노드를 담은 배열 parents
    const parents = [...new Array(N + 1).keys()];
    
    // 사이클이 이루어진 노드들의 집합을 별도로 보관하기 위한 Set.
    const cycle = new Set();
    const trees = new Set();

    function root(node) {
        if (parents[node] === node) return node;
        // 경로 압축을 통해 최상단 루트 노드를 찾아냄.
        parents[node] = root(parents[node]);
        return parents[node];
        
    }
    
    function union(a, b) {
        const [rootA, rootB] = [root(a), root(b)]
        if (rootA === rootB) return;
        parents[Math.max(rootA, rootB)] = Math.min(rootA, rootB);
    }
    
    // 각 간선에 대한 조사를 진행.
    input.slice(idx + 1, idx + M + 1).forEach((connect) => {
        
        // 두 정점에 대한 루트 노드를 먼저 구함
        const [a, b] = connect.split(" ").map(Number);
        const [rootA, rootB] = [root(a), root(b)]
        
        // 서로 같은 부모를 공유하고 있거나, 이미 사이클을 이루는 집합에 소속되었는지 체크
        if (rootA === rootB || cycle.has(a) || cycle.has(b)) {
            // cycle = new Set([...cycle, rootA, rootB, a, b]); 시간 초과 발생
            cycle.add(rootA);
            cycle.add(rootB);
            cycle.add(a);
            cycle.add(b);
        }
        union(a, b);
    });

    // 모든 간선을 이은 후, 사이클을 구성하는 노드들을 제외한 나머지 트리의 갯수를 구해야 함.
    for (let node = 1; node < N + 1; node ++) {
        const parentNode = root(node);
        if (!cycle.has(parentNode)) {
            trees.add(parentNode);
        }
    }
    return trees.size;
}