function solution(land) {
    const N = land.length;
    const dp = Array.from({length: N}, () => new Array(4).fill(0));
    
    // 첫 번째 줄은 land 와 동기화 한다.
    dp[0] = land[0];

    
    // j = 4 라고 가정했을 때, 점화식
    // dp[i][j] = max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]) + land[i][j];
    for (let row = 1; row < N; row++) {
        for (let col = 0; col < 4; col ++) {
            dp[row][col] = Math.max(...dp[row - 1].filter((_, index) => index !== col)) + land[row][col];
        }
    }

    const answer = Math.max(...dp[N - 1]);
    return answer;
}