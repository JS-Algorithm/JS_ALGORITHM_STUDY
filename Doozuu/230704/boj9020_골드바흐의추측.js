const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// 에라토스테네스의 체 알고리즘으로 소수 찾기
const prime = Array(10001).fill(true);
prime[0] = false;
prime[1] = false;

for (let i = 2; i <= 100; i++) {
  for (let j = i * 2; j <= 10000; j += i) {
    prime[j] = false; // 4의 배수, 6의 배수,, 제거
  }
}

const output = [];
for (let i = 1; i < input.length; i++) {
  const n = input[i];
  let left = (right = n / 2); // 가운데가 제일 값 차이가 작으므로 가운데로 초기값 설정
  // 소수가 아니면 각각 왼쪽/오른쪽으로 이동하며 소수인 값 찾기
  while (!prime[left] || !prime[right]) {
    left -= 1;
    right += 1;
  }
  output.push(`${left} ${right}`);
}

console.log(output.join('\n'));
