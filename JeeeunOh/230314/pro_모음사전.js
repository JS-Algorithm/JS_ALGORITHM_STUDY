function solution(word) {
    let answer = 0;
    let alpha = {'A':0, 'E':1, 'I':2, 'O':3, 'U':4};
    
    // 스트링에서 몇번째 알파벳인지
    for(let i=0 ; i<word.length; i++){
        // 자신 앞에 몇 개의 알파벳이 있는지
        let cnt = alpha[word[i]];
        let temp = 0;
        for(let j=0 ; j<=4-i; j++){
            temp+= Math.pow(5, j);
        }
        answer+=temp*cnt+1;
    }
    return answer;
}