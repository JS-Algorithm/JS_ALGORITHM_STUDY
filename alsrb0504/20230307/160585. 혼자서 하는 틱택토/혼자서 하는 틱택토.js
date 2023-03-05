function solution(board) {
  let firCnt = 0;
  let secCnt = 0;

  // O | X 개수 카운트
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "O") firCnt++;
      else if (board[i][j] === "X") secCnt++;
    }
  }

  // 종료 조건 1 : 공수 개수 이상
  if (firCnt - secCnt < 0 || firCnt - secCnt > 1) return 0;

  // 성공 결과 배열 : 0~2 : 가로, 3~5 : 세로, 6~7: 대각선
  const results = new Array(8).fill(".");

  for (let i = 0; i < 3; i++) {
    // 가로 성공 확인
    if (
      board[i][0] !== "." &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    ) {
      results[i] = board[i][0];
    }

    // 세로 성공 확인
    if (
      board[0][i] !== "." &&
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i]
    ) {
      results[i + 3] = board[0][i];
    }
  }

  // 대각선 성공 확인
  if (
    board[1][1] !== "." &&
    board[1][1] === board[0][0] &&
    board[1][1] === board[2][2]
  ) {
    results[6] = board[1][1];
  }

  if (
    board[1][1] !== "." &&
    board[1][1] === board[0][2] &&
    board[1][1] === board[2][0]
  ) {
    results[7] = board[1][1];
  }

  // 결과 확인
  // 1. 가로 2줄 이상 성공 시, => 실패
  let successCnt = 0;
  for (let i = 0; i <= 2; i++) {
    if (results[i] !== ".") successCnt++;
  }

  if (successCnt > 1) return 0;

  // 2. 세로 2줄 이상 성공 시, => 실패
  successCnt = 0;
  for (let i = 0; i <= 2; i++) {
    if (results[i + 3] !== ".") successCnt++;
  }

  if (successCnt > 1) return 0;

  // 3. 선공이 이겼는데, 후공을 더 진행한 경우 => 실패
  // 4. 후공이 이겼는데, 선공을 더 진행한 경우 => 실패
  for (let i = 0; i < 8; i++) {
    if (results[i] === "O" && firCnt === secCnt) return 0;
    if (results[i] === "X" && firCnt > secCnt) return 0;
  }

  return 1;
}

const board = ["OOO", "XX.", "X.."]; // answer : 0

console.log(solution(board));
