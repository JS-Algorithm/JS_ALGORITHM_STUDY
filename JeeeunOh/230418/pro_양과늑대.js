// 참고 : https://juyami.tistory.com/104
// 0은 양, 1은 늑대, 연결정보
function solution(info, edges) {
    const tree = Array.from({length: info.length}, () => []);
    for(const [parent, child] of edges){
        tree[parent].push(child);
    }
    
    let answer=0;
    
    const dfs = (node, sheep, wolf, possible) => {
        answer = Math.max(answer, sheep);
        if(sheep <= wolf) return;
        
        const possibleNode = [...possible, ...tree[node]]; // 이제까지 탐색한 가능한 노드 + 현재 노드 자식 노드
        possibleNode.splice(possibleNode.indexOf(node), 1); // 현재 탐색 중인 node는 빼줌 (탐색완료)
        
        for(const next of possibleNode){
            if(info[next]) dfs(next, sheep, wolf+1, possibleNode); // 다음 노드가 늑대일 때
            else dfs(next, sheep+1, wolf, possibleNode); // 다음 노드가 양일 때
        }
    }
    dfs(0, 1, 0, [0]);
    
    return answer;
}