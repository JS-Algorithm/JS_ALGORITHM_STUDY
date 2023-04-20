function solution(topping) {
    let answer = 0;
    let a = new Map();
    let b = new Map();
    
    for(let i=0 ; i<topping.length; i++){
        if(a.get(topping[i])){
            a.set(topping[i], a.get(topping[i])+1);
        } else {
            a.set(topping[i], 1);
        }
    }
    
    for(let i=0 ; i<topping.length; i++){ // 0~i까지 b거
        let cur = topping[i];
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