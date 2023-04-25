// 1 2 3 4 5-> 4 3 1 2 5
function solution(order) {
    var answer = 0, idx=0;
    let st = [];
    
    
    for(let i=1 ; i<=order.length; i++){
        if(order[idx]>i) st.push(i); // 4 발견할 때까지 스택에 담음. => 1,2,3 순서대로 담김.
        else if(order[idx]===i) { // 4 발견하면 
            answer++; 
            idx++; // 다음 택배상자 탐색위해 idx++
        }
        
        while(st.length && st[st.length-1]===order[idx]){ // 스택 맨 위의 요소가 현재 탐색 요소와 같으면
            st.pop(); // 스택에서 해당 상자 뽑아주기
            idx++;
            answer++;
        }
    }
    
    return answer;
}