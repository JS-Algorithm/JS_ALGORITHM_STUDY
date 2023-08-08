// 공백 문자 연속 유의하기
function solution(s) {
  let arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '') {
      continue;
    }
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  return arr.join(' ');
}
