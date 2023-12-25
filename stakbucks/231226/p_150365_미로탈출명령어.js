const MOVES = [
  {
    direction: 'd',
    move: [1, 0],
  },
  {
    direction: 'l',
    move: [0, -1],
  },
  {
    direction: 'r',
    move: [0, 1],
  },
  {
    direction: 'u',
    move: [-1, 0],
  },
];

function solution(n, m, x, y, r, c, k) {
  let [currentX, currentY] = [x, y];

  let answer = '';

  const minDist = Math.abs(currentX - r) + Math.abs(currentY - c); // 탈출 위치까지 움직여야 하는 최소 거리

  if ((k - minDist) % 2 || k < minDist) return 'impossible';

  while (1) {
    const minDist = Math.abs(currentX - r) + Math.abs(currentY - c);
    if (minDist === k) break;

    for (const {direction, move} of MOVES) {
      const [dx, dy] = move;
      const [nx, ny] = [dx + currentX, dy + currentY];
      if (nx > 0 && nx <= n && ny > 0 && ny <= m) {
        answer += direction;
        [currentX, currentY] = [nx, ny];
        break;
      }
    }
    k--;
  }

  if (currentX < r) answer += 'd'.repeat(r - currentX);
  if (currentY > c) answer += 'l'.repeat(currentY - c);
  if (currentY < c) answer += 'r'.repeat(c - currentY);
  if (currentX > r) answer += 'u'.repeat(currentX - r);

  return answer;
}

// [d, d, u, l, l]

// 반드시 d l r u 순서로 탐색해야 알파벳 순서

// n:3 m:4 출발:[2,3] 탈출: [3,1]
// 좌우 차이 구하기: -2 (l)
// 상하 차이 구하기: +1 (d)

// -> k(=5)를 적절히 분배해서 l이 r보다 2 더 많고, d가 u보다 1 더 많은 결과를 리턴해야한다!
// d 1개, l 2개 반드시 필요 d l l
// du, lr

// ddull, dlllr

// udd, dud, ll

// d lllr

// 모든 경우의 수 구하고 정렬 후, 미로 밖으로 벗어나는 경우를 앞에서 부터 확인한다

// [1,1] -> [2,2]
// +1: r
// +1: d
// dr 반드시 필요

// [1,2]->[3,3] k: 4
// +2: dd
// +1: r
// ddr -> impossible!
