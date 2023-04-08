function solution(survey, choices) {
    var answer = '';
    let group = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    let map = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0}
    
    survey.map((item, idx)=>{
        let sItem = item.split('');
        let cNum = choices[idx];
        // 1~4 choice 까지는 0번 인덱스에 -(cNum-4) 만큼 더함
        // 5~7 choice 까지는 1번 인덱스 점수에 cNum-4 만큼 더함
        let [id, score] = [cNum-4<0? 0:1, Math.abs(cNum-4)]
        map[sItem[id]] = map[sItem[id]]+score;
    })
    
    // group 내 각 아이템은 사전순으로 정렬되어있음.
    // -> item[0] 점수 >= item[1] 일 경우 item[0] 을 answer에 추가
    // 반대면 item[1]을 answer에 추가
    group.forEach((item)=>{
        map[item[0]] >= map[item[1]] ?
            answer+=item[0] : answer+=item[1]
    })

    
    return answer;
}