const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 메모리 초과 풀이

function solution(input) {
  const N = Number(input[0]);
  const map = input.splice(1).map((v) => v.split(' ').map(Number));

  const getMax = () => {
    const temp = Array.from({length: 2}, () => Array(3).fill(0));
    temp[0] = [...map[0]];
    for (let i = 1; i < N; i++) {
      temp[i % 2][0] = map[i][0] + Math.max(temp[Math.abs((i % 2) - 1)][0], temp[Math.abs((i % 2) - 1)][1]);
      temp[i % 2][1] = map[i][1] + Math.max(temp[Math.abs((i % 2) - 1)][0], temp[Math.abs((i % 2) - 1)][1], temp[Math.abs((i % 2) - 1)][2]);
      temp[i % 2][2] = map[i][2] + Math.max(temp[Math.abs((i % 2) - 1)][1], temp[Math.abs((i % 2) - 1)][2]);
    }
    return N % 2 ? Math.max(...temp[0]) : Math.max(...temp[1]);
  };

  const getMin = () => {
    const temp = Array.from({length: 2}, () => Array(3).fill(0));
    temp[0] = [...map[0]];
    for (let i = 1; i < N; i++) {
      temp[i % 2][0] = map[i][0] + Math.min(temp[Math.abs((i % 2) - 1)][0], temp[Math.abs((i % 2) - 1)][1]);
      temp[i % 2][1] = map[i][1] + Math.min(temp[Math.abs((i % 2) - 1)][0], temp[Math.abs((i % 2) - 1)][1], temp[Math.abs((i % 2) - 1)][2]);
      temp[i % 2][2] = map[i][2] + Math.min(temp[Math.abs((i % 2) - 1)][1], temp[Math.abs((i % 2) - 1)][2]);
    }
    return N % 2 ? Math.min(...temp[0]) : Math.min(...temp[1]);
  };
  console.log(getMax(), getMin());
}

solution(input);
