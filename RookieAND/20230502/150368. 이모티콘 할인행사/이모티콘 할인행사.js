// 이모티콘마다 각기 다른 할인율을 부여한다고 가정해보자.
// m = 7 이므로 최대 4의 7승, 즉 2의 14승 (대략 16000회) 의 계산이 필요하다.
// 모든 경우를 순회해서 이모티콘 플러스 가입자의 비율이 높은 케이스를 우선적으로 채택
// 결국 재귀로 모든 할인율에 대한 탐색을 진행하고, 가장 효율이 높은 케이스를 채택.

function solution(users, emoticons) {
  let answer = [0, 0];
  const discountRates = [10, 20, 30, 40];

  // 각 이모티콘을 4개 중 하나의 할인율로 판매하고, 할인율이 다 채워졌다면 가격을 산출한다.
  function dfs(selectedDiscountRates) {
    if (selectedDiscountRates.length === emoticons.length) {
      const [finalMembership, finalSellPrice] = calculateFinalPrice(
        selectedDiscountRates,
      );
      // 정답을 갱신할 수 있는지를 체크하고, 가능하다면 갱신시킨다.
      if (
        answer[0] < finalMembership ||
        (answer[0] === finalMembership && answer[1] < finalSellPrice)
      ) {
        answer = [finalMembership, finalSellPrice];
      }
      return;
    } else {
      for (const discountRate of discountRates) {
        selectedDiscountRates.push(discountRate);
        dfs(selectedDiscountRates);
        // 만약 결과가 끝났다면 다시 원래 배열로 돌리고, 다음 할인율을 추가한다.
        selectedDiscountRates.pop(discountRate);
      }
    }
  }

  // 완성된 할인액 목록을 이용하여 각 유저 별 구매액을 산출하고, 멤버십 가입 여부 및 구매액을 측정한다.
  function calculateFinalPrice(selectedDiscountRates) {
    let [finalMembership, finalSellPrice] = [0, 0];

    // 각 유저를 순회하면서 총 구매액이 멤버십 가입 조건보다 높은지를 체크
    users.forEach(([onlyBoughtRate, membershipPrice]) => {
      let totalPrice = 0;
      selectedDiscountRates.forEach((discountRate, idx) => {
        // 고객이 요구하는 할인율보다 더 높다면 구매한다.
        if (discountRate >= onlyBoughtRate)
          totalPrice += emoticons[idx] * ((100 - discountRate) / 100);
      });
      // 멤버십 가입 조건보다 구매액이 더 큰지를 대조한다.
      totalPrice >= membershipPrice
        ? (finalMembership += 1)
        : (finalSellPrice += totalPrice);
    });
    return [finalMembership, finalSellPrice];
  }

  // 처음엔 추가된 할인율이 없으니 빈 배열을 추가하도록 한다.
  dfs([]);

  return answer;
}