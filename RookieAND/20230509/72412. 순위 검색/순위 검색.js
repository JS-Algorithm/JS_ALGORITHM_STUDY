function solution(info, querys) {
  // 배열 자체를 처리하지 않고, 나머지 요소를 key로 변환하여 "hashMap" 을 만들어야 했다.
  const hashData = new Map();
  info.forEach((value) => {
    const data = value.split(' ');
    const score = Number(data.pop());

    let key = data.join('');
    hashData.set(
      key,
      hashData.has(key) ? [...hashData.get(key), score] : [score],
    );
  });

  // Map을 순회하면서 각각의 요소들을 모두 오름차순 한다.
  for (let [key, value] of hashData) {
    hashData.set(
      key,
      value.sort((a, b) => a - b),
    );
  }

  // 점수를 따로 추출하여 각 요소를 순회해 쿼리 결과를 산출한다.
  const search = (hashData, conditions) => {
    const score = conditions.pop();
    return Array.from(hashData.keys())
      .filter((key) => conditions.every((v) => key.includes(v)))
      .reduce(
        (a, c) =>
          a +
          hashData.get(c).slice(binarySearch(hashData.get(c), score)).length,
        0,
      );
  };

  // 이진 탐색 함수 binarySearch
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

  return querys.map((e) => {
    const conditions = e.split(/ and | |-/i).filter((e) => e);
    return search(hashData, conditions);
  });
}

// 오답 풀이 : 당연하지만 시간 초과
function solution(info, query) {
  const db = info.map((elm) => elm.split(' '));

  const result = query.map((q) => {
    // and을 기준으로 좌우 공백까지 포함시켜 split 진행
    let formattedQuery = q.replaceAll(' and', '');
    formattedQuery = formattedQuery.split(' ');
    const queryResult = formattedQuery.reduce((acc, cur) => {
      if (cur === '-') return acc;
      return Number.isNaN(Number(cur))
        ? acc.filter((col) => col.includes(cur))
        : acc.filter(([, , , , score]) => Number(score) >= Number(cur));
    }, db);
    return queryResult.length;
  });
  return result;
}

// 오답 풀이 2 : 양이 많아서 이분 탐색까지 도입했으나 시간 초과
function solution(info, query) {
  const db = info.map((elm) => elm.split(' '));
  // 이분 탐색을 위해 점수를 내림차순 정렬해야 한다.
  db.sort(([, , , , aScore], [, , , , bScore]) => aScore - bScore);

  const binarySearch = (score, arr) => {
    let [start, end] = [0, arr.length];
    while (start < end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] >= score) {
        end = mid;
      } else if (arr[mid] < score) {
        start = mid + 1;
      }
    }
    return start;
  };

  const result = query.map((q) => {
    // and을 기준으로 좌우 공백까지 포함시켜 split 진행
    let formattedQuery = q.replaceAll(' and', '');
    formattedQuery = formattedQuery.split(' ');
    const queryResult = formattedQuery.reduce((acc, cur) => {
      if (cur === '-') return acc;
      if (Number.isNaN(Number(cur)))
        return acc.filter((col) => col.includes(cur));
      const start = binarySearch(
        cur,
        acc.map(([, , , , score]) => Number(score)),
      );
      return acc.slice(start);
    }, db);
    return queryResult.length;
  });
  return result;
}
