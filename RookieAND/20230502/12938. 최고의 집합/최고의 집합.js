// 결론, 최대한 균등하게 수를 나눈 후에 적당히 분배하자.
// 나머지가 존재한다면 1, 2, 3... 이런 식으로
function solution(n, s) {
  // n 이 s 보다 크면 조합 자체가 불가능하다.
  if (n > s) return [-1];

  // 나머지가 없다면, s를 n으로 나눈 몫으로 채운다.
  const rest = s % n;
  if (rest === 0) return new Array(n).fill(s / n);

  // 그게 아니라면, 나머지를 균등하게 나눠서 추가해준 후 배열을 뒤집는다
  const result = new Array(n).fill(Math.floor(s / n));
  for (let i = 0; i < rest; i++) {
    result[i] += 1;
  }
  return result.reverse();
}