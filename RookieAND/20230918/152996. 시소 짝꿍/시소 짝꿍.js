function solution(weights) {
    // 두 무게 A, B 가 주어졌을 때, 두 무게가 아래와 같은 비율을 이루면 평형이다
    // [평형을 이루는 비율] : 2:1, 2:3, 3:4 (같은 비율은 제외. (ex) 1:1 = 2:2))
 
    const weightSet = new Set(weights);
    const weightList = Array.from(weightSet).sort();
    const weightMap = new Map(weightList.map((weight) => [weight, 0]));

    // 평형을 이룰 수 있는 무게의 비율 목록 (작은 값이 좌변이기에 좌측이 더 큼)
    const sameRatioList = [2/3, 1/2, 3/4];
    let result = 0;
    
    weights.map((weight) => weightMap.set(weight, weightMap.get(weight) + 1))
    const weightAmount = weightList.length;
    
    for (let i = 0; i < weightAmount; i++) {
        let first = weightList[i];
        const firstAmount = weightMap.get(first);

        // 만약 같은 몸무게를 가진 인원이 2명 이상이라면, 이룰 수 있는 짝은 N * (N - 1) / 2 개
        if (firstAmount > 1) result += (firstAmount * (firstAmount - 1) / 2);
        
        // 자신보다 더 큰 몸무게들을 대상으로 순회를 시작한다. (마지막 제외)
        for (let j = 0; j < 3; j++) {
            const second = first * sameRatioList[j];
            if (weightSet.has(second)) {
                // 비율이 같다면 A 명과 B 명이 이룰 수 있는 짝은 A * B 개이다.
                result += weightMap.get(first) * weightMap.get(second);
            }
        }
    }
    
    return result;
}