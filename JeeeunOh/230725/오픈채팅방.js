function solution(record) {
  let answer = [];
  let map = new Map();

  record.forEach((s) => {
    let list = s.split(' ');
    let [command, userId, userName] = list;

    if (command === 'Enter' || command === 'Change') map.set(userId, userName);
  });

  record.forEach((s) => {
    let list = s.split(' ');
    let [command, userId, _] = list;

    switch (command) {
      case 'Enter':
        answer.push(`${map.get(userId)}님이 들어왔습니다.`);
        break;
      case 'Leave':
        answer.push(`${map.get(userId)}님이 나갔습니다.`);
        break;
    }
  });

  return answer;
}
