// 손해인 경우 : N 번째 상자를 골랐을 때 숫자 카드 N이 나온 경우 (사이클 종료)
// 최대 이득인 경우 : 두 그룹의 크기가 최대한 "균등" 한 경우 (카드 7개 => 3개, 4개)

// DFS 로 그룹을 순회하면서 나올 수 있는 경우의 수를 모두 구해보자.
function solution(cards) {
    const leftCardList = new Set(cards);
    const group = [];
    
    const dfs = (current, amount) => {
        const next = cards[current - 1];
        if (!leftCardList.has(next)) return amount;
        leftCardList.delete(next);
        return dfs(next, amount + 1);
    }
    
    const [entry] = Array.from(leftCardList);
    
    while (leftCardList.size) {
        const [entry] = Array.from(leftCardList);
        leftCardList.delete(entry);
        const groupSize = dfs(entry, 1);
        group.push(groupSize);
    }
    
    
    group.sort((a, b) => b - a);
    return group[0] * (group[1] || 0);
}
