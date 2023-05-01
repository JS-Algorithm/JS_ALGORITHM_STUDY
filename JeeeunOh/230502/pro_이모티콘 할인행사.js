function solution(users, emoticons) {
    var answer = [0, 0];
    let pers = [10, 20, 30, 40];
    
    const dfs = (temp) => { // 현재 이모티콘 idx, 할인율 저장 배열 temp
        if(temp.length===emoticons.length){ // 마지막 이모티콘까지 탐색했다면,
            let userCost = Array(users.length).fill(0);
            users.map((user, user_idx)=>{ // 1. 유저가 원하는 할인율과 실할인율 비교
                temp.map((per, per_idx)=>{
                    if(user[0] <= per){ // 유저가 원하는 할인율보다 높다면, 사기
                        userCost[user_idx]+=emoticons[per_idx]*(100-per)/100;
                    }
                })
            })
            
            let temp_answer = [0, 0]
            userCost.map((cost, idx)=>{ // 2. 유저 구매 가격과 플러스 서비스 기준 비교
                if(cost >= users[idx][1]){ // 2-1. 이모티콘 플러스 가입
                    temp_answer[0]++;
                } else { // 2-2. 미가입
                    temp_answer[1]+=cost 
                }
            })
            
            // 3. 정답 갱신 가능한지 확인
            if(answer[0] === temp_answer[0]){ // 3-1. 가입자 수 같으면 가격만 비교
                answer[1] = Math.max(answer[1], temp_answer[1]);
            } else if (answer[0] < temp_answer[0]){ // 3-2. 가입자 수가 더 크면 배열 그대로 갱신
                answer = temp_answer;
            }
            return;
        } else { // 정해야 할 할인율이 있다면 마저 정하기
            for(const per of pers){
                dfs([...temp, per]);
            }
        }
    }
    
    dfs([])
    
    return answer;
}