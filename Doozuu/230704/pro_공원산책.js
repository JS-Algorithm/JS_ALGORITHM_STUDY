function solution(park, routes) {
  let start = [0, 0];
  let width = park[0].length;
  let height = park.length;
  // 시작 지점 찾기
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes('S')) {
      start = [i, park[i].indexOf('S')];
      break;
    }
  }
  let x = start[0];
  let y = start[1];

  // 장애물 체크, 범위 안넘는지 체크
  function check(x, y) {
    if (x < 0 || y < 0 || x > width - 1 || y > height - 1 || !park[x][y] || park[x][y] === 'X') {
      return false;
    } else {
      return true;
    }
  }

  // 이동하기
  for (let i = 0; i < routes.length; i++) {
    let [dir, dis] = routes[i].split(' ');
    dis = Number(dis);
    if (dir === 'E') {
      while (dis && check(x, y)) {
        y++;
        dis--;
      }
    } else if (dir === 'W') {
      while (dis && check(x, y)) {
        y--;
        dis--;
      }
    } else if (dir === 'S') {
      while (dis && check(x, y)) {
        x++;
        dis--;
      }
    } else {
      while (dis && check(x, y)) {
        x--;
        dis--;
      }
    }
    if (x >= 0 && y >= 0 && check(x, y) && dis === 0) start = [x, y];
    x = start[0];
    y = start[1];
  }

  return start;
}
