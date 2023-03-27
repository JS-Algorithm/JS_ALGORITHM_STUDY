function solution(today, terms, privacies) {
  const termMap = new Map();
  const answer = [];
  // 오늘 날짜
  const calcedToday = CalcDateToNum(today);

  // 약관 종류
  for (let term of terms) {
    const [ch, num] = term.split(" ");
    termMap.set(ch, Number(num));
  }

  // 약관이 적용된 날짜 계산 후, 오늘 날짜와 비교
  privacies.forEach((el, idx) => {
    const [date, term] = el.split(" ");
    const result = CalcDateToNum(date) + termMap.get(term) * 28;

    if (result <= calcedToday) answer.push(idx + 1);
  });

  return answer;

  // 날짜를 숫자로 변환하는 함수
  function CalcDateToNum(str) {
    const [yy, mm, dd] = str.split(".").map(Number);

    return (yy - 1) * 12 * 28 + (mm - 1) * 28 + dd;
  }
}

const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];

console.log(solution(today, terms, privacies));
