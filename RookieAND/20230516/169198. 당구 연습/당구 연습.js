// 각 축에 맞게 특정 좌표를 대칭시키고 네 가지 케이스 중에서 나올 수 있는 최소의 수를 구하자.
// 단, 같은 x 좌표 혹은 y 좌표에 위치할 경우 특정 케이스를 무시해야 한다 (먼저 벽에 부딪혀야 하므로)
// 모서리를 맞췄을 때는 이동 거리의 1/2 만큼 되돌아가므로 이 또한 고려하여 체크하자.

function solution(m, n, startX, startY, balls) {
  const answer = balls.map(([ballX, ballY]) => {
    const validCase = [];
    // 같은 x축을 공유하지 않는다면, x 좌표에 대한 대칭 케이스 측정 가능.
    if (startX !== ballX || startY > ballY) {
      const distance = (startX - ballX) ** 2 + (n * 2 - (ballY + startY)) ** 2;
      validCase.push(distance);
    }

    if (startX !== ballX || startY < ballY) {
      const distance = (startX - ballX) ** 2 + (startY + ballY) ** 2;
      validCase.push(distance);
    }

    // 같은 y 축을 공유하지 않는다면, y 좌표 대칭에 대한 케이스 측정 가능
    if (startY !== ballY || startX > ballX) {
      const distance = (m * 2 - (ballX + startX)) ** 2 + (startY - ballY) ** 2;
      validCase.push(distance);
    }

    if (startY !== ballY || startX < ballX) {
      const distance = (startX + ballX) ** 2 + (startY - ballY) ** 2;
      validCase.push(distance);
    }

    return Math.min(...validCase);
  });

  return answer;
}
