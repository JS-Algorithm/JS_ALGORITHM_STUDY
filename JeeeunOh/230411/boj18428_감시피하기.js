// 참고 : https://ipwag.tistory.com/399?category=402745

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230411/input.txt').toString().trim().split('\n');

const N = input[0];
const map = input.slice(1).map((item)=>item.split(' '));

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

const isValid = () => {
    let flag = true;
    for(let i=0 ; i<N; i++){
        for(let j=0 ; j<N ; j++){
            if(map[i][j]==='S'){ // 학생의 상하좌우 모두 탐색
                for(let k=0 ; k<4; k++){
                    let [nx, ny] = [i, j];
                    while(true){
                        nx+=dx[k]; ny+=dy[k];
                        if(nx<0 || ny<0 || nx>=N || ny>=N ) break;
                        if(map[nx][ny]==='O') break;
                        // 선생님과 학생 사이에 장애물이 없으면 false;
                        if(map[nx][ny]==='T') {
                            flag = false;
                            break;
                        }
                    }
                }
            }
        }
    }
    return flag;
}

const setO = (x, y, oNum) => {
    if(oNum===3) return isValid();
    
    let flag = false;
    for(let i=x ; i<N ; i++){
        for(let j=y ; j<N ; j++){
            if(map[i][j]==='X'){ // 장애물을 넣을 수 있는 위치라면
                map[i][j]='O'; // 백트래킹으로 넣었다 빼면서 탐색
                if(y===N-1){
                    flag = flag? true : setO(x+1, 0, oNum+1);
                } else {
                    flag = flag? true : setO(x, y+1, oNum+1);
                }
                map[i][j]='X';
            }
        }
    }
    
    return flag;
}

setO(0, 0, 0)? console.log('YES'): console.log('NO')
