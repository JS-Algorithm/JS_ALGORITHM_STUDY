const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const string = input[0];
let target = 1;
let curCnt = 1;


// wwooll 에서 끝나면 안됨.
if(string[0]!='w' || string[string.length-1]!='f'){
    console.log(0);
    return;
}

for(let i=1 ; i<string.length; i++){
    let last = string[i-1];
    let cur = string[i];
    if(last!=cur){
        // 이전 알파벳이 w 일 경우 기준 cnt 업데이트
        if(last==='w') target = curCnt;
        else { // o, l, f 인 경우
            // 기준 cnt와 다르면 0 출력
            if(curCnt!=target){
                console.log(0);
                return;
            }
        }
        curCnt=1;
        if((last==='w'&&cur==='o') || (last==='o'&&cur==='l') || (last==='l'&&cur==='f') || last==='f'&&cur==='w' ) continue;
        else {
            console.log(0);
            return;
        }
    } else if (last===cur){
        curCnt++;
    }
}

if(curCnt===target){
    console.log(1);
} else {
    console.log(0);
}
return;



