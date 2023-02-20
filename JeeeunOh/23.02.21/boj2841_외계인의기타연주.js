const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 음의 수, 한 줄의 프렛의 수
let N = +input[0].split(' ')[0];
let P = +input[0].split(' ')[1];

let guitar = [];

for (let i = 0; i < N; i++) {
  guitar.push([]);
}

let ans = 0;

for (let i = 1; i < input.length; i++) {
  let num = +input[i].split(' ')[0];
  let fret = +input[i].split(' ')[1];
  let cur = guitar[num - 1];

  // 눌러야하는 fret이 번호가 크면 계속 pop
  while (cur[cur.length - 1] > fret) {
    ans++;
    cur.pop();
  }

  if (cur[cur.length - 1] != fret) {
    cur.push(fret);
    ans++;
  }
}

console.log(JSON.stringify(ans));
