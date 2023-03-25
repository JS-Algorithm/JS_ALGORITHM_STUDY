function solution(maps) {
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    
    let map1 = maps.map((item)=>item.split(''));
    let map2 = maps.map((item)=>item.split(''));
    let start, lever, exit;
    
    for(let i=0 ; i<map1.length; i++){
        for(let j=0 ; j<map1[i].length; j++){
            if(map1[i][j]==='S') start = [i, j];
            else if(map1[i][j]==='E') exit = [i, j];
            else if(map1[i][j]==='L') lever = [i, j];
        }
    }
    
    const bfs = (start, end, map) => {
        let answer=0;
        let q = [];
        q.push(start);
        map[start[0]][start[1]] = 0;
    
        while(q.length){
            let [cx, cy] = q.shift();
            // [cx, cy] === end라고 하면 감지를 못 함...
            if(cx === end[0] && cy === end[1]) {
                // 시작점 빼줘야 함.
                return map[cx][cy];
            }
            for(let i=0 ; i<4 ; i++){
                let [nx, ny] = [cx+dx[i], cy+dy[i]];
                // 지나간 자리에 거리 업데이트
                if(nx<0 || nx>=map.length || ny<0 || ny>=map[0].length) continue;
                else if(map[nx][ny]!='X' && typeof map[nx][ny] != 'number'){
                    q.push([nx, ny]);
                    map[nx][ny] = map[cx][cy]+1;
                }
            }
            answer++;
        }
        return -1;
    }

    const start_to_lever = bfs(start, lever, map1);
    const lever_to_exit = bfs(lever, exit, map2);
    
    console.log(start_to_lever, lever_to_exit)
    
    if(start_to_lever===-1 || lever_to_exit===-1) return -1;
    else return start_to_lever + lever_to_exit;
}
