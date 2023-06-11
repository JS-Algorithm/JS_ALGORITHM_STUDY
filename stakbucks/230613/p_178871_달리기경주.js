function solution(players, callings) {
  const map = new Map();
  for (let i = 0; i < players.length; i++) {
    map.set(players[i], i);
  }
  for (const name of callings) {
    const currentRank = map.get(name);
    const 앞사람 = players[currentRank - 1];

    //players 배열에서 앞사람과 위치 바꾸기
    players[currentRank] = 앞사람;
    players[currentRank - 1] = name;

    //map에서 위치 바꾸기
    map.set(name, currentRank - 1);
    map.set(앞사람, currentRank);
  }
  return [...map].sort((a, b) => a[1] - b[1]).map((i) => i[0]);
}
