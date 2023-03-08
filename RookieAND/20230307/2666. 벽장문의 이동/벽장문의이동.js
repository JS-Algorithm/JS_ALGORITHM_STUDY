/**
 * 풀이 실패 : 답안 참조
 * DFS 탐색으로 3차원 배열을 순회하여 문제를 풀이하였습니다. 열어야 하는 옷장의 순서에 따라서 1 ~ N 개의 옷장 중 열린 옷장 (두 곳) 에 대한 모든 경우의 수를 순회하였습니다.
 * 이후 좌측, 우측 옷장을 움직였을 때를 나누어 재귀적으로 총 옷장을 움직인 횟수를 누적시켜 합산하였습니다.
 */
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trimEnd()
  .split("\n");

const N = Number(input[0]);
const [leftOpen, rightOpen] = input[1].split(" ").map(Number);
const M = Number(input[2]);
const orders = input.slice(3).map(Number);

// 더 가까운 옷장의 문을 이동시켜서 열어야 하는 것이 맞음.
// 하지만 거리가 같은 경우에는 그 이후의 상황을 고려해야 하기에
// 모든 케이스를 고려해서 DP를 진행시키고 최소값을 도출하는 게 맞다.

// dp[idx][a][b] : idx 번째 순서에서 a, b가 열렸을 때 벽장을 사용하기 위한 최소한의 이동 횟수
const dp = Array.from({length: M}, () => Array.from({length: N + 1}, () => new Array(N + 1).fill(-1)))

const dfs = (orderIdx, leftOpen, rightOpen) => {
    // 이미 모든 벽장을 사용한 경우 추가적인 이동이 없으므로 0을 return 시킴
    if (orderIdx === M) return 0;

    // 만약 이미 현재 조건에 대한 값이 도출되었다면 캐싱된 값을 return 시킴
    if (dp[orderIdx][leftOpen][rightOpen] !== -1) {
        return dp[orderIdx][leftOpen][rightOpen]
    }; 

    // 열어야 하는 옷장을 기준으로 현재 열린 옷장이 얼마나 멀리 떨어져 있는지를 체크
    const [leftDist, rightDist] = [leftOpen, rightOpen].map((idx) => Math.abs(idx - orders[orderIdx]));

    // 좌측, 우측 케이스에 대한 경우를 재귀적으로 탐색한다 (열어야 하는 모든 옷장을 전부 열 때까지)
    const leftOpenCnt = dfs(orderIdx + 1, orders[orderIdx], rightOpen) + leftDist;
    const rightOpenCnt = dfs(orderIdx + 1, leftOpen, orders[orderIdx]) + rightDist;

    // 좌측, 우측 케이스에 대한 결과 중 값이 더 적은 것을 택하여 return 한다.
    dp[orderIdx][leftOpen][rightOpen] = Math.min(leftOpenCnt, rightOpenCnt);

    return dp[orderIdx][leftOpen][rightOpen];
}

console.log(dfs(0, leftOpen, rightOpen))