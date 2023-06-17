const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(input) {
  const [K, N] = input[0].split(' ').map(Number);

  // 오영식이 갖고 있는 랜선 배열
  const arr = [];
  for (let i = 1; i < input.length; i++) {
    arr.push(Number(input[i]));
  }

  // [1,...(arr에서 최댓값)] 배열에서 중간값 선택
  // 해당 중간값을 쓸 랜선의 길이로 설정했을 때 만들 수 있는 랜선의 수 sum
  // sum이 N보다 작으면 랜선을 더 작게 잘라야한다는 뜻
  let left = 1;
  let right = Math.max(...arr);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = arr.reduce((a, b) => a + Math.floor(b / mid), 0);
    if (sum < N) {
      right = mid - 1;
    }
    if (sum >= N) {
      left = mid + 1;
    }
  }

  console.log(right);
  return right;
}

solution(input);
