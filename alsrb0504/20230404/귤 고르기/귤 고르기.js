function solution(k, tangerine) {
  const TOTAL = tangerine.length;
  const map = new Map();

  // Map을 사용하여 귤 크기와 개수를 저장
  for (let num of tangerine) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }

  // 개수만을 추출하여 오름차순으로 정렬
  const items = [...map.values()].sort((a, b) => a - b);

  let curr_cnt = TOTAL;
  let remove_cnt = 0;

  // 현재 남아있는 귤의 수량에서 귤의 크기를 작은 순으로 하나씩
  // 뺄 수 있다면 제외한 귤의 종류 수 증가
  for (let cnt of items) {
    if (curr_cnt - cnt >= k) {
      remove_cnt++;

      curr_cnt -= cnt;
    } else break;
  }

  // 총 귤의 종류 - 제외한 귤의 종류 수
  return items.length - remove_cnt;
}
