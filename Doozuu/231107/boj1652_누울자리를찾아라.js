const input = require('fs').readFileSync('ex.txt').toString().split('\n');
const [N, ...room] = input;

// 누울 수 있는 자리 카운트하는 함수
// X를 만나면 reset (현재까지 누적된 값이 2이상이면 count++)
function check(arr) {
  let answer = 0;
  for (let i = 0; i < N; i++) {
    let temp = 0;
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === '.') {
        temp++;
      } else {
        if (temp >= 2) answer++;
        temp = 0;
      }
    }
    if (temp >= 2) answer++;
  }
  return answer;
}

// 세로 기준으로 정렬한 배열
let rotated_room = [];
for (let i = 0; i < N; i++) {
  let temp = '';
  for (let j = 0; j < N; j++) {
    temp += room[j][i];
  }
  rotated_room.push(temp);
}

let width = check(room);
let height = check(rotated_room);

console.log(`${width} ${height}`);
