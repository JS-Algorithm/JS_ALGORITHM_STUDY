function solution(bridge_length, weight, truck_weights) {
	// 현재 다리 위의 정보를 인계할 배열 생성, 0을 채워 다리가 비어있음을 나타냄
	// 이후 truck_weights 배열의 0번째 인덱스 값을 가져와 맨 마지막에 추가함.
	let onBridge = Array(bridge_length - 1).fill(0);
	onBridge.push(truck_weights.shift());

	// 총 소요 시간을 담을 변수 선언, 가장 앞 차가 다리에 올라왔으므로 1초부터 시작
	let time = 1;

	// 현재 다리 위의 트럭이 없을 때까지 (무게가 0이 될 때까지) 반복
	while (onBridge.reduce((sum, cur) => sum + cur, 0)) {
		// 먼저 다리 위에 있는 가장 앞의 요소를 제거해야 함. (0이라면 빈 공간, 숫자라면 트럭)
		onBridge.shift();

		// 현재 다리 위의 트럭 무게 합 + 다음으로 다리에 올라갈 트럭의 무게 < 다리의 최대 인계 하중 인지 체크
		// 만약 조건이 참이라면 새로운 트럭을 다리 위에 올려놓고, 아니라면 빈 공간인 0을 추가해야 함.
		const curOnBridgeWeight = onBridge.reduce((sum, cur) => sum + cur, 0);
		onBridge.push(
			curOnBridgeWeight + truck_weights[0] <= weight ? truck_weights.shift() : 0
		);
		// 트럭이 다리에 올라오는지에 대한 여부와 관계 없이, 시간을 무조건 1초 추가해야 함.
		time += 1;
	}

	return time;
}

