/* 경우의 수 3가지

1. 왼쪽 대각선 밑으로 이동하기 : tri[row+1][col]
2. 오른쪽 옆으로 이동 : tri[row][col+1]    
3. 왼쪽 대각선 위로 이동하기 : tri[row-1][col-1]

1,2,3 을 각각 수행하다가 이동했을 때 정해진 범위 벗어나거나 차있으면 다음 단계로 이동
*/

function solution(n) {
    let tri = Array.from({length: n}, (_, idx)=> Array(idx+1).fill(0))
    let cnt=1, sum=0; // 입력해야하는 숫자, 최종 숫자
    let row=0, col=0; // 현재 위치
    let step=1; // 위의 주석 중 현재 스텝 (1, 2, 3) 표시
    
    for(let i=1 ; i<=n ; i++) sum+=i;
    
    while(true){
        tri[row][col] = cnt; // 지정된 위치에 집어넣고 이동하기
        
        if(cnt===sum) break; // 최종 숫자까지 집어넣었으면 끝
        
        switch(step){ // 다음 위치 탐색
            case 1:
                if((row+1<n && col<=row) && tri[row+1][col] === 0){
                    row++;
                } else {
                    col++;
                    step=2;
                }
                break;
            case 2:
                if((col+1<=row) && tri[row][col+1] === 0){
                    col++;
                } else {
                    row--;
                    col--;
                    step=3;
                }
                break;
            case 3:
                if((row-1>=0) && tri[row-1][col-1] === 0){
                    row--;
                    col--;
                } else {
                    row++;
                    step=1;
                }
                break;
        }
        
        cnt++;
    }
    
    return tri.flat();
}