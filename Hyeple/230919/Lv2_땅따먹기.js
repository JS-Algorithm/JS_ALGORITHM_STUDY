function solution(land) {
    const N = land.length;
    const dp = new Array(N).fill(0).map(() => new Array(4).fill(0));
    
    //1행 초기값
    for (let i = 0; i < 4; i++) {
        dp[0][i] = land[0][i];
    }

    //2행 dp
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < 4; j++) {
            dp[i][j] = land[i][j] + Math.max(dp[i - 1][(j + 1) % 4], dp[i - 1][(j + 2) % 4], dp[i - 1][(j + 3) % 4]);
        }
    }
    
    return Math.max(...dp[N - 1]);
}