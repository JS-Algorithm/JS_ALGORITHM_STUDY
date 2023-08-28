const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const balloons = input[1].split(' ').map(Number);
  const arrows = [];
  for (const height of balloons) {
    // 해당 높이의 풍선을 터뜨릴 수 있는 화살이 존재하는지 체크
    const idx = arrows.indexOf(height);
    if (idx !== -1) {
      // 존재하면 해당 화살의 높이 -1
      arrows[idx]--;
    } else {
      // 존재하지 않으면 새로운 화살 추가
      arrows.push(height - 1);
    }
  }
  console.log(arrows.length);
}
solution(input);
