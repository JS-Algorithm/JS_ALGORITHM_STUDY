const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230328/input.txt').toString().split('\n');

let T = +input.shift();

let idx=0;
while(T--){
    // 국가의 수, 비행기 종류
    let [N, M] = input[idx].split(' ').map(Number);
    idx+=M+1;
    console.log(N-1);
}