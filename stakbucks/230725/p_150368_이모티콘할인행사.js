function solution(users, emoticons) {
  let answer = [0, 0]; // [가입수, 비용]

  // temp로 부터 서비스 가입자수, 이모티콘 구매 비용 계산하는 함수
  const calculateTemp = (temp) => {
    let serviceJoinCnt = 0; // 서비스 가입자 수
    let totalPrice = 0; // 이모티콘 구매 비용

    for (let i = 0; i < users.length; i++) {
      if (users[i][1] <= temp[i]) {
        serviceJoinCnt++;
      } else {
        totalPrice += temp[i];
      }
    }
    return [serviceJoinCnt, totalPrice];
  };

  // answer와 비교해서 문제의 할인행사 목표에 더 잘맞는 결과인지 체크
  const compareAnswer = ([serviceJoinCnt, totalPrice]) => {
    if (serviceJoinCnt > answer[0]) {
      answer = [serviceJoinCnt, totalPrice];
      return;
    }
    if (serviceJoinCnt === answer[0]) {
      if (totalPrice > answer[1]) {
        answer[1] = totalPrice;
        return;
      }
    }
    return;
  };

  // 이모티콘마다 할인율 하나씩 적용하면서 재귀로 전수조사
  const go = (idx, discount, temp) => {
    // (이모티콘 인덱스, 이모티콘 할인율, 유저의 구매비용 저장 배열)
    users.forEach(([dis, pri], i) => {
      if (dis <= discount) {
        // 유저의 기준 할인 비율 보다 크면 구매
        temp[i] += emoticons[idx] * (1 - discount / 100);
      }
    });
    if (idx === emoticons.length - 1) {
      // 탐색이 끝난 경우
      compareAnswer(calculateTemp(temp));
      return;
    }
    go(idx + 1, 10, [...temp]);
    go(idx + 1, 20, [...temp]);
    go(idx + 1, 30, [...temp]);
    go(idx + 1, 40, [...temp]);
  };

  go(0, 10, Array(users.length).fill(0));
  go(0, 20, Array(users.length).fill(0));
  go(0, 30, Array(users.length).fill(0));
  go(0, 40, Array(users.length).fill(0));
  return answer;
}
