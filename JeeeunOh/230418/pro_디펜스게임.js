// 1. 정답 풀이 : 이분탐색 : O(nlogn)
function solution(n, k, enemy) {
    let answer = 0;
    let start = 0, end = enemy.length;
    
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        let arr = enemy.slice(0, mid).sort((a, b)=> b-a);
        
        let flag = true;
        let temp = 0 ;
        for(let i=k ; i<arr.length; i++){
            temp+=arr[i];
            if(temp>n) flag = false;
        }
        
        if(flag) {
            answer = mid;
            start = mid+1; 
        }
        else end = mid-1;
    }
    
    return answer;
}
// 2. 시간초과 풀이
function solution(n, k, enemy) {
    var answer = 0;
    let isSkill = new Array(enemy.length).fill(false); // 무적권을 썼는가
    
    for(let i=0; i<enemy.length; i++){
        if(enemy[i] <= n ){ // 1. 적 무찌를 수 있을 때
            n-=enemy[i];
            answer++;
        } else { // 2. 적 무찌를 수 없을 때
            if(k===0) break; // 2-1. 무적권도 없으면 break;
            else { // 2-2. 무적권이 있을 때
                let max = [enemy[i], i]; // max : [무찌른 적 최대값, 최대값 idx]
                for(let j=0 ; j<i ; j++){ // enemy[j] 조건 : 현재 max 보다 커야함. / 무적권 쓴 적이면 안됨
                    if(max[0] < enemy[j] && !isSkill[j]){
                        max = [enemy[j], j];
                    }
                }
                isSkill[max[1]] = true; // 스킬 썼음을 체크해주기
                n = n-max[0]+enemy[i];
                k--;
                answer++;
            }
        }
    }
    return answer;
}