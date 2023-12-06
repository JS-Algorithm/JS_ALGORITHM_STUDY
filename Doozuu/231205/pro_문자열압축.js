function compress(arr) {
  let answer = '';
  let recent = arr[0];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (recent === arr[i]) {
      count++;
    } else {
      answer += count === 1 ? recent : String(count + recent);
      recent = arr[i];
      count = 1;
    }
    if (i === arr.length - 1) {
      answer += count === 1 ? recent : String(count + recent);
    }
  }
  return answer.length;
}

function solution(s) {
  let result = Infinity;

  if (s.length === 1) return 1;

  for (let i = 1; i < s.length; i++) {
    let arr = [];
    for (let j = 0; j < s.length; j += i) {
      arr.push(s.slice(j, j + i));
    }
    result = Math.min(result, compress(arr));
  }

  return result;
}
