let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let k = Number(input[1]);

let start = 1;
let end = 10 ** 10;

let result = 0;
while (start <= end) { //이진탐색 시작
	let mid = parseInt((start+end) / 2); //중간점 (현재)
	let total = 0; //중간값보다 작거나 같은 데이터 개수
	for (let i = 1; i <= n ; i++) { //각 행마다 계산하도록 했음
		total += Math.min(parseInt(mid/i), n);
	}
	if (total >= k) { //mid보다 작거나 같은 데이터 개수가 k이상일때
		result = mid; //결과값 저장
		end = mid - 1;
	}
	//mid보다 작거나 같은 데이터의 개수가 k개 미만이면
	else start = mid + 1;
}
console.log(result);