//동전 종류와 목표 금액으로 동전 조합의 경우의 수를 계산
function coinCombination(coins,amount) {
	const dp = new Array(amount + 1).fill(0);
	dp[0] = 1;
	
	for (const coin of coins) {
		for (let i = coin ; i <= amount ; i++) {
			dp[i] += dp[i - coin];
			}
		}
		return dp[amount];
}

const fs = require('fs').readFileSync('/dev/stdin');
let input = fs.toString().split('\n');

let index = 0;

const T = parseInt(input[index++]);

for (let t = 0; t < T; t++) {
    const N = parseInt(input[index++]);
    const coinValues = input[index++].split(" ").map(Number);
    const M = parseInt(input[index++]);
    
    const result = coinCombination(coinValues, M);
    console.log(result);
}