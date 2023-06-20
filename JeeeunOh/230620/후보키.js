// 요소 하나 고르기
// 1. 조합이 다 다른지 확인 -> 다 다르면 그대로 answer에 추가
// 2, 하나라도 같으면 다음 idx 중에 하나를 골라 list에 추가 후 재탐색

function solution(relation) {
  let answer = [];
  let maxKeyIdx = relation[0].length;

  const findKey = (list) => {
    let set = new Set();

    for (let i = 0; i < relation.length; i++) {
      let key = [];
      // list에 있는 키 idx들로 key 조합 뽑기
      for (const el of list) {
        key.push(relation[i][el]);
      }
      key = JSON.stringify(key);

      // 해당 조합이 set에 이미 존재했는지 확인
      if (set.has(key)) {
        // 있었다면 다음 키 찾기
        for (let next = list.at(-1) + 1; next < maxKeyIdx; next++) {
          findKey([...list, next]);
        }
        return;
      } else {
        // 없었다면 다음 탐색 위해 key를 set에 추가해주기
        set.add(key);
      }
    }

    // 위에서 중복된 키 나온적 없으면 answer++
    answer.push(list);
  };

  for (let i = 0; i < maxKeyIdx; i++) {
    findKey([i]);
  }

  // answer 중 요소 A가 B의 부분집합이면 B 필터링
  answer.sort((a, b) => a.length - b.length);

  const isSubsetOf = function (fullset, subset) {
    return subset.every((item) => fullset.includes(item));
  };

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === [-1]) continue;
    for (let j = i + 1; j < answer.length; j++) {
      let flag = isSubsetOf(answer[j], answer[i]);
      if (flag) answer[j] = [-1];
    }
  }

  return answer.filter((item) => JSON.stringify(item) != JSON.stringify([-1])).length;
}
