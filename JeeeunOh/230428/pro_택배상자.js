// 1 2 3 4 5-> 4 3 1 2 5
function solution(order) {
    var answer = 0, idx=0;
    let st = [];
    
    for(let i=1 ; i<=order.length; i++){
        if(order[idx]>i) st.push(i); 
        else if(order[idx]===i) {
            answer++; 
            idx++;
        }
        
        while(st.length && st[st.length-1]===order[idx]){
            st.pop();
            idx++;
            answer++;
        }
    }
    
    return answer;
}