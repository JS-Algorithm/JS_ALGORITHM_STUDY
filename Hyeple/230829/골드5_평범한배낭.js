let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let [N, K] = input[0].split(' ').map(Number);
let items = [];

for (let i = 1; i <= N; i++) {
    let [W, V] = input[i].split(' ').map(Number);
    items.push({ weight: W, value: V });
}

//배낭 문제
let dp = new Array(K + 1).fill(0); // dp[i] = i 무게의 배낭에서 얻을 수 있는 최대 가치

for (let i = 0; i < N; i++) {
    for (let j = K; j >= items[i].weight; j--) {
        dp[j] = Math.max(dp[j], dp[j - items[i].weight] + items[i].value);
    }
}

console.log(dp[K]);