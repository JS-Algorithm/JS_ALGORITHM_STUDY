// book_time을 대실 시작 시간 빠른 순서대로 sort한다.
// last[i] : i번째 방의 대실 종료 시간 
// last 0 ~ last.length-1 까지 탐색하면서 현재 손님이 들어갈 수 있는 방 있는지 구하기

function calc_time(a){
    return Number(a.substring(0, 2))*60 + Number(a.substring(3));
}

function solution(book_time) {
    book_time = book_time.sort(); 
    let last = [calc_time(book_time[0][1])+10];
    
    for(let i=1 ; i<book_time.length; i++){
        // 손님이 들어갈 방이 있는지 판별하는 flag
        let isPos = false;
        
        let start = calc_time(book_time[i][0]);
        let end = calc_time(book_time[i][1]);
        
        for(let j=0 ; j<last.length; j++){
            if(last[j] <= start){
                last[j] = end+10;
                isPos = true;
                break;
            }
        }
        // 가능한 방이 없다면 방 추가
        if(!isPos){
            last.push(end+10);
        }
    }
    return last.length;
}