/* 경우의 수 3가지

1. 왼쪽 대각선 밑으로 이동하기 : tri[row+1][col]
2. 오른쪽 옆으로 이동 : tri[row][col+1]    
3. 왼쪽 대각선 위로 이동하기 : tri[row-1][col-1]

1,2,3 을 각각 수행하다가 이동했을 때 정해진 범위 벗어나거나 차있으면 다음 단계로 이동
*/

function solution(n) {
  let tri = Array.from({length: n}, (_, idx) => Array(idx + 1).fill(0));
  let goal = tri.flat().length;
  let [step, row, col] = [1, 0, 0];

  for (let num = 1; num <= goal; num++) {
    tri[row][col] = num;

    switch (
      step // 다음 자리 탐색
    ) {
      // 1. 왼쪽 대각선 밑으로 이동하기 : tri[row+1][col]
      case 1:
        if (row + 1 < n && col <= row && tri[row + 1][col] === 0) {
          row++;
        } else {
          // 이동 불가하면 step 2 이동
          step = 2;
          col++;
        }
        break;
      // 2. 오른쪽 옆으로 이동 : tri[row][col+1]
      case 2:
        if (col + 1 <= row && tri[row][col + 1] === 0) {
          col++;
        } else {
          // 이동 불가하면 step 3 이동
          step = 3;
          row--;
          col--;
        }
        break;
      // 3. 왼쪽 대각선 위로 이동하기 : tri[row-1][col-1]
      case 3:
        if (row - 1 >= 0 && tri[row - 1][col - 1] === 0) {
          row--;
          col--;
        } else {
          // 이동 불가하면 step 1 이동
          step = 1;
          row++;
        }
        break;
    }
  }

  return tri.flat();
}
