
// 1. 정답 풀이
// 이중 for문 -> 단일 for문으로 개선
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, k] = input[0].split(' ').map(Number);
let arr = new Array(n).fill(0);
let max = Array.from({length:n}, (_, i)=>i).reduce((a, b)=> a+b);

// 해당하는 순열이 없으면 return
if(k>max){
    console.log(-1);
    return;
}

let i;
for(i=1 ; i<=n ; i++){
    if(k===0) break; 

    let bigger = n-i; // i보다 큰 수의 개수
    if(bigger <= k ){
        arr[n-i] = i;
        k-=bigger;
    } else {
        arr[k] = i;
        k=0;
    }
}

for(let j=0 ; j<n ; j++){
    if(arr[j]===0){
        arr[j] = i;
        i++;
    }
}

let answer = arr.join(' ');
console.log(answer);


// 2. 시간초과 -> 이중 for문
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let [n, k] = input[0].split(' ').map(Number);
// let arr = new Array(n).fill(0);
// let max = Array.from({length:n}, (_, i)=>i).reduce((a, b)=> a+b);

// // 해당하는 순열이 없으면 return
// if(k>max){
//     console.log(-1);
//     return;
// }

// let i;
// for(i=n ; i>=1 ; i--){
//     if(k<=0) break; 

//     let idx;
//     if(k>=(i-1)){
//         idx = n-((i-1)+1);
//         k-=(i-1);
//     } else {
//         idx = n-(k+1);
//         k=0;
//     }
//     arr[idx] = i;
// }

// for(let k=1 ; k<=i ; k++){
//     for(let j=0 ; j<n ; j++){
//         if(arr[j]===0){
//             arr[j] = k;
//             break;
//         }
//     }
// }

// let answer = arr.join(' ');

// console.log(answer);
