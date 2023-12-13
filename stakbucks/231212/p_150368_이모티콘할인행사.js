function solution(users, emoticons) {
  const rates = [10, 20, 30, 40];

  let answer = [0, 0]; // [가입자수, 매출액]

  combinate([]);

  return answer;

  // 할인율 조합 구하기
  function combinate(combination) {
    if (combination.length === emoticons.length) {
      // DFS 끝
      // 해당 할인율 조합으로 가져올 수 있는 가입자수, 매출액 구하기
      renewAnswer(getResultByCombination(combination));
      return;
    }

    rates.forEach((rate) => {
      combinate([...combination, rate]);
    });
  }

  // 할인율 조합으로 가입자수, 매출액 구하기
  function getResultByCombination(combination) {
    // 유저 별로 구매한 총 액수 기록
    const userPurchased = Array(users.length).fill(0);

    let 가입자수 = 0;
    let 매출액 = 0;

    emoticons.forEach((emoticon, i) => {
      const saleRate = combination[i];
      const saledPrice = emoticon * (1 - saleRate / 100);

      users.forEach(([rate, _], idx) => {
        // user의 기준 할인율이 보다 할인율이 크면 구매
        if (saleRate >= rate) {
          userPurchased[idx] += saledPrice;
        }
      });
    });

    users.forEach(([_, purchased], i) => {
      if (userPurchased[i] >= purchased) {
        userPurchased[i] = 0;
        가입자수++;
      }
      매출액 += userPurchased[i];
    });

    return [가입자수, 매출액];
  }

  // 정답 갱신
  function renewAnswer([가입자수, 매출액]) {
    if (가입자수 > answer[0]) {
      answer = [가입자수, 매출액];
    }
    if (가입자수 === answer[0]) {
      answer = [가입자수, Math.max(매출액, answer[1])];
    }
  }
}
