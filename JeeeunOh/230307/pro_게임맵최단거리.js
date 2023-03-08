function solution(maps) {
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let [N, M] = [maps.length, maps[0].length];
    let q = [];
    // x좌표 , y좌표, 이동거리
    q.push([0, 0, 1]);
    
    let ans = new Array(N+1).fill(-1).map(() => Array(M+1).fill(-1));
    // (0,0)에서 움직인 거리 1
    ans[0][0]=1;
    // 지나간 자리는 벽(0) 세우기
    maps[0][0]=0;
    
    while(q.length){
        let cx = q[0][0];
        let cy = q[0][1];
        q.shift();
        
        if(cx == N-1 && cy == M-1){
            break;
        }
        
        for(let i=0 ; i<4 ; i++){
            let nx = cx+dx[i];
            let ny = cy+dy[i];
            if(nx>=0 && nx < N && ny>=0 && ny<M && maps[nx][ny]!=0){
                q.push([nx, ny]);
                ans[nx][ny] = ans[cx][cy]+1;
                maps[nx][ny]=0;
            }
        }
    }
    
    return ans[N-1][M-1];
}