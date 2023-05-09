const solution = (n) => {
  const answer = [];
  const triangle = Array.from({length: n}, () => new Array(n).fill(0));

  // 방향이 변할 때를 기준으로 나눈 세 가지 2차원 벡터 (아래, 오른쪽, 좌측 상단 대각선)
  const directions = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];

  // 시작 좌표 (y, x) 와 누산 값 currentNum (y = -1인 이유는 아래에서 1을 더하기 때문)
  let [y, x, currentNum] = [-1, 0, 1];

  // 방향이 변할 때를 기준으로 좌표를 틀어 올바른 위치에 누산값을 적용
  for (let i = 0; i < n; i++) {
    // 처음에는 n - 1만큼, 이후 n - 2, n - 3, ... 1 까지 감산시킨다.
    // 방향이 꺾이기 전, 해당 방향만큼 몇 번의 반복을 진행해야 할지를 결정하기 위함이다.
    for (let j = i; j < n; j++) {
      const [dy, dx] = directions[i % 3];
      x += dx;
      y += dy;

      triangle[y][x] = currentNum++;
    }
  }

  // 위에서부터 아래로 저장된 값들을 순차적으로 가져온다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      answer.push(triangle[i][j]);
    }
  }

  return answer;
};
