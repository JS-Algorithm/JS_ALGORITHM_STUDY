function solution(order) {
    const assistance = [];
    let answer = 0;
    let i = 0;
    
    // 컨베이어 벨트를 반복하여 상자를 옮기는 과정
    for (let box = 1; box <= order.length; box++) {
        if (order[i] !== box) { //상자가 택배 기사가 원하는 상자 번호가 아닌 경우
            assistance.push(box);
            continue;
        }
        
        // 상자가 택배 기사가 원하는 상자 번호일 경우
        i++;
        answer++;
        
        // 보조 컨베이어 벨트에 만족하는 상자 번호가 있을 때
        while (assistance.length !== 0 && order[i] === assistance[assistance.length - 1]) {
            assistance.pop();
            i++;
            answer++;
        }
    }

    return answer;
}