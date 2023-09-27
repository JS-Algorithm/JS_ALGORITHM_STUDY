function solution(board) {
    function bfs(board, y_goal, x_goal, x_max, y_max) {
      const directions = [
        [-1, 0], //위
        [1, 0], //아래
        [0, -1], //좌
        [0, 1] //우
      ];
      const q = [];
      const vis = Array.from({ length: y_max }, () => Array(x_max).fill(-1));
      
      //시작 지점 큐에 추가, 초기 거리 0
      for (let y = 0; y < y_max; y++) {
        for (let x = 0; x < x_max; x++) {
          if (board[y][x] === 'R') {
            q.push([y, x]);
            vis[y][x] = 0;
          }
        }
      }
      
      //bfs
      while (q.length > 0) {
        const [y, x] = q.shift();
        for (const d of directions) {
          const [ny, nx] = move(d, y, x);
          if (ny >= 0 && nx >= 0 && ny < y_max && nx < x_max && vis[ny][nx] === -1) {
            q.push([ny, nx]);
            vis[ny][nx] = vis[y][x] + 1;
          }
        }
      }
  
      return vis[y_goal][x_goal]; //목표지점까지의 최단거리
    }
    
    //이동 가능한 새 위치 계산
    function move(d, y, x) {
      while (true) {
        y += d[0];
        x += d[1];
        if (x < 0 || y < 0 || x >= x_max || y >= y_max || board[y][x] === 'D') break;
      }
      return [y - d[0], x - d[1]];
    }
  
    let y_goal, x_goal;
    const x_max = board[0].length;
    const y_max = board.length;
    
    //G 좌표 검색
    for (let y = 0; y < y_max; y++) {
      for (let x = 0; x < x_max; x++) {
        if (board[y][x] === 'G') {
          y_goal = y;
          x_goal = x;
        }
      }
    }
  
    return bfs(board, y_goal, x_goal, x_max, y_max);
  }
  