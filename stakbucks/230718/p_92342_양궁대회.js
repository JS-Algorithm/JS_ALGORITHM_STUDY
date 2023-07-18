function solution(n, info) {
  let apeachScore = info.reduce((acc, cur, idx) => (10 - idx) * (cur > 0 ? 1 : 0) + acc, 0); // 어피치 점수
  const value = info.map((v, i) => {
    // [점수, 점수를 얻기 위해 필요한 화살 수]
    if (v) {
      // 어피치의 점수를 뺏으면서 점수를 획득하니까 점수를 두 배 얻는 것으로 계산
      return [2 * (10 - i), v + 1];
    }
    return [10 - i, 1];
  });

  let max = 0; // 최고 점수차
  let maxVisited = []; // 최고 점수차일 때의 visited 배열 기록

  const shoot = (i, used, visited, currentScore) => {
    // (i번째 화살, 그동안 사용한 화살, 맞춘 과녁, 현재 점수 차이)
    const available = i - used; // 사용 가능한 화살의 개수
    if (i > n) {
      if (currentScore > max) {
        max = currentScore;
        maxVisited = visited;
        // 화살이 남은 경우는 그냥 0점 쐈다고 가정 (테스트4의 경우)
        if (available > 0) maxVisited[10] += available - 1;
      }
      return;
    }

    for (let j = 0; j <= 10; j++) {
      if (value[j][1] <= available && !visited[j]) {
        visited[j] = value[j][1];
        shoot(i + 1, used + value[j][1], [...visited], currentScore + value[j][0]);
        visited[j] = 0;
      }
    }

    shoot(i + 1, used, [...visited], currentScore);
  };

  shoot(1, 0, Array(11).fill(0), -apeachScore);

  // 어피치를 이길 수 없는 경우
  if (!max) return [-1];
  return maxVisited;
}
