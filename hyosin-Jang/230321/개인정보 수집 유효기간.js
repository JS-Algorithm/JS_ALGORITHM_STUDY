function solution(today, terms, privacies) {
  var answer = [];
  // 타입별 유효기간 map에 저장
  var map = new Map();

  terms.forEach((t) => {
    let [type, duration] = t.split(' ');
    map.set(type, parseInt(duration));
  });

  // 날짜 연산 편하게 하기 위해 Date 객체 사용
  const Datetoday = new Date(today);

  privacies.forEach((p, i) => {
    let [date, type] = p.split(' ');

    const validDate = new Date(date);

    // Date의 메서드인 setMonth를 이용해 현재 달 + 타입의 기간을 더한 값 구하기
    validDate.setMonth(validDate.getMonth() + map.get(type));
    if (validDate <= Datetoday) answer.push(i + 1);
  });
  answer.sort((a, b) => a - b);

  return answer;
}
