const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : '/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230627/input.txt';

const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((item) => item.split(' ').map(Number));
let visited = Array.from({length: N}, (_) => Array.from({length: M}, (_) => false));

let maxSum = 0;
let d = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
];

const dfs = (x, y, cnt, sum) => {
    if (cnt === 4) {
        maxSum = Math.max(sum, maxSum);
        return;
    }
    for (const [dx, dy] of d) {
        let [nx, ny] = [x + dx, y + dy];
        if (nx < 0 || nx >= N || ny < 0 || ny >= M || visited[nx][ny]) continue;
        // ㅗ 모양일때만 예외처리 : 다음 위치로 이동하면 안됨.
        if (cnt === 2) {
            // 3개 칸을 가로로 그어준 후, 중간 위치에서 dfs 다시 돌리면 -> 위 or 아래로 밖에 못 만듦. -> ㅗ, ㅜ
            // 3개 칸을 세로로 그으면 -> ㅓ, ㅏ도 만들 수 있음.
            visited[nx][ny] = true;
            dfs(x, y, cnt + 1, sum + arr[nx][ny]);
            visited[nx][ny] = false;
        }
        visited[nx][ny] = true;
        dfs(nx, ny, cnt + 1, sum + arr[nx][ny]);
        visited[nx][ny] = false;
    }
};

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        visited[i][j] = true;
        dfs(i, j, 1, arr[i][j]);
        visited[i][j] = false;
    }
}

console.log(maxSum);
