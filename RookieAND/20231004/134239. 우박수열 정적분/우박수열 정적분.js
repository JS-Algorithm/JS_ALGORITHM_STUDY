// 1. 우박수열을 구한 후 나온 결과 값을 배열에 나열한다.
// 2. 정적분이 필요한 구간을 선별한 후, 1 간격으로 생성된 사다리꼴의 넓이를 구한다. (공식 : (상변 + 하변) * 1 * 1 / 2)

// a ~ b 사이의 정적분 영역을 구하기 위한 공식 => (a + 2 * x1 + 2 * x2 + ... + b) * 1 / 2;
// 즉, 기준점이 되는 양 끝의 선분을 제외한 나머지를 2배씩 곱하여 더하고, 2로 나눈 값이 전체 영역이다.

function solution(k, ranges) {
  const points = [k];

  // 우박수열을 구하기 위한 함수 dfs
  const dfs = (current, count) => {
    if (current === 1) return count;
    const next = current % 2 === 0 ? Math.floor(current / 2) : current * 3 + 1;
    points.push(next);
    return dfs(next, count + 1);
  };

  const n = dfs(k, 0);

  // 가장 마지막에는 1이 들어가야 하기에 추가해준다.
  points.push(1);

  const result = ranges.map(([a, b]) => {
    if (a > n + b) return -1;
    if (a === n + b) return 0;
    
    // a ~ b 사이의 정적분 영역을 구하기 위한 공식 적용
    const rangedArea =
      (points.slice(a, n + b + 1).reduce((acc, cur) => acc + cur * 2, 0) -
        points[a] -
        points[n + b]) /
      2;

    return rangedArea;
  });

  return result;
}