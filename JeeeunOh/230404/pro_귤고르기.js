function solution(k, tangerine) {
    let answer=0;
    // 귤 개수 담은 map
    let cnt = new Map();
    for(const tan of tangerine){
        cnt.get(tan)? cnt.set(tan, cnt.get(tan)+1):cnt.set(tan, 1);
    }
    // 귤 개수대로 내림차순 위해 배열로 변환
    let mapToArray = [...cnt];
    mapToArray.sort((a, b) => b[1]-a[1]);
    
    // 필요한 귤 개수 맞추면 반복문 break
    for(const tan of mapToArray){
        answer++;
        k-=tan[1];
        if(k<=0) break;
    }
    
    return answer;
}