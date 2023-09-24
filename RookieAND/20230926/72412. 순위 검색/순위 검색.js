function solution(info, querys) {
  const hashData = new Map();
  info.forEach((value) => {
    const data = value.split(' ');
    const score = Number(data.pop());

    let key = data.join('');

    // 점수를 제외한 나머지 조건을 하나의 문자열로 통합하여 key 를 만든다.
    hashData.set(key, hashData.has(key) ? [...hashData.get(key), score] : [score]);
  });

  // 각 key 를 순회하여 조건에 맞는 점수 목록을 오름차순 정렬한다.
  for (let [key, value] of hashData) {
    hashData.set(key, value.sort());
  }

  const search = (query) => {
    const conditions = query.split(/ and | |-/i).filter((cond) => cond);
    const score = conditions.pop();
    return Array.from(hashData.keys())
      .filter((key) => conditions.every((cond) => key.includes(cond)))
      .reduce((acc, cur) => acc + hashData.get(cur).slice(binarySearch(hashData.get(cur), score)).length, 0);
  };

  // 점수가 오름차순으로 담긴 배열 내에서 특정 점수를 넘기지 않는 index 값을 추출.
  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] >= target) right = mid;
      else left = mid + 1;
    }

    return left;
  };

  return querys.map((query) => search(query));
}
