// 해결방법 : cnt++ 방법에서 cnt=x; 세팅 후 cnt+=M 로 바꿈.
const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230523/input.txt').toString().trim().split('\n');

let N = +input[0];

const gcd = (a, b) => {
  // 최대공약수
  if (b === 0) return a;
  return gcd(b, a % b);
};

const lcm = (a, b) => {
  // 최소공배수
  return (a * b) / gcd(a, b);
};

for (let i = 1; i <= N; i++) {
  const [M, N, x, y] = input[i].split(' ').map(Number);
  let cnt = x; // cnt%M === x , cnt%N === y 여야 함.
  const target = lcm(M, N);
  while (true) {
    const [tempX, tempY] = [cnt % M === 0 ? M : cnt % M, cnt % N === 0 ? N : cnt % N];
    if (tempX === x && tempY === y) {
      console.log(cnt);
      break;
    }
    if ((tempX === M && tempY === N) || target <= cnt) {
      console.log(-1);
      break;
    }
    cnt += M;
  }
}

// 시간초과
/*
const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230523/input.txt').toString().trim().split('\n');

let N = +input[0];
for (let i = 1; i <= N; i++) {
  const [M, N, x, y] = input[i].split(' ').map(Number);
  let cnt = 1; // cnt%M === x , cnt%N === y 여야 함.
  while (true) {
    const [tempX, tempY] = [cnt % M === 0 ? M : cnt % M, cnt % N === 0 ? N : cnt % N];
    if (tempX === x && tempY === y) {
      console.log(cnt);
      break;
    }
    if (tempX === M && tempY === N) {
      console.log(-1);
      break;
    }
    cnt++;
  }
}
*/
