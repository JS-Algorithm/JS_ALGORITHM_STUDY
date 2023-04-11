// 1. 성공 풀이
function solution(numbers) {
    var answer = [];
    
    // 깊이(level)에 따른 string 총 길이 반환하는 함수
    const calcDepth = (level) => {
        return 2**level-1;
    }
    
    numbers.forEach((item)=>{ // 1, 3, 7...
        let bi = item.toString(2); // 11001 : 5
        let level = 1;
        while(true){ // 깊이 더해가면서 해당 string의 깊이 찾기
            let temp = calcDepth(level);
            if(bi.length===temp) break;
            else if (bi.length < temp){ // 깊이 찾았으면 부족한 길이만큼 앞에 0 더하기
                bi = '0'.repeat(temp-bi.length) + String(bi);
                break;
            } 
            level++;
        }
        let flag = true;
        // 밑에서부터 i번째 깊이인 노드들 탐색
        // ex. bi: 10111111, level: 3
        for(let i=1 ; i<level ; i++){ // level : 1, 2 -> 밑의 예시는 level이 2일 때
            let calcIdx = calcDepth(i); // calcIdx : 3
            let gap = calcDepth(i+1); // gap : 7
            // i번째 깊이인 노드들의 인덱스
            for(let j=calcIdx ; j<bi.length; j+=(gap+1)){ // j : 3, 11
                // 해당 노드가 더미라면, 하위 노드들이 다 더미인지 확인
                if(bi[j]==='0'){
                    for(let k=j-calcIdx ; k<=j+calcIdx ; k++){ // 하위더미들 인덱스
                        if(k===j) continue;
                        if(bi[k]==='1') {
                            flag = false;
                            break;
                        }
                    }
                }
                if(!flag) break;
            }
        }
        if(flag) answer.push(1);
        else answer.push(0);
    })
    return answer;
}

// 2. 실패 풀이 
// 리프가 아닌 노드가 0이더라도, 그 하위 노드가 모두 0이면 괜찮다는 것을 간과함.
function solution(numbers) {
    var answer = [];
    const calcDepth = (level) => {
        let res = 1;
        for(let i=1 ; i<level ; i++){
            res+=Math.pow(2, i);
        }
        return res;
    }
    numbers.forEach((item)=>{
        let bi = item.toString(2);
        let level = 1;
        while(true){
            let temp = calcDepth(level);
            if(bi.length===temp) break;
            else if (bi.length < temp){
                bi = '0'.repeat(temp-bi.length) + String(bi);
                break;
            } 
            level++;
        }
        console.log(bi);
        for(let i=0 ; i<bi.length; i++){
            if(i%2!=0 && bi[i]==='0') {
                answer.push(0);
                break;
            }
            if(i===bi.length-1){
                answer.push(1);
            }
        }
    })
    
    return answer;
}