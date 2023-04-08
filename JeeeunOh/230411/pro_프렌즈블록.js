function solution(m, n, board) {
    var answer = 0;
    let d = [[0, 0], [1, 0], [0, 1], [1, 1]];
    board = board.map((item)=>item.split(''));
    let flag = true;
    
    // 현재 위치에서 2x2 블록이 완성되면 
    // 해당 블록들을 x로 바꾸는 함수
    const setBoard = (i, j, newBoard) => {
        for(let k=0 ; k<4; k++){
            let [cx, cy] = [i+d[k][0], j+d[k][1]];
            if(board[i][j]!=board[cx][cy]) break;
            if(k===3){ // 네블록이 모두 같다면
                for(let z=0 ; z<4 ; z++){
                    let [cx, cy] = [i+d[z][0], j+d[z][1]];
                    if(newBoard[cx][cy]!='x'){ // 이미 바뀐 블록 아니라면
                        flag = false;
                        newBoard[cx][cy]='x'
                        answer++;
                    }
                }
            }
        }
        return newBoard;
    }
    
    while(true){
        flag = true;
        let newBoard = board.map(row=>[...row]);
        
        for(let i=0 ; i<m-1 ; i++){ // (i, j) 기준 오른쪽옆, 대각선아래, 아래 탐색
            for(let j=0 ; j<n-1 ; j++){
                if(board[i][j]==='x') continue;
                newBoard = setBoard(i, j, newBoard);
            }
        }
        
        // 옮긴 블록 없으면 break;
        if(flag) break;
        
        let posX = -1;
        for(let j=0 ; j<n; j++){
            for(let i=m-1 ; i>=0 ; i--){ // 밑에서부터 x있으면 위에것 끌어오기
                if(newBoard[i][j] === 'x' && posX === -1){ // 첫 x 지점 알아오기
                    posX = i;
                }
                if(newBoard[i][j]!='x' && posX!=-1){ // x가 아닌데 밑에 x가 있었다면
                    newBoard[posX][j] = newBoard[i][j]; // 해당 x 위치로 옮기고
                    newBoard[i][j]='x';
                    posX--; // 다음 x 위치 한칸 위로 올리기
                }
            }
            posX = -1;
        }
        
        board = newBoard.map(row=>[...row]);
    }
    
    return answer;
}