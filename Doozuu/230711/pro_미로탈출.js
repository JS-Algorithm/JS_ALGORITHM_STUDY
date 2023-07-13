function solution(maps) {
  let start = []; // 스타트 위치
  let lever = []; // 레버 위치

  /*  1) start-lever, lever-end 두번을 나눠 최단 
        거리를 구하기 위해 두개의 map을 생성한다.  */
  const maps2 = maps.map((item) => item.split(''));
  const maps3 = maps.map((item) => item.split(''));

  // 2) 반복문을 통해 시작, 레버 위치를 찾는다.
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === 'S') start = [i, j];
      else if (maps[i][j] === 'L') lever = [i, j];
    }
  }

  // 3)  start-lever 최단거리 시간
  const a = target(start, [...maps2], 'L');
  // 4) lever-end 최단거리 시간
  const b = target(lever, [...maps3], 'E');

  // 5) 둘중에 하나라도 거쳐가지 못한다면 -1를 반환한다.
  if (a === -1 || b === -1) return -1;

  // 6) 거쳐간다면 최단거리 합을 반환한다.
  return a + b;
}

// 7) 최단거리 구하는 함수
function target(start, arr, target) {
  let time = 0; // 걸리는 시간
  const dx = [-1, 1, 0, 0]; // 상하좌우 행열 좌표
  const dy = [0, 0, -1, 1];
  const q = [start];
  const n = arr.length; // 좌표 값의 범위를 제한하는 n, m
  const m = arr[0].length;
  arr[start[0]][start[1]] = 'X'; // 시작 위치를 막기

  // 8) 너비탐색(BFS)
  while (q.length > 0) {
    // 9) q의 길이가 변하면 안되기 때문에 변수로 선언한다.
    // 한 사이클(이동가능 좌표들)의 횟수가 push로 변하기 때문에 값 고정
    let size = q.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = q.shift();

      // 10) 상하좌우 반복
      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        // 11) 좌표 값 범위에 있으면서 벽(X)이 아니라면
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] !== 'X') {
          // 12) target이랑 만나게 되면 걸리는 시간을 반환한다.
          if (arr[nx][ny] === target) {
            return time + 1;
          }

          // 13) 현재 좌표를 q에 넣고 다시 갈 수 없게 벽으로 막는다.
          q.push([nx, ny]);
          arr[nx][ny] = 'X';
        }
      }
    }
    // 14) 한 사이클이 끝나면 1초 증가
    time++;
  }
  // 15) target을 만나지 못한다면 -1 반환
  return -1;
}
