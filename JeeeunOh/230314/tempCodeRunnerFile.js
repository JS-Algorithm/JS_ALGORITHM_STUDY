et dx = [-1, 1, 0, 0];
// let dy = [0, 0, -1, 1];

// let visited;

// function dfs(x, y){
//     let q = [];
//     q.push({x, y});
//     visited[x][y]=0;

//     while(q.length){

//     }
// }

// let ans=0;

// while(true){
//     let newMap = map;
//     ans++;
//     for(let i=0 ; i<H ; i++){
//         for(let j=0 ; j<W ; j++){
//             // 물 주위 빙산 높이 깎기
//             if(map[i][j]===0){
//                 for(let k=0 ; k<4; k++){
//                     let nx = i+dx[k];
//                     let ny = j+dy[k];
//                     if(nx>=0 && nx<H && ny>=0 && ny<W && map[nx][ny]>0){
//                         newMap[nx][ny]--;
//                     }
//                 }
//             }
//         }
//     }
//     // 빙산 업데이트
//     map = newMap;
//     // 빙산이 쪼개졌는지 테스트
//     visited = map;
//     let flag = false;

//     for(let i=0 ; i<H ; i++){
//         for(let j=0 ; j<W ; j++){
//             // 빙산이 있을 때
//             if(visited[i][j]!=0){
//                 // 이전에 다른 빙산 탐색한 적 있으면 break;
//                 if(flag) break;
//                 // 첫 빙산이면 탐색하기, 탐색 flag 표시하기
//                 else {
//                     dfs(i, j);
//                     flag = true;
//                 }
//             }
//         }
//     }
    
//     // visited가 다 0이면 break;
//     if(flag===false) {
//         console.log(0);
//         return 0;
//     }
// }

// console.log(ans);