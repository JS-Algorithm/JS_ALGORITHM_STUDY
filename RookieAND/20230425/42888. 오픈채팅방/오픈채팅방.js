// 1. 중복 닉네임을 허용하기 때문에 각 유저간의 고유한 UUID를 지정해야 함.
// 2. Change일 경우 UUID 유지, Enter 일 경우 새로운 UUID 추가, LEAVE일 경우 UUID 제거

function solution(records) {
  const db = new Map();
  let answer = [];

  for (const record of records) {
    const [command, uuid, nickname = ""] = record.split(" ");
    if (!db.get(uuid)) db.set(uuid, nickname);

    switch (command) {
      case "Enter":
        db.set(uuid, nickname);
        answer.push([uuid, "enter"]);
        break;
      case "Leave":
        answer.push([uuid, "leave"]);
        break;
      default:
        db.set(uuid, nickname);
    } 
  }

  return answer.map(
    ([uuid, command]) =>
      `${db.get(uuid)}님이 ${command === "enter" ? "들어왔" : "나갔"}습니다.`
  );
}