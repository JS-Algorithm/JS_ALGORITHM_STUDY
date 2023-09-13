let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n  = Number(input[0]);
let graph = [];
for (let i = 1 ; i <= n ; i++) graph.push(input[i].split(''));

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function dfs (x, y) {
	if (!visited[x][y]) {
		visited[x][y] = true;
		for (let i = 0 ; i < 4 ; i++) { //인전 영역 하나씩 확인
			let nx = x + dx[i];
			let ny = y + dy[i];
			if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue; //공간 벗어나면 무시
			if (graph[x][y] == graph[nx][ny]) dfs(nx, ny); //동일 색상 -> 재귀 호출
		}
		return true;
		}
	return false;
}

//dfs로 연결 요소 카운팅
let result1 = 0;
let visited = [];
for (let i = 0 ; i <n ; i++) visited.push(new Array(n).fill(false));
for (let i = 0 ; i< n ; i++)
	for (let j = 0 ; j < n ; j++)
		if (dfs(i, j , 0)) result1++;

//R-G 변환하고 다시 한번 연결요소 카운팅
for (let i = 0 ; i<n ;i++)
	for (let j = 0 ; j < n ; j++)
		if (graph[i][j] == 'R') graph[i][j] = 'G';

//dfs로 연결 요소 카운팅
let result2 = 0;
visited = [];
for (let i = 0 ; i < n ; i++) visited.push(new Array(n).fill(false));
for (let i = 0 ; i < n ; i++)
	for (let j= 0 ; j < n ; j++)
		if (dfs(i, j)) result2++;

console.log(result1 + ' ' + result2);