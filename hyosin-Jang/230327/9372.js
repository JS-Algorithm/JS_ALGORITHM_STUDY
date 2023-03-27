let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let result = [];

let T = input.shift();

input = input.map((i) => i.split(' ').map(Number));
//console.log('input', input, T);

for (let i = 0; i < T; i++) {
  const [n, m] = input[0];
  input.shift(); // 제일 앞에 있는거 삭제
  for (let j = 0; j < m; j++) {
    input.shift();
  }
  // 시간초과 나서 수정
  result.push(n - 1);
}

console.log(result.join('\n'));
