function solution(begin, end) {
    let answer = [];
    
    for(let i=begin; i<=end; i++){
        answer.push(findN(i));
    }
    return answer;
} 

function findN(number){
    if(number===1) return 0;
    
    let temp = 1;
    for(let i=2 ; i<=Math.sqrt(number); i++){
        if(number%i===0){
            temp = i;
            // 10**7인데 10*7로 써서 한시간동안 에러 찾음...;;
            // 예시케이스는 되는데 테케는 왜 안되나...내가 멀 잘못햇나..세상이 날 억까한다...
            if(number/i<=10**7) return number/i;
        }
    }
    return temp;
}
