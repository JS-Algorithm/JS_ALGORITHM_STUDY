const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trimEnd()
	.split("\n");

const [N, P] = input[0].split(" ").map(Number);

// N 개의 줄에 대하여 현재 눌린 프렛의 정보를 담기 위한 2차원 배열 생성
const currentPlay = Array.from(Array(N + 1), () => []);
let answer = 0;

for (let idx = 1; idx <= N; idx++) {
	const [lineNum, pretNum] = input[idx].split(" ").map(Number);
	const curPushLine = currentPlay[lineNum];

	// 1. 해당 줄에 눌린 프렛이 없거나, 줄에 늘린 모든 프렛보다 더 높은 프렛을 눌러야 하는 경우.
	if (!curPushLine.length || curPushLine.at(-1) < pretNum) {
		curPushLine.push(pretNum);
		answer += 1;
	}

	// 3. 해당 줄에 늘린 프렛 중 가장 높은 프렛보다 더 낮거나 같은 프렛을 눌러야 하는 경우
	else if (curPushLine.at(-1) >= pretNum) {
		// 현재 눌러야 하는 프렛이 가장 높은 음이 될 때까지 손가락을 떼야 한다면 진행.
		while (curPushLine.at(-1) > pretNum && curPushLine.length) {
			answer += 1;
			curPushLine.pop();
		}
		// 이후 눌러야 하는 프렛을 새롭게 추가할 수 있는지에 대한 여부를 확인.
		if (!curPushLine.length || curPushLine.at(-1) < pretNum) {
			curPushLine.push(pretNum);
			answer += 1;
		}
	}
}

console.log(answer);