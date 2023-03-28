function rotate(key) {
  const n = key.length;
  const newKey = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newKey[j][n - i - 1] = key[i][j];
    }
  }

  return newKey;
}

function insertKey(board, key, row, col) {
  const newBoard = board.map(row => row.slice());

  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key.length; j++) {
      newBoard[row + i][col + j] += key[i][j];
    }
  }

  return newBoard;
}

function solution(key, lock) {
  const boardSize = lock.length * 3 - 2;
  // 자물쇠 영역 넓히기 : 상하좌우로
  const expandedLock = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
  const [lockStart, lockEnd] = [lock.length - 1, 2*lock.length - 1]

  // 확장된 영역의 중간에 자물쇠 놓기
  for (let i = lockStart; i < lockEnd; i++) {
    for (let j = lockStart; j < lockEnd; j++) {
      expandedLock[i][j] = lock[i - lockStart][j - lockStart];
    }
  }

  for (let rotateCount = 0; rotateCount < 4; rotateCount++) {
    // 키를 90도씩 rotation 시켜가기
    key = rotate(key);
    
    // rotation 된 키를 옮겨가며 자물쇠에 맞는지 확인하기
    for (let i = 0; i < boardSize - key.length + 1; i++) {
      for (let j = 0; j < boardSize - key.length + 1; j++) {
        let flag = true;
        const board = insertKey(expandedLock, key, i, j);
        
        const [boardStart, boardEnd] = [lock.length - 1, 2*lock.length - 1]

        for (let i = boardStart; i < boardEnd; i++) {
          for (let j = boardStart; j < boardEnd; j++) {
            if (board[i][j] !== 1) {
              flag = false;
              break;
            }
          }
        }

        if(flag) return true;
      }
    }
  }
  
  return false;
}