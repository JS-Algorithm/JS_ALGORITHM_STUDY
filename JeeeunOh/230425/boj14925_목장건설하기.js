const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230425/input.txt').toString().trim().split('\n');

let [M, N] = input.shift().split(' ').map(Number);
let arr = input.slice(0).map((arr)=> arr.split(' ').map(Number));
let answer=0;

for(let i=0 ; i<M ; i++){
    for(let j=0 ; j<N ; j++){
        let [sx, sy] = [i, j];
        let len = 1;
        let flag = true;
        while(flag && sx+len<=M && sy+len<=N){
            // 세로줄에 나무나 돌 없는지
            for(let k=sx; k<sx+len; k++){
                if(arr[k][sy+len-1]!=0){
                    flag = false;
                    break;
                }
            }
            // 가로줄에 나무나 돌 없는지
            for(let k=sy; k<sy+len; k++){
                if(arr[sx+len-1][k]!=0){
                    flag = false;
                    break;
                }
            }
            
            if(flag){ // 해당 영역에 나무나 돌 없었을 때만 갱신
                answer = Math.max(answer, len);
                len++;
            }
        }
    }
}

console.log(answer);