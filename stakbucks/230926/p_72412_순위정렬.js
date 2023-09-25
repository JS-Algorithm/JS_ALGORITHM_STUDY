// 오답(시간초과) 풀이

function solution(info, query) {
  const map = new Map();
  for (const applicant of info) {
    DFS(0, [], applicant.split(' '));
  }

  // DFS로 '-' 포함된 경우까지 모두 map에 추가
  function DFS(i, temp, arr) {
    if (i === 4) {
      const prev = map.get(temp.join('')) || [];
      map.set(temp.join(''), [...prev, Number(arr[4])]);
      return;
    }
    DFS(i + 1, [...temp, '-'], arr); // -
    DFS(i + 1, [...temp, arr[i]], arr); // 인덱스
  }

  // 이진 탐색을 위한 정렬
  for (const [key, value] of map) {
    map.set(
      key,
      value.sort((a, b) => a - b),
    );
  }

  const answer = [];
  for (const q of query) {
    const arr = q.split(' and ');
    const val = arr[0] + arr[1] + arr[2] + arr[3].split(' ')[0];
    const result = map.get(val) || [];
    const count = binarySearch(result, Number(arr[3].split(' ')[1]));
    answer.push(count);
  }

  // 이진탐색
  function binarySearch(arr, target) {
    if (!arr.length) return 0;
    let left = 0;
    let right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] >= target) right = mid;
      else left = mid + 1;
    }
    return arr.length - left;
  }
  return answer;
}
