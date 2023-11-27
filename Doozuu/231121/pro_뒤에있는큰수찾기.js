function solution(numbers) {
  let answer = [];
  let max = 0;
  let search_arr = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] >= max) {
      max = numbers[i];
      answer.push(-1);
      search_arr = [numbers[i]];
    } else {
      while (1) {
        if (numbers[i] < search_arr[0]) {
          answer.push(search_arr[0]);
          search_arr.unshift(numbers[i]);
          break;
        } else {
          search_arr.shift();
        }
      }
    }
  }

  return answer.reverse();
}
