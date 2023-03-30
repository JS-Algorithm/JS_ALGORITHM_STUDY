function solution(orders, course) {
    var answer = [];
    let menuMap = new Map();
    let maxCnt = new Array(11).fill(0);
    
    // order, order 내 탐색할 메뉴 idx, 현재 완성한 order, 목표 order length
    const dfs = (order, idx, curOrder, totalCnt) => {
        // 목표 length에 도달했을 때
        if(curOrder.length == totalCnt){
            if(menuMap[curOrder]){ // 해당 menu 조합이 기존에 있었다면 ++
                menuMap[curOrder]++;
            } else { // 아니라면 1 설정
                menuMap[curOrder] = 1;
            }
            // 메뉴 가짓수에 따른 최대 주문수 갱신
            let len = curOrder.length;
            maxCnt[len] = Math.max(maxCnt[len], menuMap[curOrder]);
            return;
        }
        // 목표 length 아니라면 마저 탐색
        for(let i=idx+1; i<order.length; i++){
            dfs(order, i, curOrder+order[i], totalCnt);
        }
        return;
    }
    
    // 각 order 내 모든 메뉴 조합 탐색
    for(const order of orders){
        for(let i=0 ; i<order.length; i++){
            for(const courseNum of course){
                // 메뉴 순서를 알파벳 순서로 정렬
                let newOrder = order.split('').sort().join('');
                dfs(newOrder, i, newOrder[i], courseNum);
            }
        }
    }
    
    // 탐색한 메뉴조합의 주문횟수가 최댓값과 일치하면서 & 두번이상 주문했을 때만 push
    for (const key in menuMap){
        let len = key.length;
        let cnt = menuMap[key];
        if(cnt!=1 && menuMap[key] === maxCnt[len]){
            answer.push(key);
        }
    }
    
    return answer.sort();
}