// numA : A 개수 / temp : 복사한 A 개수

// case1 : 1 : numA+1
// case2 : 2 -> 3 -> 4 : 세 개의 cnt가 필요, numA*2 ( 이 때 temp 업데이트 )
// case3 : 4 : 이미 복사되어있는 A 붙여넣기, numA + temp

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let cnt = +input;
let dp = new Array(cnt+1).fill(0); // 출력되어있는 A 개수

for(let i=1 ; i<=cnt; i++){
    dp[i] = dp[i-1]+1; // case1

    // dp[i-j]번째에서 case2 한번 수행 후 계속 case3 수행
    for(let j=3 ; j<=i ; j++){
        dp[i] = Math.max(dp[i], dp[i-j]*(j-1));
    }
}
console.log(dp[cnt]);

// 틀렸던 풀이

function wrong() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim();

    let cnt = +input;
    let dp = new Array(cnt+1).fill(0); // 출력되어있는 A 개수
    dp[1] = 1; dp[2] = 2; dp[3] = 3;

    for(let i=4 ; i<=cnt; i++){
        for(let j=1 ; j<i-3 ; j++){
            dp[i] = Math.max(dp[i], dp[i-(j+2)]*(j+1));
        }
    }
    console.log(dp[cnt]);
}
