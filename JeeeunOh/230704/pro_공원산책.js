function solution(park, routes) {
  var answer = [];
  let dir = {E: [0, 1], W: [0, -1], N: [-1, 0], S: [1, 0]};

  for (let i = 0; i < park.length; i++) {
    // 시작점 찾기
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === 'S') {
        answer = [i, j];
        break;
      }
    }
  }

  const isPossible = (x, y, st, cnt) => {
    while (cnt--) {
      x += dir[st][0];
      y += dir[st][1];
      if (x < 0 || x >= park.length || y < 0 || y >= park[0].length)
        // 범위 벗어나지 않는지 체킹
        return false;
      if (park[x][y] === 'X')
        // 중간에 장애물이 없는지 체킹
        return false;
    }
    return true;
  };

  routes.forEach((route) => {
    let [st, cnt] = route.split(' ');
    if (isPossible(answer[0], answer[1], st, cnt)) {
      // 도달할 수 있는 점일 때 이동
      answer = [answer[0] + cnt * dir[st][0], answer[1] + cnt * dir[st][1]];
    }
  });

  return answer;
}
