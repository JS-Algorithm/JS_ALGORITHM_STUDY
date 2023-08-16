function solution(phone_book) {
  phone_book.sort(); // 정렬하면 그 다음 전화번호만 확인하면 됨
  // ex) 119, 97674223, 1195524421 정렬시
  // -> 119 1195524421 9764223
  for (let i = 0; i < phone_book.length; i++) {
    const number = phone_book[i];
    if (i !== phone_book.length - 1 && phone_book[i + 1].startsWith(number)) {
      return false;
    }
  }
  return true;
}
