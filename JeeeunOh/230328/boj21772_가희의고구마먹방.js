const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230328/input.txt').toString().split('\n');

const [N, M, sec] = input.shift().split(' ');

let map = input.map((row)=>row.split('').map(String));
// 가희 위치 찾기
let start = [];
map.forEach((row, rIdx)=> {
    row.forEach((item, iIdx)=>{
        if(item==='G'){
            start = [rIdx, iIdx];
        } 
    })
})

let answer = 0, cnt=0;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
// 시작위치 포함해서 시작
let visited = [[start[0], start[1]]];

// (cx, cy) 에서 탐색
const dfs = (cx, cy, cnt) => {
    let isVisit = false;
    // 가장 최근에 방문 지점 제외 방문한 적 있으면 true
    for(let i=0 ; i<visited.length-1; i++){
        if(visited[i][0]===cx && visited[i][1]===cy){
            isVisit = true;
        }
    }
    // 처음으로 발견한 고구마면 ++
    if(map[cx][cy]==='S' && isVisit===false){
        cnt++;
    }
    // 방문한 위치 개수 > 주어진 시간이면
    if(visited.length>sec) {
        // 최대 고구마 개수 갱신
        answer = Math.max(answer, cnt);
        return;
    }
    for(let i=0 ; i<4 ; i++){
        let nx = cx+dx[i];
        let ny = cy+dy[i];
        // 올바른 위치가 아니면 패스
        if(nx<0 || nx>=N || ny<0 || ny>=M || map[nx][ny]==='#') continue;
        // 벗어나지 않았으면 dfs 돌리기
        else {
            visited.push([nx, ny]);
            dfs(nx, ny, cnt);
            visited.pop();
        }
    }
}

// start 지점부터 시작
dfs(start[0], start[1], cnt);

console.log(answer);