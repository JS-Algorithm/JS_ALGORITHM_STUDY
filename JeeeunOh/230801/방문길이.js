let cmd = {U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0]};

function solution(dirs) {
  let cur = [5, 5];
  let set = new Set();

  dirs.split('').forEach((dir) => {
    const [dx, dy] = cmd[dir];
    let [nx, ny] = [cur[0] + dx, cur[1] + dy];

    if (nx >= 0 && nx <= 10 && ny >= 0 && ny <= 10) {
      let validString = JSON.stringify([cur, [nx, ny]].sort());
      set.add(validString);
      cur = [nx, ny];
    }
  });

  return set.size;
}
