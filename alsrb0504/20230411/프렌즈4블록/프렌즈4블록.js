function solution(m, n, board) {
  // m과 n을 높이와 너비를 쉽게 식별하기 위해 재선언
  const [H, W] = [m, n];
  let answer = 0;

  // 기존 board 문자열을 배열로 변환 (개별 값 변경을 위해)
  board = board.map((el) => el.split(""));
  // 현재 지울 인덱스를 표시하기 위한 배열
  const checkedBoard = Array.from({ length: H }, () =>
    new Array(W).fill(false)
  );

  // 지울 수 있는 블록이 있는 동안 반복
  while (friendsFourBlcok()) {}

  return answer;

  /** 현재 프렌즈 블록에서 블록을 지우는 함수 => return boolean */
  function friendsFourBlcok() {
    // 이번 연산에서 블록을 지울 수 있는지 여부를 체크하는 flag
    let isPossible = false;

    // 현재 칸을 기준으로 인접한 4칸이 지워질 수 있는지 체크
    for (let y = 0; y < H - 1; y++) {
      for (let x = 0; x < W - 1; x++) {
        if (board[y][x] !== ".") {
          const std = board[y][x];

          if (
            board[y][x + 1] === std &&
            board[y + 1][x] === std &&
            board[y + 1][x + 1] === std
          ) {
            isPossible = true;
            checkedBoard[y][x] = true;
            checkedBoard[y][x + 1] = true;
            checkedBoard[y + 1][x] = true;
            checkedBoard[y + 1][x + 1] = true;
          }
        }
      }
    }

    // 체크된 블록들을 제거하고 answer를 카운트
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        if (checkedBoard[y][x]) {
          answer++;
          board[y][x] = ".";
          checkedBoard[y][x] = false;
        }
      }
    }

    // y 아래에서부터 빈 칸이 있는지 있는지 확인하고
    // 빈 칸이 있을 경우 빈 칸 보다 위에 있는 칸에서 블록을 내림
    for (let x = 0; x < W; x++) {
      for (let y = H - 1; y > 0; y--) {
        if (board[y][x] === ".") {
          for (let k = y - 1; k >= 0; k--) {
            if (board[k][x] !== ".") {
              [board[y][x], board[k][x]] = [board[k][x], board[y][x]];
              break;
            }
          }
        }
      }
    }

    // 블록을 제거했다면 return true, else false.
    return isPossible;
  }
}

const [m, n] = [4, 5];
const board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];

console.log(solution(m, n, board));
