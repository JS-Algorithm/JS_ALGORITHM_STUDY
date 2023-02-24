const [_, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trimEnd()
	.split("\n");

let answer = [];
for (let caseNum = 0; caseNum < input.length; caseNum += 3) {
	answer.push(process(caseNum));
}
console.log(answer.join("\n"));

function process(caseNum) {
	// 각 규칙에 따라 command, N, arr 를 파싱하여 저장함.
	const commands = input[caseNum].trimEnd().split("");
	const N = Number(input[caseNum + 1]);
	// 배열 형태를 가진 문자열을 분리하고, 파싱하여 숫자가 담긴 배열로 재조합.
	const arrStr = input[caseNum + 2].trimEnd();
	const arr = arrStr
		.slice(1, arrStr.length - 1)
		.split(",")
		.map(Number);

	// 모든 배열을 R 연산을 만날 때마다 뒤집어주는 것은 비효율적임.
	// 따라서 현재 배열이 뒤집힌 상태인지를 나타내는 isReversed flag 변수로 체크.
	// 배열의 남은 부분을 체크하기 위해 좌측과 우측에서 남은 배열의 index를 저장
	let [isReversed, left, right] = [false, 0, N - 1];

	for (const command of commands) {
		// R 연산에 대해서는 현재 배열이 뒤집혔는지에 대한 flag 만 전환
		if (command === "R") {
			isReversed = !isReversed;
			continue;
		}
		// D 연산에 대해서는 더 이상 요소를 삭제할 수 있는지를 체크해야 함.
		if (left > right) return "error";

		// 만약 뒤집힌 상태라면 가장 앞의 배열을, 그렇지 않다면 뒤의 배열을 삭제.
		!isReversed ? left++ : right--;
	}
	const result = arr.slice(left, right + 1);

	return `[${isReversed ? result.reverse().join(",") : result.join(",")}]`;
}
