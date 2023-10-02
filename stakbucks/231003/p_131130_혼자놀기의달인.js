function solution(cards) {
  let groupLengths = []; // 그룹별로 길이만 저장
  const usedCards = new Set(); // 사용된 카드 인덱스로 기록

  for (let i = 0; i < cards.length; i++) {
    const count = DFS(i, 0);
    groupLengths.push(count);
  }

  groupLengths.sort((a, b) => b - a);

  return groupLengths.length >= 2 ? groupLengths[0] * groupLengths[1] : -1;

  // DFS로 하나의 그룹 길이 구하기
  function DFS(idx, count) {
    if (usedCards.has(idx)) {
      return count;
    }
    usedCards.add(idx);
    return DFS(cards[idx] - 1, count + 1);
  }
}
