function solution(users, emoticons) {
  let ratio = [10, 20, 30, 40];

  // 이모티콘 배열의 길이만큼 가능한 모든 할인율 순열을 구한다.
  const getPermutations = (arr, num) => {
    const result = [];

    if (num === 1) return arr.map((v) => [v]);
    arr.forEach((fixed, index, origin) => {
      // 현재 fixed된 것을 포함해서 선택하므로 원본 배열을 slice하지 않고 origin을 그대로 넘긴다.
      const permutations = getPermutations(origin, num - 1);

      // 앞에 fixed된 element를 붙여준다.
      const attached = permutations.map((v) => [fixed, ...v]);

      result.push(...attached);
    });
    return result;
  };

  let allPermutationRatios = getPermutations(ratio, emoticons.length);
  let totalPlus = 0,
    totalCash = 0;

  console.log(allPermutationRatios);
  for (let arr of allPermutationRatios) {
    // 이모티콘 플러스 가입자 수
    let plus = 0;

    // 모든 유저에 대해 계산한 이모티콘 총 판매액
    let cash = 0;

    // 각 유저들에 대해 이모티콘 구매 비용과 서비스 가입 여부를 계산한다.
    for (let user of users) {
      // 현재 유저의 총 구매 비용
      let curUserTotalPurchaseAmount = 0;
      let [userRatio, userCost] = user;

      for (let i = 0; i < arr.length; i++) {
        // 현재 이모티콘의 할인율이 유저 구매 의사가 있는 할인율 보다 크다면 구매 비용을 계산한다.
        if (arr[i] >= userRatio) {
          curUserTotalPurchaseAmount += emoticons[i] * (1 - arr[i] * 0.01);
        }
        // 총 구매 비용이 이모티콘 플러스 가입 기준 비용보다 크다면 이모티콘 구매를 취소하고
        if (curUserTotalPurchaseAmount >= userCost) {
          // 이모티콘 구매를 취소하고
          curUserTotalPurchaseAmount = 0;

          // 이모티콘 플러스 서비스에 가입한다.
          plus += 1;
          break;
        }
      }
      // 이모티콘 총 판매액을 갱신해준다.
      cash += curUserTotalPurchaseAmount;
    }

    // 가입자 수와 판매 비용의 최댓값을 갱신해준다.
    if (totalPlus < plus) {
      totalPlus = plus;
      totalCash = cash;
    }

    // 가입자 수가 같은 경우 판매 비용의 최댓값을 따로 갱신해주어야 한다.
    if (totalPlus == plus) {
      if (totalCash <= cash) {
        totalCash = cash;
      }
    }
  }

  return [totalPlus, totalCash];
}

const users = [
  [40, 10000],
  [25, 10000],
];
const emoticons = [7000, 9000];

solution(users, emoticons);
