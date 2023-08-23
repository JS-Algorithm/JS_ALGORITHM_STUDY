function solution(n, wires) {
    //그래프 생성
const graph = new Array(n + 1).fill(null).map(() => []);
for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
}
    
    //dfs 탐색
function dfs(node, parent) {
    let count = 1;
    for (const neighbor of graph[node]) {
        if (neighbor !== parent) {
            count += dfs(neighbor, node);
        }
    }
    return count;
}
    
    //전선 끊기
let answer = Infinity;
for (const [v1, v2] of wires) {
    graph[v1] = graph[v1].filter(v => v !== v2);
    graph[v2] = graph[v2].filter(v => v !== v1);

    const count1 = dfs(v1, v2);
    const count2 = n - count1;

    answer = Math.min(answer, Math.abs(count1 - count2));

    graph[v1].push(v2);
    graph[v2].push(v1);
}

return answer;
}