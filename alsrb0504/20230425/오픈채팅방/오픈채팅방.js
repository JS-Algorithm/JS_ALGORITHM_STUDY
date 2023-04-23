function solution(records) {
  var answer = [];
  const map = new Map();

  records.forEach((record) => {
    const info = record.split(" ");

    // 입장 or 이름 변경 시, map에 uid와 이름 저장
    // 이름 변경해도 map의 uid에 따라 이름 업데이트 반영
    // => 최종 이름 변경 내용을 저장
    if (info[0] !== "Leave") {
      map.set(info[1], info[2]);
    }
  });

  records.forEach((record) => {
    const info = record.split(" ");

    let text = "";

    // 입장과 퇴장을 uid를 통해 기록
    if (info[0] === "Enter") {
      text = `${map.get(info[1])}님이 들어왔습니다.`;
      answer.push(text);
    } else if (info[0] === "Leave") {
      text = `${map.get(info[1])}님이 나갔습니다.`;
      answer.push(text);
    }
  });

  return answer;
}

const records = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

console.log(solution(records));
