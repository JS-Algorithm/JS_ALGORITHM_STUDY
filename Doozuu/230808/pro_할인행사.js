// 1. want를 number 수대로 반복해서 이어붙이고 오름차순으로 정렬
//  ex. ["appleapple","bananabananabanana","porkpork","pot","ricerice"]
// 2. 문자열로 합치기
//  ex. "appleapplebananabananabananaporkporkpotricerice"
// 3. discount에서 i = 0 ~ discount.length - 10 까지 10개씩 잘라서 문자열로 합치고 위의 값과 같은지 비교
// 4. 같으면 answer++

function solution(want, number, discount) {
  let answer = 0;
  let want_str = want
    .map((el, i) => el.repeat(number[i]))
    .sort()
    .join('');
  for (let i = 0; i < discount.length - 9; i++) {
    let slice = discount.slice(i, i + 10);
    if (want_str === slice.sort().join('')) answer++;
  }
  return answer;
}
