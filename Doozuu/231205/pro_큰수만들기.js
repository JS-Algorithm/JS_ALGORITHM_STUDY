function solution(number, k) {
  let stack = [];

  let arr = number.split('').reverse();

  while (arr.length && k > 0) {
    stack.push(arr.pop());
    while (stack[stack.length - 1] < arr[arr.length - 1] && k > 0) {
      stack.pop();
      k = k - 1;
    }
  }

  if (k !== 0) stack = stack.slice(0, -k);

  return stack.join('') + arr.reverse().join('');
}
