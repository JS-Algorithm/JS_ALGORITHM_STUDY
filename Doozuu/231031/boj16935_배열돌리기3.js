let input = require('fs').readFileSync('ex.txt').toString().split('\n');
const [N, M, R] = input[0].split(' ').map(Number);
let arr = input.slice(1, 1 + N).map((el) => el.split(' ').map(Number));
const calc_list = input.at(-1).split(' ').map(Number);

// 1번 연산 : 상하 반전
function calc1(arr) {
  return arr.reverse();
}

// 2번 연산 : 좌우 반전
function calc2(arr) {
  return arr.map((el) => el.reverse());
}

// 3번 연산 : 오른쪽으로 90도 회전
function calc3(arr) {
  let answer = Array.from({length: M}, () => []);
  for (let i = 0; i < M; i++) {
    for (let j = N - 1; j >= 0; j--) {
      answer[i].push(arr[j][i]);
    }
  }
  return answer;
}

// 4번 연산 : 왼쪽으로 90도 회전
function calc4(arr) {
  let n = arr.length;
  let m = arr[0].length;
  let temp = new Array(m).fill(null).map((_) => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      temp[m - (j + 1)][i] = arr[i][j];
    }
  }
  return temp;
}

// 부분 배열로 나누기
function splitArray(arr) {
  const result = [];

  for (let i = 0; i < N; i += N / 2) {
    for (let j = 0; j < M; j += M / 2) {
      const subArray = [];
      for (let k = i; k < i + N / 2; k++) {
        const row = [];
        for (let l = j; l < j + M / 2; l++) {
          row.push(arr[k][l]);
        }
        subArray.push(row);
      }
      result.push(subArray);
    }
  }

  return result;
}

// 합치기
function combineArray(arr) {
  const result = [];

  for (let i = 0; i < arr[0][0].length - 1; i += 2) {
    for (let j = 0; j < arr[0].length; j++) {
      result.push([...arr[i][j], ...arr[i + 1][j]]);
    }
  }
  return result;
}

// 5번 연산 : 1->2, 2->3, 3->4, 4->1
function calc5(arr) {
  let split_array = splitArray(arr);
  let result = [];
  result[0] = split_array[2];
  result[1] = split_array[0];
  result[2] = split_array[3];
  result[3] = split_array[1];

  return combineArray(result);
}

// 6번 연산 : 1->4, 4->3, 3->2, 2->1
function calc6(arr) {
  let split_array = splitArray(arr);
  let result = [];
  result[0] = split_array[1];
  result[1] = split_array[3];
  result[2] = split_array[0];
  result[3] = split_array[2];

  return combineArray(result);
}

let temp = arr;

for (let i = 0; i < calc_list.length; i++) {
  let operator = calc_list[i];

  if (operator === 1) {
    temp = calc1(temp);
  } else if (operator === 2) {
    temp = calc2(temp);
  } else if (operator === 3) {
    temp = calc3(temp);
  } else if (operator === 4) {
    temp = calc4(temp);
  } else if (operator === 5) {
    temp = calc5(temp);
  } else if (operator === 6) {
    temp = calc6(temp);
  }
}

for (let i = 0; i < temp.length; i++) {
  console.log(temp[i].join(' '));
}
