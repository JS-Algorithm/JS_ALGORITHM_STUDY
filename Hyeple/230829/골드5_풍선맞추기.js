let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let h = input[1].split(' ').map(Number);
let result = 0;

let arrow = new Array(100001).fill(0); //각 높이에 현재 화살이 0개라고 가정
for(let x of h){
  if(arrow[x] > 0){ //해당 높이에 화살 있는 상황
    arrow[x] -= 1; //화살 개수 줄임
    arrow[x-1] += 1; //화살 위치를 한 단계 낮춤
  }
  else { //해당 높이에 화살이 없는 상황
    arrow[x-1] += 1;
    result += 1; //화살을 쏨
  }
}

console.log(result);