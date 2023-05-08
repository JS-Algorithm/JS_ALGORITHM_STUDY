function solution(n, s) {
    let temp = Math.floor(s/n);
    if(temp<1) return [-1]; // 최고의 집합이 존재하지 않는 경우
    
    let answer = Array(n).fill(temp);
    let num = s-n*temp; // 남은 카운트
    
    for(let i=n-1; i>n-1-num ; i--){
        answer[i]++;
    }
    
    return answer;
}

// 최대한 중간 수들끼리 곱하는 것이 이득.

// 2, 9 -> 9/2 = 4.xx
// 4 5

// 3, 9
// 3 3 3

// 4 13 -> 13/4 = 3.xx
// 3 3 3 4

// 5 17 -> 17/5 = 3.xx
// 3 3 3 4 4

// 2 1 -> 1/2 = 0.xx
// 실패

// 3 2 -> 2/3 = 0.xx
// 실패 