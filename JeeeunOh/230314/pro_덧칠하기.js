// 웅덩이 문제랑 비슷한 듯
function solution(n, m, section) {
    let answer = 0;
    let paint_idx = 0;
    
    for(let i=0 ; i<section.length ; i++){
        let cur = section[i];
        if(paint_idx < cur){
            answer++;
            paint_idx = cur+m-1;
        }
    }
    
    return answer;
}