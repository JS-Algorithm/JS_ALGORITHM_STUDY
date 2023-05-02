const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230502/input.txt').toString().trim().split('\n');

let dp = Array.from({length:31}, ()=> Array(31).fill(-1));

const dfs = (one, half) => { // 반알짜리 골랐는지 flag
    
    if(one===0 && half===0) return 1;
    if(dp[one][half]!=0) return dp[one][half];
    
    if(one>0){
        dp[one][half]+=dfs(one-1, half+1);
    }
    if (half>0){
        dp[one][half]+=dfs(one, half-1);
    }

    return dp[one][half];
}

while(true){
    let num = +input.shift();
    if(num===0) break;
    dp = Array.from({length:31}, ()=> Array(31).fill(0));

    console.log(dfs(num-1, 1)); // 한알짜리 반개 먹는 것으로 시작
}