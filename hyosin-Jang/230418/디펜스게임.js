// 처음시도: 완전탐색 > 시간초과
// 양궁 문제랑 비슷함 dfs로 모든 경우 탐색하면 시간초과 뜸.
// 이분탐색으로 변경

function solution(n, k, enemy) {
  let [left, right] = [0, enemy.length];
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    const round = enemy.slice(0, mid).sort((a, b) => b - a);
    let fever = k;
    const remain = round.reduce((acc, val) => {
      if (fever > 0) {
        fever--;
        return acc;
      } else return acc + val;
    }, 0);
    // console.log(round, fever, remain, mid)
    if (n - remain >= 0 && fever >= 0) left = mid + 1;
    else right = mid - 1;
    mid = Math.floor((left + right) / 2);
  }

  return left - 1;
}

/*
function solution(n, k, enemy) {
	var answer = 0;
 
	if (n >= enemy.reduce((acc, cur) => acc + cur, 0) || enemy.length <= k) {
	  console.log(enemy.length);
	  return enemy.length;
	}
 
 
	const defenseEnemy = (n, k, idx, enemy) => {
	  // n: 남은 화살 수
	  // k: 남은 무적권 개수
	  // idx: 현재 보고 있는 인덱스
	  console.log('n', n, 'k', k, 'idx', idx);
 
	  if (idx == enemy.length) {
		 // 끝까지 왔다면 무조건 종료시킴
		 answer = idx;
		 return;
	  }
 
	  if (n == 0 && k == 0) {
		 answer = Math.max(answer, idx);
		 return;
	  }
	  if (n == 0) {
		 // n만 0 일 때, k가 남은 경우
		 // k라운드 더 소진 가능
		 let round = idx + k;
		 if (round > enemy.length) {
			round = enemy.length;
		 }
		 answer = Math.max(answer, round);
		 return;
	  }
	  if (k == 0 && n < enemy[idx]) {
		 //k가 없는데 적 처지 못한다면
		 answer = Math.max(answer, idx);
		 return;
	  }
 
	  if (n >= enemy[idx]) {
		 defenseEnemy(n - enemy[idx], k, idx + 1, enemy);
	  }
	  if (k > 0) {
		 defenseEnemy(n, k - 1, idx + 1, enemy);
	  }
	};
 
	defenseEnemy(n, k, 0, enemy);
	console.log(answer);
 
	return answer;
 }
 
 solution(20, 3, [3, 5, 8, 10, 14]);
 */
