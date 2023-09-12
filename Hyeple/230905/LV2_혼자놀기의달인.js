function solution(cards) {
    const answer = [];
    let visited = new Array(cards.length + 1).fill(false); // 방문 체크
  
    for (let v of cards) {
      if (!visited[v]) {
        const temp = [];
        while (!temp.includes(v)) {
          temp.push(v);
          v = cards[v - 1];
          visited[v] = true;
        }
        answer.push(temp.length);
      }
    }
  
    if (answer[0] === cards.length) {
      return 0;
    } else {
      answer.sort((a, b) => b - a); // 내림차순 정렬
    }
  
    return answer[0] * answer[1];
  }