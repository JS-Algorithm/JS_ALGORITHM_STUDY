let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [r, c] = input[0].split(' ').map(Number);
let arr = [];
for(let i = 1; i <= r ; i++) arr.push(input[i]);

let dx = [-1, 1, 0, 0]; //좌, 우 이동
let dy = [0, 0, -1, 1]; //상, 하 이동
let visited = new Set(); //방문한적 있는 알파벳
let maxDepth = 0;

//현재 위치 (x, y)
function dfs(depth, x, y) {
	maxDepth = Math.max(maxDepth, depth); //최댓값 업데이트
	for (let i = 0 ; i < 4 ; i++) {
		//상하좌우 4방향에 대해 다음 위치(nx, ny) 계산
		let nx = x + dx[i];
		let ny = y + dy[i];
		
		if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue; //맵 벗어나면 무시
		if (visited.has(arr[nx][ny])) continue; //이미 방문한 알파벳이면 무시
	

		visited.add(arr[nx][ny]); //방문 처리 (다음 재귀 호출에서 해당 알파벳 사용 X)
		dfs(depth + 1, nx, ny); //dfs 함수 재귀 호출 (다음 위치에서 탐색 수행)
		visited.delete(arr[nx][ny]); //방문 처리 해제 (다음 경로에서 다시 해당 알파벳 사용 O)
		}
	}

visited.add(arr[0][0]); //좌측 상단부터 start
dfs(1, 0, 0);
console.log(maxDepth);