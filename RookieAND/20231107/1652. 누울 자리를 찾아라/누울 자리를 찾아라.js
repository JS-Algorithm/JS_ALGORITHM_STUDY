// 현재 위치를 기준으로 우측, 아래를 체크하는 방식으로 진행하는 것은?

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.trim());

const [N, ...matrix] = input;
let [rowLaid, colLaid] = [0, 0];


for (let i = 0; i < N; i++) {
  // 가로 줄에서 X 를 기준으로 나누고, 연속된 빈 칸이 있는 경우를 카운트
  const row = matrix[i];
  rowLaid += row.split('X').filter((col) => col.includes('..')).length;

  let emptyColumn = 0;
  for (let j = 0; j < N; j++) {
    if (matrix[j][i] === '.') emptyColumn++;
    if (matrix[j][i] === 'X' || j === N - 1) {
      // 2개 이상의 빈칸이 있을 경우 더하고, 0으로 초기화
      if (emptyColumn >= 2) colLaid++;
      emptyColumn = 0
    }
  }
}

console.log(rowLaid, colLaid);