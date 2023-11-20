function solution(elements) {
  // 결과 값 중복없이 저장
  const set = new Set();

  const dp = Array.from({length: elements.length}, () => Array(elements.length).fill(0));
  dp[0] = [...elements];
  elements.forEach((element) => {
    set.add(element);
  });

  for (let i = 1; i < elements.length; i++) {
    // 원형 형태로 만들기
    const circular = [...elements].concat(elements.slice(0, i));

    for (let j = 0; j < elements.length; j++) {
      dp[i][j] = dp[i - 1][j] + circular[j + i];
      set.add(dp[i][j]);
    }
  }
  return set.size;
}

// 7,9,1,1,4
// 16, 10, 2, 5, 11
// 17, 11, 6, 12, 13
// ...
