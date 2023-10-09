function solution(cards) {
  let answer = []; // 상자 그룹의 각 개수
  let visited = Array.from({length: cards.length}, () => false);
  let box_idx = 0; // 상자 그룹의 현재 index
  for (let cur = 0; cur < cards.length; cur++) {
    let next = cur; // 다음 상자의 위치
    while (!visited[next]) {
      answer[box_idx] = (answer[box_idx] || 0) + 1;
      visited[next] = true;
      next = cards[next] - 1;
    }
    box_idx++;
  }
  answer.sort((a, b) => b - a);
  return answer[0] * answer[1] || 0;
}
