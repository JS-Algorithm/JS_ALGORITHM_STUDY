function solution(users, emoticons) {
  let answer = [0, 0];
  let pers = [10, 20, 30, 40];

  // 현재 이모티콘 idx, 할인율 저장 배열 temp
  const dfs = (perArr) => {
    // A. 마지막 이모티콘까지 탐색했다면, answer 갱신 필요
    if (perArr.length === emoticons.length) {
      let userCost = Array(users.length).fill(0);

      /* 
      1. 유저가 원하는 할인율과 실할인율 비교
      -> 유저가 원하는 할인율보다 높다면, 사기
      */
      users.forEach((user, user_idx) => {
        perArr.forEach((per, per_idx) => {
          if (user[0] <= per) {
            userCost[user_idx] += (emoticons[per_idx] * (100 - per)) / 100;
          }
        });
      });

      /* 
      2. 유저 구매 가격과 플러스 서비스 기준 비교
      */
      let [plusCnt, totalCost] = [0, 0];
      userCost.forEach((cost, cost_idx) => {
        if (cost >= users[cost_idx][1]) {
          // 2-1. 이모티콘 플러스 가입
          plusCnt++;
        } else {
          // 2-2. 미가입
          totalCost += cost;
        }
      });

      /* 
      3. 정답 갱신 가능한지 확인
      */
      if (answer[0] === plusCnt) {
        // 3-1. 가입자 수 같으면 가격만 비교
        answer[1] = Math.max(answer[1], totalCost);
      } else if (answer[0] < plusCnt) {
        // 3-2. 가입자 수가 더 크면 배열 그대로 갱신
        answer = [plusCnt, totalCost];
      }

      return;

      // B. 정해야 할 할인율이 있다면 마저 정하기
    } else {
      for (const per of pers) {
        dfs([...perArr, per]);
      }
    }
  };

  dfs([]);

  return answer;
}
