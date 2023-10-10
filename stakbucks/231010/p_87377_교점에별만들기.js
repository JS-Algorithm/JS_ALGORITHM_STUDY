function solution(line) {
  const points = new Set(); // 교점들
  const xSet = new Set(); // 교점이 존재하는 x좌표들
  const ySet = new Set(); // 교점이 존재하는 y좌표들

  // 직선 두 개씩 짝지어가며 교점 구하기
  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const point = getPointIfInt(line[i], line[j]);
      if (!point) continue;

      // 좌표가 정수인 교점이 존재하면 Set에 추가
      points.add(JSON.stringify(point));
      xSet.add(point[0]);
      ySet.add(point[1]);
    }
  }

  // xSet, ySet를 정렬해서 가장 작은/큰 값을 찾는다
  const sortedXSet = [...xSet].sort((a, b) => a - b);
  const sortedYSet = [...ySet].sort((a, b) => a - b);
  const [minX, maxX] = [sortedXSet[0], sortedXSet.at(-1)];
  const [minY, maxY] = [sortedYSet[0], sortedYSet.at(-1)];

  const xLength = maxX - minX + 1; // 정답의 x축 방향 길이
  const yLength = maxY - minY + 1; // 정답의 y축 방향 길이

  const board = Array.from({length: yLength}, () => Array(xLength).fill('.'));
  const pointsArr = [...points];
  pointsArr.forEach((point) => {
    const [x, y] = JSON.parse(point);
    board[maxY - y][-minX + x] = '*';
  });

  return board.map((row) => row.join(''));

  // 좌표가 정수인 두 직선의 교점 구하기 (평행 또는 일치하면 false)
  function getPointIfInt(line1, line2) {
    const [a, b, e] = line1;
    const [c, d, f] = line2;

    // 평행하거나 일치하는 경우 (교점 존재 x)
    if (a * d - b * c === 0) return false;

    const x = (b * f - e * d) / (a * d - b * c);
    const y = (e * c - a * f) / (a * d - b * c);

    if (x === Math.floor(x) && y === Math.floor(y)) return [x, y];
    return false;
  }
}
