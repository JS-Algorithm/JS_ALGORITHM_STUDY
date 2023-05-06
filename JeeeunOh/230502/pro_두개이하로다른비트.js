// 규칙 1 : 끝의 2자리 중 0이 하나라도 있을 때
// 000 -> 001
// 001 -> 010
// 010 -> 011

// 규칙 2 : 규칙 1을 만족하지 않는다면, 첫 01 나올 떄 10 으로 바꾸고 나머지 1 유지
// 011 -> 101
// 0111 -> 1011

function solution(numbers) {
    var answer = [];
    
    numbers.forEach((num)=>{
        let bi = '0'+num.toString(2);
        let head = bi.substring(0, bi.length-2);
        let tail = bi.substring(bi.length-2);
        
        if(tail==='00'){ // 규칙 1
            answer.push(parseInt(head+'01', 2));
        } else if(tail==='01'){
            answer.push(parseInt(head+'10', 2));
        } else if(tail==='10'){
            answer.push(parseInt(head+'11', 2));
        } else if(tail==='11'){ // 규칙 2
            for(let idx=bi.length-1; idx>=0 ; idx--){
                if(bi[idx]==='0'){ // 첫 01 발견
                    let ans = bi.substring(0, idx) + '10' + bi.substring(idx+2);
                    answer.push(parseInt(ans, 2));
                    break;
                }
            }
        }
    })
    return answer;
}