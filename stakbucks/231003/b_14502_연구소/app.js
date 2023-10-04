const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

class Queue {
  queue = [];
  front = 0;
  rear = 0;

  enequeue(value) {
    this.queue[this.rear] = value;
    this.rear++;
  }
  dequeue() {
    const returnValue = this.queue[this.front];
    delete this.queue[this.front++];
    return returnValue;
  }
  size() {
    return this.rear - this.front;
  }
}

function solution(input) {
  let answer = 0;

  const [N, M] = input.shift();
  const virusLocs = [];
  const emptySections = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (input[i][j] === 2) {
        virusLocs.push([i, j]);
      }
      if (input[i][j] === 0) {
        emptySections.push([i, j]);
      }
    }
  }

  // 벽 3개를 가능한 위치에 모든 경우의 수를 적용해 본다
  // getWallCombinations([], [...emptySections]);
  // function getWallCombinations(temp, rest) {
  //   if (temp.length === 3) {
  //     return go(temp);
  //   }
  //   rest.forEach((v, i) => getWallCombinations([...temp, v], rest.slice(i + 1)));
  // }

  for (let i = 0; i < emptySections.length; i++) {
    for (let j = i + 1; j < emptySections.length; j++) {
      for (let k = j + 1; k < emptySections.length; k++) {
        const combinations = [emptySections[i], emptySections[j], emptySections[k]];
        // 원본 연구소 배열 복사 (2차원 배열 깊은 복사 방법 주의)
        const tempLab = JSON.parse(JSON.stringify(input));

        // 복사된 연구소에 새로 만든 벽 세우기
        for (const combination of combinations) {
          tempLab[combination[0]][combination[1]] = 1;
        }

        // BFS로 바이러스 퍼진 결과 확인
        const dirs = [
          [0, -1],
          [0, 1],
          [-1, 0],
          [1, 0],
        ];
        const queue = new Queue();
        for (const virusLoc of virusLocs) {
          queue.enequeue(virusLoc);
        }

        while (queue.size()) {
          const [x, y] = queue.dequeue();
          tempLab[x][y] = 2; // 바이러스 심어주기
          for (const [dx, dy] of dirs) {
            const [nx, ny] = [dx + x, dy + y];
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (tempLab[nx][ny] !== 0) continue;
            queue.enequeue([nx, ny]);
          }
        }

        // 안전 구역 구하기
        let count = 0;
        for (let i = 0; i < N; i++) {
          for (let j = 0; j < M; j++) {
            if (tempLab[i][j] === 0) {
              count++;
            }
          }
        }
        answer = Math.max(answer, count);
      }
    }
  }
  console.log(answer);
}
solution(input);
