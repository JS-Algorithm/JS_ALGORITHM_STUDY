const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');
const [s, t] = input.map(Number);

if (s === t) {
  console.log(0);
} else {
  let stack = [];
  stack.push([s, '']);
  let visited = {};
  let answer = [];

  while (stack.length) {
    let [n, calc] = stack.pop();

    if (!visited[n]) {
      visited[n] = true;
      if (n === t) {
        answer.push(calc);
      } else {
        stack.push([n + n, calc + '+']);
        stack.push([n * n, calc + '*']);
        stack.push([n - n, calc + '-']);
        stack.push([n / n, calc + '/']);
      }
    }
    stack.sort((a, b) => b[1].length - a[1].length); // 연산횟수 적은 것부터 탐색하기 위함
  }

  if (answer.length === 0) {
    console.log(-1);
  } else if (answer.length === 1) {
    console.log(answer.join(''));
  } else {
    let list = answer.sort((a, b) => a.length - b.length); // 길이 오름차순 정렬
    let min_list = list.filter((el) => el.length === list[0].length); // 길이 같은거 여러개인지 체크
    if (min_list.length === 1) {
      console.log(min_list.join(''));
    } else {
      console.log(min_list.sort()[0]); // 사전순 정렬
    }
  }
}
