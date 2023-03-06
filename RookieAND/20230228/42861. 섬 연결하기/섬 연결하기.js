const n = 4;
const costs = [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
];

function solution(n, costs) {
    let answer = 0;

    // 이어진 섬들의 집합을 구하고, 각 집합의 루트 노드를 자기 자신으로 설정
    const parents = [...Array(n).keys()];

    // 건설 비용이 적은 순으로 나열, 적은 건설부터 진행시키기 위함.
    costs.sort((a, b) => a[2] - b[2]);

    for (let idx = 0; idx < costs.length; idx++) {
        const [start, end, buildCost] = costs[idx];

        // 두 지점이 같은 집합에 포함되어 있다면 건설하지 않아도 됨.
        if (root(start) === root(end)) continue;

        // 그렇지 않을 경우 두 섬을 잇고 건설 비용을 추가시킴
        union(start, end);
        answer += buildCost;
    }

    return answer;

    function root(node) {
        if (node === parents[node]) return node;
        // 재귀 탐색을 통해 최상위 루트 노드 탐색. 경로 압축
        parents[node] = root(parents[node]);
        return parents[node];
    }

    function union(fNode, sNode) {
        fNode = root(fNode);
        sNode = root(sNode);
        // 만약 두 노드의 루트 노드가 같다면 이미 같은 집합에 포함되어 있음
        if (fNode === sNode) return;
        // 그렇지 않을 경우 노드 값이 낮은 집합으로 포함시킴.
        parents[Math.min(fNode, sNode)] = Math.max(fNode, sNode);
    }
}
