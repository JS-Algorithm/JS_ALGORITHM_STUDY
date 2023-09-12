function dfs (x, graph, visited, finished, result) {
	visited[x] = true;  //현재 노드 방문 처리
		let y = graph[x];  //다음 노드
	//다음 노드 방문 아직 안했을 때
	if (!visited[y]) {
		dfs(y, graph, visited, finished, result);
	}
	//다음 노드 방문한 적 있고, 미완료
	else if (!finished[y]) {
		//사이클이 발생했음 -> 사이클에 포함된 노드 저장
		while (y != x) {
			result.push(y);
			y = graph[y];
		}
		result.push(x);
	}
	finished[x] = true;
}

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let graph = [0];
for (let i = 1 ; i<=n ; i++) {
	graph.push(Number(input[i]));
}
let visited = new Array(n+1).fill(false);
let finished = new Array(n+1).fill(false);
let result = [];

for (let x = 1 ; x <= n ; x++) {
	if (!visited[x]) dfs(x, graph, visited, finished, result);
}

console.log(result.length);
result.sort((a,b) => a-b);
for (let x of result) console.log(x);