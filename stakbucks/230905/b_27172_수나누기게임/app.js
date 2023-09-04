const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const N = +input[0];
  const players = input[1].split(' ').map(Number);
  const score = Array(N).fill(0);
  const cards = new Map();
  players.forEach((number, idx) => {
    cards.set(number, idx);
  });
  for (let i = 0; i < N; i++) {
    const number = players[i];
    for (let j = number * 2; j <= 1000000; j += number) {
      if (cards.has(j) === true) {
        // 배수에 해당하는 카드가 존재한다면
        score[i]++;
        score[cards.get(j)]--;
      }
    }
  }
  console.log(score.join(' '));
}

solution(input);
