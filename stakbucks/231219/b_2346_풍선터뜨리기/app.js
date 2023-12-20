const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(input) {
  const answer = [];
  // [쪽지 번호, 풍선 번호]
  let balloons = input[1].map((balloon, i) => [balloon, i + 1]);

  let i = 0; // 터뜨리는 풍선 인덱스
  while (balloons.length) {
    const [noteNum, balloonNum] = balloons[i];
    answer.push(balloonNum);

    // 풍선 터뜨리고 재정렬
    balloons = [...balloons.slice(i + 1), ...balloons.slice(0, i)];

    // 다음 풍선 (인덱스) 찾기
    i = noteNum > 0 ? goRight(noteNum) : goLeft(-noteNum);
  }
  console.log(answer.join(' '));

  function goRight(noteNum) {
    const remainder = noteNum % balloons.length;
    return remainder === 0 ? balloons.length - 1 : remainder - 1;
  }

  function goLeft(noteNum) {
    const remainder = noteNum % balloons.length;
    return remainder === 0 ? remainder : balloons.length - remainder;
  }
}

solution(input);
