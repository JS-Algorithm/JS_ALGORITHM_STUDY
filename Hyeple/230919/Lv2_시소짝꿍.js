function solution(weights) {
    const visit = new Array(4001).fill(-1);
    const sameWeightCount = new Array(1001).fill(-1);

    let pairCount = 0;

    for (let i = 0; i < weights.length; i++) {
        sameWeightCount[weights[i]] += 1;
        pairCount += sameWeightCount[weights[i]];

        const sameWeightCnt = sameWeightCount[weights[i]];

        // 2~4 배수 몸무게 -> 시소 방문 여부 업데이트
        for (let j = 2; j <= 4; j++) {
            visit[weights[i] * j] += 1;
            pairCount += visit[weights[i] * j] - sameWeightCnt;
        }
    }

    return pairCount;
}