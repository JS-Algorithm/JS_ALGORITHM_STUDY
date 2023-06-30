const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const [N, M, x, y, K] = input[0].split(' ').map(Number);
  const map = Array.from({length: N}, (v, i) => input[i + 1].split(' ').map(Number));
  const moves = input.at(-1).split(' ').map(Number);
  const answer = [];
  const dice = [0, 0, 0, 0, 0, 0]; //[바닥, 동, 서, 북, 남, 위]

  const dir = [[], [1, 0], [-1, 0], [0, -1], [0, 1]];

  const swap = (idx1, idx2) => {
    const temp = dice[idx1];
    dice[idx1] = dice[idx2];
    dice[idx2] = temp;
  };

  // x가 세로 방향 주의!!!
  let location = [y, x];

  for (const move of moves) {
    // 지도 밖으로 벗어나는지 부터 확인
    const [x, y] = location;
    const [dx, dy] = dir[move];
    const [nx, ny] = [x + dx, y + dy];
    if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;

    if (move === 4) {
      //남쪽 방향
      swap(0, 4);
      swap(3, 5);
      swap(3, 4);
    }
    if (move === 3) {
      //북
      swap(0, 3);
      swap(4, 5);
      swap(3, 4);
    }
    if (move === 2) {
      // 서
      swap(0, 2);
      swap(1, 5);
      swap(1, 2);
    }
    if (move === 1) {
      // 동
      swap(0, 1);
      swap(2, 5);
      swap(1, 2);
    }

    if (!map[ny][nx]) {
      map[ny][nx] = dice[0];
    } else {
      dice[0] = map[ny][nx];
      map[ny][nx] = 0;
    }
    location = [nx, ny];
    answer.push(dice[5]);
  }
  console.log(answer.join('\n'));
}
solution(input);
