function solution(begin, end) {
    const answer = [];

    for (let i = begin; i <= end; i++) {
        let minNum = 1;
        let maxNum = 1;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                if (i / j <= 10000000) {
                    minNum = j;
                    answer.push(i / j);
                    break;
                } else {
                    maxNum = j;
                }
            }
        }
        if (i === 1) {
            answer.push(0);
        } else if (minNum === 1) {
            answer.push(maxNum);
        }
    }
    return answer;
}
