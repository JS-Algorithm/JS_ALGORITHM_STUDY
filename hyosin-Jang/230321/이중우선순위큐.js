function solution(operations) {
  const pq = [];

  operations.forEach((op) => {
    let [command, data] = op.split(' ');
    data = parseInt(data); // 문자열 -> 숫자 타입변환
    switch (command) {
      case 'I':
        pq.unshift(data);
        break;
      case 'D': // 삭제
        if (pq.length === 0) break;
        if (data === 1) pq.sort((a, b) => b - a); // 최댓값 삭제
        else if (data === -1) pq.sort((a, b) => a - b); // 최솟값 삭제
        pq.shift(); // 배열 첫번째 요소 제거
        break;
    }
  });
  if (!pq.length) return [0, 0];
  pq.sort((a, b) => b - a);
  return [pq[0], pq[pq.length - 1]];
}
