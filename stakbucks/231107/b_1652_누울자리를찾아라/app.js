const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(''));

const EMPTY = '.';
const FILLED = 'X';

function solution(input) {
  const [N] = input.shift().map((v) => Number(v));
  const answer = [0, 0];

  for (let i = 0; i < N; i++) {
    // 가로
    answer[0] += getSpotsCnt(input[i]);
    // 세로
    const column = [];
    for (let j = 0; j < N; j++) {
      column.push(input[j][i]);
    }
    answer[1] += getSpotsCnt(column);
  }

  console.log(answer[0], answer[1]);

  // 누울 수 자리 수 구하기
  function getSpotsCnt(arr) {
    let count = 0;
    for (let i = 1; i < N; i++) {
      if (arr[i] === EMPTY && arr[i - 1] === EMPTY) {
        while (arr[i] === EMPTY && i < N) {
          i++;
        }
        count++;
      }
    }
    return count;
  }
}
solution(input);
