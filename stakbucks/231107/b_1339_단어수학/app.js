const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(''));

function solution(input) {
  const [N] = input.shift().map((v) => Number(v));

  const map = new Map();

  // 자리수
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (!map.has(input[i][j])) {
        map.set(input[i][j], Math.pow(10, input[i].length - j - 1));
      } else {
        map.set(input[i][j], map.get(input[i][j]) + Math.pow(10, input[i].length - j - 1));
      }
    }
  }

  // map을 큰 값 순서로 순회하기 위해 정렬
  const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  let result = 0; // 정답
  let number = 9; // 알파벳에 배정할 숫자

  sortedMap.forEach((value) => {
    result += value * number--;
  });

  console.log(result);
}
solution(input);
