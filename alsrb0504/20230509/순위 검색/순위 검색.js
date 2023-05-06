// info의 최대 크기 5 * 10^5, query의 최대 크기 10^6
// 단순 검색 5 * 10^9 => 시간 초과..
// 따라서 정보 테이블을 점수 순으로 정렬하고 단순 검색으로는 찾기 불가능
//
// 문제 해결 방법 : 모든 조건에 해당하는 테이블을 만들고
// 이분 탐색으로 빠른 검색 시도
function solution(info, query) {
  const answer = [];
  const infoMap = new Map();
  const stack = [];

  // info로부터 만들 수 있는 조건 생성 및 점수 저장
  info.forEach((s) => {
    const parse = s.split(" ");
    dfs(0, parse);
  });

  // map의 값들을 이진탐색을 위해 정렬 (index 빠르게 찾기 위함)
  for (let v of infoMap.values()) {
    v.sort((a, b) => a - b);
  }

  // 쿼리에서 조건을 위한 key 값과 score 찾음.
  query.forEach((s) => {
    const cond = s.split(" ").filter((ch) => ch !== "and");
    const score = Number(cond.pop());
    const key = cond.join("");

    // 이진 탐색으로 조건에 부합하는 인덱스를 찾고 인원 계산
    if (infoMap.has(key)) {
      const cnt =
        infoMap.get(key).length - binarySearch(infoMap.get(key), score);

      answer.push(cnt);
    } else {
      answer.push(0);
    }
  });

  return answer;

  /** 조건 조합을 만들어주는 dfs */
  function dfs(cnt, str) {
    // 만들어진 조건 조합을 key로 값을 저장
    if (cnt === 4) {
      const key = stack.join("");
      const score = Number(str[4]);

      if (infoMap.has(key)) infoMap.get(key).push(score);
      else infoMap.set(key, [score]);

      return;
    }

    // 주어진 정보와 "-"으로 조건 조합 생성
    stack.push(str[cnt]);
    dfs(cnt + 1, str);
    stack.pop();

    stack.push("-");
    dfs(cnt + 1, str);
    stack.pop();
  }

  /** 인자로 주어진 조건에 부합하는 점수의 처음 위치를 반환하는 이분 탐색 함수 */
  function binarySearch(arr, score) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (left <= right) {
      // 점수를 찾은 경우
      if (score === arr[mid]) {
        // 동일한 점수가 여러개 있을 경우 => 해당 점수의 처음 시작 위치를 찾음
        return arr.findIndex((num) => num === score);

        // 좀 더 빠르게 해당 점수의 시작 위치를 찾는 로직
        // 현재 mid 위치에서 하나씩 앞으로 이동하며 찾음
        /*
        if (mid - 1 > -1 && score === arr[mid - 1]) {
          let idx = mid - 1;

          while (score === arr[idx]) {
            idx--;
          }
          return idx + 1;
        } else {
          return mid;
        }
        */
      } else if (score < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }

      mid = Math.floor((left + right) / 2);
    }

    // 인자로 주어진 score와 완전 일치하는 점수가 없는 경우
    // score보다 큰 첫 번째 값의 위치를 반환
    return mid + 1;
  }
}

const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];

const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

console.log(solution(info, query));
