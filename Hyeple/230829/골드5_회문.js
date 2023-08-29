let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

//회문 검사 함수
function palindrome(x) {
  return x == x.split('').reverse().join('');
}

let testCases = Number(input[0]);
for(let tc = 1 ; tc <= testCases ; tc++){
  let data = input[tc];
  if (palindrome(data)) console.log(0); //회문이면 0 출력
  
  //회문이 아닐 때 유사회문인지 검사
  else {
    let found = false;
    let n = data.length;
    for(let i = 0 ; i < parseInt(n / 2) ; i++) {
      if (data[i] != data[n - i - 1]) { //문자열이 대칭이 아닐 때
        //앞 쪽 원소 지우고 회문인지 테스트
        if(palindrome(data.slice(0, i) + data.slice(i + 1, n))) found = true;
        //뒤 쪽 원소 지우고 회문인지 테스트
        if(palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n))) found = true;
        break;
      }
    } 
    if (found) console.log(1); //유사 회문이면 1 출력
    else console.log(2); //회문, 유사회문 모두 아니면 2 출력
  }
}