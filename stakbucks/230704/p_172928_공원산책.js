function solution(park, routes) {
  let current = [];
  park = park.map((v, i) => v.split(''));
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === 'S') {
        current = [i, j];
        break;
      }
    }
  }

  const getNextLocation = (i, j, op, n) => {
    let dir = [];
    if (op === 'N') {
      dir = [-1, 0];
    }
    if (op === 'S') {
      dir = [1, 0];
    }
    if (op === 'W') {
      dir = [0, -1];
    }
    if (op === 'E') {
      dir = [0, 1];
    }
    let canGo = true;
    let nextLocation = current;
    for (let i = 0; i < n; i++) {
      const [ni, nj] = [dir[0] + nextLocation[0], dir[1] + nextLocation[1]];
      if (ni < 0 || ni >= park.length || nj < 0 || nj >= park[0].length || park[ni][nj] === 'X') {
        canGo = false;
        break;
      }
      nextLocation = [ni, nj];
    }
    if (canGo) {
      return nextLocation;
    } else {
      return [i, j];
    }
  };

  for (const route of routes) {
    let [op, n] = route.split(' ');
    n = Number(n);
    const [i, j] = current;
    current = getNextLocation(i, j, op, n);
  }
  return current;
}
