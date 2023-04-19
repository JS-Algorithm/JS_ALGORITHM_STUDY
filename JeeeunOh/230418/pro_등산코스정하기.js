// 참고 : https://my-first-programming.tistory.com/entry/%EB%93%B1%EC%82%B0-%EC%BD%94%EC%8A%A4-%EC%A0%95%ED%95%98%EA%B8%B0-javascript

function solution(n, paths, gates, summits) {
    let q = gates;  // 시작 큐
    const inten = new Array(n+1).fill(Infinity); // intensity 저장 배열 
    gates.forEach(v=>inten[v] = -1); // 시작 위치 마이너스 값으로 초기화
    
 	// 정점 간선 그래프 만들기
    const graph = Array.from({length: n+1}, ()=>[]);
    for(let i = 0 ; i < paths.length ; i++){
        const [a,b,w] = paths[i];
        graph[a].push([w,b]); // 가중치, 연결 노드
        graph[b].push([w,a]);
    }
    
    // 산봉우리에서 나가는 간선 제거 : 출발지점 -> 산봉우리까지의 최소값만 구해도 됨.
    for(let summit of summits){
        graph[summit] = [];
    }
    
 	// 1. q에 담겨 있는 노드들로부터 바로 다음 노드들만 탐색함.
    // 2. 이 다음 노드들의 인접노드들 중 intensity를 더 작은 값으로 재설정할 수 있는 애들만 다음에 탐색하기 위해 set에 넣어줌.
    // 3. 이 set으로 q를 재설정해줌.
    // 4. 더 이상 탐색할 것이 없을 때까지 (산봉우리에 도달해서 인접노드가 없을 때까지) 1~3을 반복함.
    while(q.length > 0){ 
        let set = new Set();
        while(q.length > 0){ // 1.
            const cur = q.pop(); // 탐색할 노드 꺼내고 해당 노드의 인접노드 탐색
            for(let [w,v] of graph[cur]){
                const maxV = Math.max(inten[cur],w); // maxV : cur노드까지의 inten와 다음 노드의 inten 중 큰 값
                if(inten[v] > maxV){ // 2. 
                    inten[v] = maxV; 
                    set.add(v); 
                }
            }
        }
        q = [...set]; // 3.
    }
	
    // intensity 최소값 산봉우리 구하기.
    // intensity 최소값 같으면 산봉우리 번호 작은 순
    const res = summits.map(v=>[v,inten[v]]).sort((a,b)=>{
        return a[1]===b[1]? a[0] - b[0] : a[1] - b[1]
    })
    
    return res[0];
}