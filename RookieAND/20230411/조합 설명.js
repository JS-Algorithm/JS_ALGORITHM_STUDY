function getCombination(arr, n) {
  if (n === 1) return arr.map((el) => [el]);
  const result = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombination(rest, n - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    result.push(...attached);
  });

  return result;
}

/**
 * https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
 *
 * arr : 여러 값들의 집합
 * n : 구하고자 하는 조합의 길이
 *
 * 1. 추출
 * 조합은 순서와 관계 없이 N개를 택해야 하기 때문에, 앞에서부터 요소를 선택하면서 경우의 수를 계산한다.
 * arr.forEach 구문을 통해서 0번째 인덱스부터 순회를 시작한다. 이후 가장 앞의 요소를 "선택했다고" 가정한다.
 * 이후 해당 요소를 제외한 나머지 요소들을 분리하고, N개 중 1개를 선택했기 때문에 나머지 중에서 N - 1개를 선택하게끔 한다.
 * N = 1 일 경우, 남은 요소들을 전부 하나씩 선택할 수 있기에 각각의 요소들을 배열로 분리해서 RETURN 한다.
 *
 * 2. 조합
 * 각 재귀를 통해 인계 받은 배열은 combinations 배열에 저장된다. 이후 가장 먼저 "선택한" 요소와 함께
 * 나머지 N - 1 개의 조합을 병합하고 result 배열에 이를 인계한다. spread 연산을 진행하는 이유는 각각의 케이스가
 * 하나의 큰 배열로 묶여 있기 때문에, 이를 풀어서 result 배열에 넣어줘야 할 필요가 있기 때문이다.
 *
 */

/**
 * 1, 2, 3, 4, 5 중에서 길이가 3인 조합 목록을 구해야 한다.
 *
 * fixed: 1 => 1, [2, 3, 4, 5] (n = 2) => 1, 2, [3, 4, 5] (n = 1) => [[1, 2, 3], [1, 2, 4], [1, 2, 5]]
 * fixed: 2 => 2, [3, 4, 5] (n = 2) => 2, 3, [4, 5] (n = 1) => [[2, 3, 4], [2, 3, 5]]
 * fixed: 3 => 3, [4, 5] (n = 2), 3, 4, [5] (n = 1) => 3, 4, 5
 * fixed: 4 => 4, [5] (n = 2) => 4, 5, [] =>
 */
