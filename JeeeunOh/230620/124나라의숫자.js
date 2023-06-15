function solution(n) {
  let arr = ['1', '2', '4'];
  let ans = '';

  while (n) {
    let temp = n % 3;
    n = Math.floor(n / 3);

    if (temp === 0) {
      temp = 2;
      n--;
    } else temp--;
    ans = arr[temp] + ans;
  }

  return ans;
}
