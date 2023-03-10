const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/input.txt').toString().split('\n');

/**
 cnt 배열에 해당 얼음 주위 물 영역 개수 카운팅
 카운팅 후 빙산 한번에 깎기
 bfs로 빙산 몇갠지 카운팅
 */

let [N, M] = input[0].split(" ").map(Number);
let map = [];
for(let i=1 ; i<=N; i++){
    let arr = input[i].split(" ").map(Number);
    map.push(arr);
}

let [H, W] = [map.length, map[0].length];


let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let visited, ans=0;

function dfs(x, y){
    let q = [];
    q.push([x,y]);
    visited[x][y]=0;

    while(q.length){
        let [cx, cy] = q.shift();
        for(let i=0 ; i<4 ; i++){
            let nx = cx+dx[i];
            let ny = cy+dy[i];
            if(nx>=0 && nx<H && ny>=0 && ny<W && visited[nx][ny]>0){
                q.push([nx, ny]);
                visited[nx][ny]=0;
            }
        }
    }
}

while(true){
    let cnt = Array.from(Array(H), () => Array(W).fill(0));
    ans++;
    for(let i=0 ; i<H ; i++){
        for(let j=0 ; j<W ; j++){
            // 빙산 주위에 몇개의 물??
            if(map[i][j]){
                for(let k=0 ; k<4; k++){
                    let [nx, ny] = [i+dx[k], j+dy[k]];
                    if(nx>=0 && nx<H && ny>=0 && ny<W && map[nx][ny]===0){
                        cnt[i][j]++;
                    }
                }
            }
        }
    }
    
    // cnt 대로 깎기
    for(let i=0 ; i<H ; i++){
        for(let j=0 ; j<W ; j++){
            map[i][j]-=cnt[i][j];
            if(map[i][j]<0) map[i][j]=0;
        }
    }

    // 빙산이 쪼개졌는지 테스트
    visited = map.map(item => item.slice());
    // 해당 영역이 다 물로 이루어져있다고 가정
    let isZero = true;

    for(let i=0 ; i<H ; i++){
        for(let j=0 ; j<W ; j++){
            // 빙산이 있을 때
            if(visited[i][j]!=0){
                if(!isZero) { // 이전에 다른 빙산 탐색한 적 있으면 break;
                    console.log(ans);
                    return 0;
                } else { // 첫 빙산이면 탐색하기, 다 물이 아니라고 표시
                    dfs(i, j);
                    isZero = false;
                }
            }
        }
    }
    // 빙산이 하나도 탐색되지 않았다면 0 출력
    if(isZero) {
        console.log(0);
        return 0;
    }
}