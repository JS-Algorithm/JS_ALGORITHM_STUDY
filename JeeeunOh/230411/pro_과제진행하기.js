function solution(plans) {
    var answer = [];
    let st = [];
    
    const changeTime = (s) => {
        return Number(s.substring(0, 2))*60 + Number(s.substring(3));
    }
    
    // 작동 안함 : plans.sort((a, b)=> a[1]-b[1])); 
    plans.sort((a, b)=> changeTime(a[1])-changeTime(b[1]));
    
    plans.forEach((item, idx)=>{
        let [name, start, playtime] = item;
        
        // 1. 마지막 요소가 아니라면
        if(idx!=plans.length-1){
            // 현재 과제 끝나는 시간 & 다음 과제 시작 시간 차이
            let restTime = changeTime(plans[idx+1][1]) - (changeTime(start) + Number(playtime));
            
            // 1-1. 다음 과제와 시간 겹치지 X
            if(restTime>=0) {
                answer.push(name);
                // 현재 과제 끝나는 시간 ~ 다음 과제 시작 시간 사이 가능한 과제들 계산
                while(restTime>0 && st.length){
                    let [lastName, lastTime] = st[st.length-1];
                    if(lastTime <= restTime){
                        answer.push(lastName);
                        st.pop();
                    } else {
                        st[st.length-1] = [lastName, lastTime - restTime];
                    }  
                    restTime-=lastTime;
                }
            }
            /* 1-2. 다음 과제와 시간 겹칠 때
            -> [과제이름, 남은시간] push */
            else { 
                st.push([name, Math.abs(restTime)]);
            }
        } 
        // 2. 마지막 요소라면 무조건 집어넣기
        else {
            answer.push(name);
        }
    })
    
    for(let i=st.length-1 ; i>=0 ; i--){
        answer.push(st[i][0]);
    }
    
    return answer;
}