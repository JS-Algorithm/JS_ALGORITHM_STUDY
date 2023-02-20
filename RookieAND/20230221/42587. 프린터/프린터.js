function solution(priorities, location) {
	let curLoc = location;
	let rank = 0;
	while (priorities.reduce((acc, cur) => acc + cur, 0) > 0) {
		// 현재 남은 중요도 목록을 큰 순에서 작은 순으로 정렬하여 배열로 치환.
		const leftPriority = Array.from(new Set(priorities)).sort((a, b) => b - a);

		// 현재 가장 첫 번째 대기 목록에 있는 작업의 중요도가 가장 높은지를 체크.
		if (priorities[0] !== leftPriority[0]) {
			priorities.push(priorities.shift());
		}
		// 만약 가장 중요한 작업이라면, 이를 처리하고 인쇄된 순서를 업데이트
		else {
			rank += 1;
			priorities.shift();
			priorities.push(0);
			// 만약 처리된 문서가 내가 요청한 문서인지를 체크
			if (curLoc === 0) {
				return rank;
			}
		}
		// 내가 인쇄를 요청한 문서가 현재 몇 번째 위치에 있는지를 업데이트.
		// 현재 0번째에 있다면 배열의 가장 마지막 인덱스로 수정, 그 외에는 1 감산.
		curLoc = curLoc ? curLoc - 1 : priorities.length - 1;
	}
}
