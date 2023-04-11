// 0. 순회를 시작하기 전, 특정 블럭을 없애기 위해 체크하는 배열 (N X M) 을 생성한다.
// 1. 이후 모든 배열을 순회하면서 2x2 로 모인 블럭이 있는지를 체크한다.
// 2. 만약 2 x 2 형태로 모인 블럭이 있다면 체크 (true) 하고, 이후 이를 참고하여 제거한다.
// 3. 블럭을 제거한 후에, 배열을 순회하며 빈 공간을 모두 제거하는 연산을 수행한다.

function solution(m, n, board) {
  const matrix = board.map((row) => row.split(''));

  // 해당 반복에 블럭이 부셔졌는지를 판별하는 변수 doesBlockBreak;
  let isBlockBroken;
  let answer = 0;
  // 블럭이 부셔지지 않을 때까지 반복 진행해야 함.
  while (true) {
    isBlockBroken = false;
    // 특정 위치에 블럭이 부셔졌는지를 체크하는 2차원 배열 checked 생성
    const checked = Array.from({length: m}, () => new Array(n).fill(false));

    // 2 x 2 범주를 탐색하기에 끝에서부터 1줄은 탐색하지 않아야 한다.
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (matrix[i][j] && checkCanBreakBlock(i, j)) {
          isBlockBroken = true;
          checked[i][j] = true;
          checked[i + 1][j] = true;
          checked[i][j + 1] = true;
          checked[i + 1][j + 1] = true;
        }
      }
    }

    // 이후 블럭이 부셔지지 않았다면 반복을 종료하고 마무리 해야 한다.
    if (!isBlockBroken) break;

    // checked 배열을 순회하며 부셔야 하는 블럭을 체크하여 부신다.
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (checked[i][j]) {
          matrix[i][j] = '';
          answer += 1;
        }
      }
    }

    // 이후 기존 배열을 순회하면서, 특정 블럭이 비었다면 위에 블럭이 있는지 체크한다.
    // 역으로 아래서부터 위로 배열을 순회해야 한다. 위를 확인해서 블럭을 가져와야 하기 때문.
    for (let i = m - 1; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        // 현재 위치에 블럭이 없다면, 위를 확인해서 블럭이 존재
        if (!matrix[i][j]) {
          for (let k = i - 1; k >= 0; k--) {
            if (matrix[k][j]) {
              matrix[i][j] = matrix[k][j];
              matrix[k][j] = '';
              break;
            }
          }
        }
      }
    }
  }
  return answer;

  function checkCanBreakBlock(y, x) {
    const blockLocSet = new Set([
      matrix[y][x],
      matrix[y + 1][x],
      matrix[y][x + 1],
      matrix[y + 1][x + 1],
    ]);
    // 네 블럭 모두 같은 값을 가지고 있다면 1이어야 한다.
    return blockLocSet.size === 1;
  }
}

solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']);
