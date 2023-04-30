// 이모티콘 문제
function solution(users, emoticons) {
  let maxUsers = 0;
  let maxPrice = 0;

  // 40, 30, 20, 10의 할인율을 이모티콘 개수와 조합
  // 최대 4 ** 7 = 16384가지 경우의 수
  const sales = [40, 30, 20, 10];
  // 이모티콘의 할인율을 저장할 DFS 스택
  const saleStack = [];

  // DFS로 할인율 조합을 생성
  dfs(0);

  return [maxUsers, maxPrice];

  // 이모티콘의 개수 만큼 salesStack을 [40, 30, 20, 10]
  // 중 하나의 값을 채우고 이모티콘 플러스 구매 유저 계산 함수 호출
  function dfs(cnt) {
    if (cnt === emoticons.length) {
      calcResult();
      return;
    }

    for (let i = 0; i < 4; i++) {
      saleStack.push(sales[i]);
      dfs(cnt + 1);
      saleStack.pop();
    }
  }

  /** 현재 할인율 조합의 이모티콘 플러스 구매 유저 계산 함수 */
  function calcResult() {
    // DFS 결과로 만들어진 할인율을 이모티콘에 적용하여
    // 할인율이 적용된 이모티콘 배열 생성
    const updatedEmoticons = emoticons.map((el, idx) => {
      return el - (el * saleStack[idx]) / 100;
    });

    // 이모티콘 플러스 구매 유저의 수와 이모티콘 판매액을 저장할 변수 선언
    let totalUser = 0;
    let totalPrice = 0;

    // 유지 배열을 돌며 이모티콘 플러스 구매할지 그냥 이모티콘 사는지 계산
    users.forEach(([stdPercent, stdPrice]) => {
      let buyPrice = 0;

      updatedEmoticons.forEach((price, idx) => {
        if (saleStack[idx] >= stdPercent) {
          buyPrice += price;
        }
      });

      if (buyPrice >= stdPrice) totalUser++;
      else totalPrice += buyPrice;
    });

    // 최종 결과값을 바탕으로 이모티콘 플러스 구매 유저가 많도록
    // 값 업데이트
    if (maxUsers < totalUser) {
      maxUsers = totalUser;
      maxPrice = totalPrice;
    } else if (maxUsers === totalUser) {
      maxPrice = Math.max(maxPrice, totalPrice);
    }
  }
}

const users = [
  [40, 10000],
  [25, 10000],
];
const emoticons = [7000, 9000];

console.log(solution(users, emoticons));
