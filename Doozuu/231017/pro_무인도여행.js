function solution(maps) {
  const newMaps = maps.map((map) => map.split(''));
  const maxRow = newMaps.length,
    maxCol = newMaps[0].length;
  const visited = Array.from(Array(maxRow), () => Array(maxCol).fill(false));
  const liveDays = [];
  const direct = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  newMaps.forEach((rows, rowIdx) => {
    rows.forEach((site, colIdx) => {
      if (site !== 'X' && !visited[rowIdx][colIdx]) {
        const willVisit = [{rowIdx, colIdx}];
        let liveDay = 0;

        while (willVisit.length !== 0) {
          const {rowIdx, colIdx} = willVisit.pop();

          if (!visited[rowIdx][colIdx]) {
            visited[rowIdx][colIdx] = true;
            liveDay += Number(newMaps[rowIdx][colIdx]);
          }

          for (let i = 0; i < 4; i++) {
            const newRowIdx = rowIdx + direct[i][0];
            const newColIdx = colIdx + direct[i][1];

            if (newRowIdx < 0 || newRowIdx >= maxRow || newColIdx < 0 || newColIdx >= maxCol) {
              continue;
            }

            if (newMaps[newRowIdx][newColIdx] === 'X') {
              continue;
            }

            if (visited[newRowIdx][newColIdx]) {
              continue;
            }

            willVisit.push({rowIdx: newRowIdx, colIdx: newColIdx});
          }
        }
        liveDays.push(liveDay);
      }
    });
  });

  const answer = liveDays.length === 0 ? [-1] : liveDays.sort((a, b) => a - b);
  return answer;
}
