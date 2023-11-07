const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(input) {
  const [N, K] = input.shift();
  const students = input.pop();
  const difference = [];

  for (let i = 1; i < students.length; i++) {
    difference.push(students[i] - students[i - 1]);
  }

  difference.sort((a, b) => a - b);
  console.log(difference.slice(0, N - K).reduce((acc, cur) => acc + cur, 0));
  return;
}
solution(input);
