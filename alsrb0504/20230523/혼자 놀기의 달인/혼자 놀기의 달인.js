function solution(cards) {
  const visited = new Array(cards.length + 1).fill(false);
  const result = []; // 카드 그룹의 개수를 저장할 배열
  cards.unshift(-1); // 인덱스를 맞추기 위해 cards에 더미값 하나 추가

  // 선택되지 않은 카드 차례가 왔을 때, dfs로 카드 그룹의 개수 파악
  for (let i = 1; i < cards.length; i++) {
    if (!visited[i]) {
      result.push(dfs(i, 0));
    }
  }

  // 내림차순으로 정렬 후, 가장 큰 값 2개의 곱 || 카드 그룹이 하나일 경우 0 리턴
  result.sort((a, b) => b - a);

  return result.length === 1 ? 0 : result[0] * result[1];

  /** 카드 그룹의 개수를 리턴하는 dfs */
  // 1 -> 8 -> 4 -> 7 -> 1 같은 경우, 카드 그룹의 수: 4를 리턴
  function dfs(currNum, itemCnt) {
    const next = cards[currNum];

    if (visited[next]) return itemCnt;

    visited[next] = true;
    return dfs(next, itemCnt + 1);
  }
}

const cards = [8, 6, 3, 7, 2, 5, 1, 4];
console.log(solution(cards));
