// 스택 풀이
function solution(number, k) {
  let ans = [];

  for (const num of number) {
    while (k > 0 && ans.at(-1) < num) {
      ans.pop();
      k--;
      if (k === 0) break;
    }
    ans.push(num);
  }

  while (k--) ans.pop();

  return ans.join('');
}

// 10번 시간초과 풀이
function solution(number, k) {
  let arr = number.split('');
  let idx = 1;
  while (k) {
    if (arr[idx - 1] < arr[idx]) {
      arr.splice(idx - 1, 1);
      if (idx != 1) idx--;
      k--;
    } else if (idx < arr.length - 1) {
      idx++;
    } else if (idx >= arr.length - 1) break;
  }

  while (k--) {
    arr.pop();
  }

  return arr.join('');
}
