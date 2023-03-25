// 퀸의 공격 범위는 가로, 세로, 대각선이다. 따라서 같은 열에 두 개 이상의 Queen이 존재할 수 없다.
// 따라서 1차원 배열로 board를 생성하고, 해당 행의 몇 번째 열에 Queen이 놓였는지를 저장하도록 한다.
// board[i] = j 의 의미는 i번째 줄의 1행에 Queen이 놓였다는 의미이다. (i와 j는 1 이상 N 이하이다.)
function solution(N) {
    let answer = 0;
    
    function isAttacked(board, row) {
        for(let i = 1; i < row; i++) {
          // 만약 세로 줄에 Queen이 있거나, 대각선 위치에 Queen이 있다면 공격 당할 수 있다는 의미.
          if (board[i] === board[row] || Math.abs(board[i] - board[row]) === Math.abs(i - row)) 
              return false;
        }
        return true;
    }    
    
    function dfs(board, row) {
        if (row === N) {
            answer += 1;
            return;
        }
        for (let i = 1; i <= N; i++) {
            board[row+1] = i;
            if (isAttacked(board, row + 1)) dfs(board, row + 1);
        }
    }
 
    // 1열에서 각 행마다 Queen 을 놓으면서 백트래킹을 시작.
    for (let i = 1; i <= N; i++) {
        const board = new Array(N + 1).fill(0);
        board[1] = i;
        dfs(board, 1);
    }
    
    return answer;
}