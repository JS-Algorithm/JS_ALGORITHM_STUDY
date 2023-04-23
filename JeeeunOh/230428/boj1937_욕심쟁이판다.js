// 첫 접근 : 순수 dfs -> 두번째 접근 : dfs + dp
const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230428/input.txt').toString().trim().split('\n');

const num = +input[0];
let map = input.slice(1).map(row=>row.split(' ').map(Number));
let maxDay = Array.from({length:num}, (_)=> Array.from({length:num}, (_)=> 1));

let ans = 0;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

const dfs = (x, y) => {
    if(maxDay[x][y]!=1) return maxDay[x][y]; // 기본 날짜가 아니면 탐색했다는 뜻 -> 바로 return

    for(let i=0 ; i<4 ; i++){ // 상하좌우 탐색하면서
        let [nx, ny] = [x+dx[i], y+dy[i]];
        if(nx<0 || nx>=num || ny<0 || ny>=num) continue;
        if(map[nx][ny] > map[x][y]){ // 새로운 max 값 세팅해주기
            maxDay[x][y] = Math.max(maxDay[x][y], dfs(nx, ny)+1);
        }
    }

    return maxDay[x][y];
}

for(let i=0 ; i<num ; i++){
    for(let j=0 ; j<num ; j++){
        ans = Math.max(ans, dfs(i, j))
    }
}

console.log(ans);