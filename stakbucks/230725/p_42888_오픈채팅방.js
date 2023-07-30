function solution(record) {
  const users = new Map();

  const messages = [];

  for (const r of record) {
    const [act, id, nickname] = r.split(' ');
    if (act === 'Enter') {
      users.set(id, nickname);
      messages.push(id + '님이 들어왔습니다.');
    }
    if (act === 'Leave') {
      messages.push(id + '님이 나갔습니다.');
    }
    if (act === 'Change') {
      users.set(id, nickname);
    }
  }

  const answer = [];
  messages.forEach((v, i) => {
    const [id, rest] = v.split('님');
    const nickname = users.get(id);
    answer.push(nickname + '님' + rest);
  });

  return answer;
}
