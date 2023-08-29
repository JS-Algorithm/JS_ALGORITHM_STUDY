function solution(topping) {
    let answer = 0;
    const toppingCounts = new Map();
		
		//각 토핑 개수 카운트해서 맵에 저장
    for (const t of topping) {
        toppingCounts.set(t, (toppingCounts.get(t) || 0) + 1);
    }

    const uniqueToppings = new Set();
		//공평하게 자를 수 있는지 확인
    for (const t of topping) {
        uniqueToppings.add(t);
        toppingCounts.set(t, toppingCounts.get(t) - 1);
				//해당 토핑 개수가 0이 되면 맵에서 삭제
        if (toppingCounts.get(t) === 0) {
            toppingCounts.delete(t);
        }
				//공평한 자르기가 가능한 경우의 수 카운트
        if (uniqueToppings.size === toppingCounts.size) {
            answer++;
        }
    }

    return answer;
}