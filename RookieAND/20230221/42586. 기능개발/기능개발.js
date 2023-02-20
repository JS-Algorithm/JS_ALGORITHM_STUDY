function solution(progresses, speeds) {
	let answer = [];
	let currentProgress = progresses;

	while (currentProgress.length || speeds.length) {
		currentProgress = currentProgress.map((progress, idx) =>
			progress + speeds[idx] >= 100 ? 100 : progress + speeds[idx]
		);
		// 만약 가장 앞의 진행도가 100이라면, 100으로 작업된 기능을 모두 제거함.
		let buildAmount = 0;
		while (currentProgress[0] === 100) {
			currentProgress.shift();
			speeds.shift();
			buildAmount += 1;
		}
		if (buildAmount > 0) {
			answer.push(buildAmount);
		}
	}
	return answer;
}
