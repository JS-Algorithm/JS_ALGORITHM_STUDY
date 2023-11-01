const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(input) {
  const [N, M, R] = input.shift();
  const operatorArr = input.pop();

  // 연산 함수들 배열로 모아두기
  const operators = [, operator1, operator2, operator3, operator4, operator5, operator6];

  operatorArr.forEach((operator) => {
    const operatorFn = operators[operator];
    input = operatorFn(input);
  });

  console.log(input.map((v) => v.join(' ')).join('\n'));

  // 연산 함수들
  function operator1(arr) {
    return arr.map((v, i) => arr[arr.length - 1 - i]);
  }
  function operator2(arr) {
    let temp = arr.map((v) => [...v]);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        temp[i][arr[0].length - 1 - j] = arr[i][j];
      }
    }
    return temp;
  }

  function operator3(arr) {
    let temp = Array.from({length: arr[0].length}, () => Array(arr.length).fill(0));
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        temp[j][arr.length - 1 - i] = arr[i][j];
      }
    }
    return temp;
  }
  function operator4(arr) {
    let temp = Array.from({length: arr[0].length}, () => Array(arr.length).fill(0));
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        temp[arr[0].length - 1 - j][i] = arr[i][j];
      }
    }
    return temp;
  }

  function operator5(arr) {
    const [N, M] = [arr.length, arr[0].length];
    const temp = arr.map((v) => [...v]);

    // 1->2
    for (let i = 0; i < N / 2; i++) {
      for (let j = 0; j < M / 2; j++) {
        temp[i][j + M / 2] = arr[i][j];
      }
    }
    // 2->3
    for (let i = 0; i < N / 2; i++) {
      for (let j = M / 2; j < M; j++) {
        temp[i + N / 2][j] = arr[i][j];
      }
    }

    // 3->4
    for (let i = N / 2; i < N; i++) {
      for (let j = M / 2; j < M; j++) {
        temp[i][j - M / 2] = arr[i][j];
      }
    }
    // 4->1
    for (let i = N / 2; i < N; i++) {
      for (let j = 0; j < M / 2; j++) {
        temp[i - N / 2][j] = arr[i][j];
      }
    }
    return temp;
  }
  function operator6(arr) {
    const [N, M] = [arr.length, arr[0].length];
    const temp = arr.map((v) => [...v]);

    // 1->4
    for (let i = 0; i < N / 2; i++) {
      for (let j = 0; j < M / 2; j++) {
        temp[i + N / 2][j] = arr[i][j];
      }
    }
    // 4->3
    for (let i = N / 2; i < N; i++) {
      for (let j = 0; j < M / 2; j++) {
        temp[i][j + M / 2] = arr[i][j];
      }
    }

    // 3->2
    for (let i = N / 2; i < N; i++) {
      for (let j = M / 2; j < M; j++) {
        temp[i - N / 2][j] = arr[i][j];
      }
    }
    // 2->1
    for (let i = 0; i < N / 2; i++) {
      for (let j = M / 2; j < M; j++) {
        temp[i][j - M / 2] = arr[i][j];
      }
    }
    return temp;
  }
}
solution(input);
