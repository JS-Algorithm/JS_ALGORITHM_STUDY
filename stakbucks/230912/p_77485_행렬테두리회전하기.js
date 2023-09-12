function solution(rows, columns, queries) {
  let num = 1;
  const board = Array.from({length: rows}, () => Array.from({length: columns}, () => num++));
  const answer = [];
  for (const query of queries) {
    const [x1, y1, x2, y2] = query.map((v) => v - 1);
    answer.push(rotate(x1, y1, x2, y2));
  }
  function rotate(x1, y1, x2, y2) {
    let min = Infinity;
    const temp = board.map((v) => [...v]);
    // 위쪽 가로줄
    for (let i = y1 + 1; i <= y2; i++) {
      board[x1][i] = temp[x1][i - 1];
      min = Math.min(min, board[x1][i]);
    }
    // 오른쪽 세로줄
    for (let i = x1 + 1; i <= x2; i++) {
      board[i][y2] = temp[y2][i - 1];
      min = Math.min(min, board[i][y2]);
    }
    // 아래 가로줄
    for (let i = y2 - 1; i >= y1; i--) {
      board[x2][i] = temp[x2][i + 1];
      min = Math.min(min, board[x2][i]);
    }
    // 왼쪽 세로줄
    for (let i = x2 - 1; i >= x1; i--) {
      board[i][y1] = temp[i + 1][y1];
      min = Math.min(min, board[i][y1]);
    }
    console.log(temp, board);
    return min;
  }
  return answer;
}

// (x1,y1), (x1,y1+1), (x1,y1+2)
// (x1+1,y1)
