const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const [N, k] = input.map(Number);
  //각 행은 그 행의 첫 인덱스의 배수이기 때문에
  // k 보다 작거나 같은 수는, 각 행의 인덱스로 나눈 몫의 크기와 같다
  let left = 1;
  let right = N * N;
  let result = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    for (let i = 1; i <= N; i++) {
      count += getRowCount(i, mid);
    }
    if (count >= k) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  function getRowCount(row, mid) {
    return mid / row >= N ? N : Math.floor(mid / row);
  }

  console.log(result);
}

solution(input);
