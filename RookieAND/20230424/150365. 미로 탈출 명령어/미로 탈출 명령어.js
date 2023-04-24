function solution(n, m, x, y, r, c, k) {
  // 현재 시작과 끝 좌표 간의 최소 거리가 k 보다 작은지, 혹은 k와 같은 홀수 / 짝수인지를 판별한다.
  // 홀수와 짝수를 판별하는 이유는 왔다가 돌아오면서 경로를 더 늘리는 방식이 통하지 않기 때문이다.
  let shortestDistance = Math.abs(x - r) + Math.abs(y - c);
  if (k - shortestDistance < 0 || (k - shortestDistance) % 2 != 0)
    return 'impossible';

  // 사전 순으로 정렬해야 최적의 해를 구할 수 있기 때문에, d - l - r - u 순으로 나열한다.
  let direction = [
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r'],
    [-1, 0, 'u'],
  ];

  // answer의 초기 값은 사전 순에서 제일 뒤떨어진 z를 k만큼 반복시켜 넣는다.
  let answer = 'z'.repeat(k);

  // L : 현재까지 이동한 경로의 길이,
  // y, x : 좌표 값
  // sum : 현재까지 입력된 명령어
  // dist : 이동한 거리 + 남은 최소 거리의 합 (최소 이동 거리)
  function dfs(L, py, px, sum, dist) {
    // k 보다 더 이동할 수 없으므로 재귀를 종료한다.
    if (L > k) return;
    // 최소 이동 거리가 k 보다 더 크면 안되므로 재귀를 종료한다.
    if (dist > k) return;

    // 명령어의 길이가 k 면서 도착 지점에 도달했을 경우 answer를 갱신한다.
    if (L === k && py === r && px === c) {
      if (answer > sum) {
        answer = sum;
        return;
      }
    }

    // 이미 답이 나왔을 경우 사전 순으로 탐색을 했으므로 추가적인 탐색이 필요 없다.
    if (answer !== 'z'.repeat(k)) return;

    for (const [dy, dx, direct] of direction) {
      const [ny, nx] = [py + dy, px + dx];
      // 탐색 범주가 유효한 영역 내에 있다면 다음 재귀를 시작한다.
      if (ny <= n && ny > 0 && nx <= m && nx > 0) {
        dfs(
          L + 1,
          ny,
          nx,
          sum + direct,
          Math.abs(ny - r) + Math.abs(nx - c) + L + 1,
        );
      }
    }
  }
  dfs(0, x, y, '', k);

  if (answer === 'z'.repeat(k)) return 'impossible';

  return answer;
}
