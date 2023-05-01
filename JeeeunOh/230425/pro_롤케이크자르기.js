function solution(topping) {
    let answer = 0;
    let a = new Map();
    let b = new Map();
    
    for(const cur of topping){
        a.set(cur, a.has(cur)? a.get(cur)+1 : 1)
    }
    
    for(const cur of topping){ // 0~i까지 b거
        // a에서 빼주기
        a.set(cur, a.get(cur)-1);
        if(a.get(cur)===0){
            a.delete(cur);
        }
        // b에 더하기
        if(b.get(cur)){
            b.set(cur, b.get(cur)+1);
        } else {
            b.set(cur, 1);
        }
        if(a.size===b.size) answer++;
    }
    
    return answer;
}