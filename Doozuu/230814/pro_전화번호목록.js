// 문자열 타입의 숫자는 정렬할시 사전순으로 정렬된다는 특성을 활용.
// 바로 다음 것만 비교하면 된다.
function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i] === phone_book[i + 1].slice(0, phone_book[i].length)) {
      return false;
    }
  }
  return true;
}
