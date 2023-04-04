// 빡센 광물 세트 순서대로 정렬한 후 해당 세트들부터 다이아 -> 철 -> 돌 곡괭이로 캐기
function solution(picks, minerals) {
    const con = [[1, 1, 1], [5, 1, 1], [25, 5, 1]];
    const mineral = ['diamond', 'iron', 'stone'];
    let pickCnt = picks.reduce((cur, sum) => cur+sum);
    let arr = Array.from({length: pickCnt }, (_,i)=>[i, 0])
    
    // 돌 곡괭이를 썼을 때의 필요 피로도를 arr에 저장
    for(let i=0 ; i<minerals.length ; i++){
        // 광물 5개씩 묶어서 세트 0 ~ pickCnt-1 최대 피로도 업데이트
        let idx = Math.floor(i/5);
        if(idx>=pickCnt) break; // 곡괭이로 캘 수 있는 한계를 넘어갔을 때 break
        let maxFati = con[2][mineral.indexOf(minerals[i])];
        arr[idx] = [idx, arr[idx][1]+maxFati];
    }
    // 필요 피로도가 큰 순서대로 정렬
    arr.sort((a, b)=> b[1] - a[1]);
    
    let answer = 0;
    
    for(const item of arr){
        // 캐야하는 광물의 시작 idx
        let idx = item[0]*5;
        // 다이아 -> 철 -> 돌 순으로 돌면서 해당 곡괭이가 남아있다면
        for(let i=0 ; i<3; i++){
            if(picks[i]>0){
                for(let j=idx ; j<idx+5 ; j++){
                    if(j>=minerals.length) break;
                    let mine = mineral.indexOf(minerals[j]);
                    // 해당 곡괭이 사용했을 때의 피로도를 answer에 더해줌.
                    answer+= con[i][mine];
                }
                picks[i]--;
                break;
            }
        }
    }
    
    return answer;
}