function solution(n, info) {
  // answer [[ 점수차, [화살 결과] ]]
  // ex. [ [29 │ [ 1, 1, 2, ... 8 more items ]], [...] ]
  var answer = [];

  // 점수 기록용 배열 [ 10점, 9점, ... ]
  const results = new Array(11).fill(0);

  // DFS로 이길 수 있는 경우 탐색
  dfs(n, 0);

  // 예외 처리 : 이길 수 없는 경우
  if (answer.length === 0) return [-1];

  // 점수 차이 순(내림차순)으로 정렬 => 점수차가 큰 결과가 앞으로
  answer.sort((a, b) => b[0] - a[0]);

  // 최대 점수차인 정답이 여러개인 경우를 체크하기 위한 변수들
  const maxDiff = answer[0][0];
  let isMultiple = false;

  for (let i = 1; i < answer.length; i++) {
    if (maxDiff === answer[i][0]) {
      isMultiple = true;
      break;
    }
  }

  // 예외 처리 : 최대 점수차를 만들 수 있는 경우가 여러개인 경우
  if (isMultiple) {
    // filtered에 [ '00000203211', '00002210211' ] 식으로
    // 이길 수 있는 경우의 결과들을 뒤집어서 문자열로 만듦
    // (이유 : 문자열 정렬을 통해 가장 낮은 점수를 더 많이 맞춘 경우를 찾기 위함)
    const filtered = [];

    answer.forEach((el) => {
      if (el[0] === maxDiff) filtered.push(el[1].reverse().join(""));
    });

    filtered.sort();

    // 정렬된 첫 번째 결과(가장 낮은 점수를 많이 맞힌 정답)를
    // 다시 뒤집어서 배열 형태로 리턴
    return filtered.at(-1).split("").reverse().map(Number);
  }
  // 최대 점수차를 만들 수 있는 경우가 단 하나인 경우 => 첫 번째 원소의 결과 리턴
  else {
    return answer[0][1];
  }

  // 이길 수 있는 확인하는 함수
  // 어피치와 라이언의 점수를 구하고
  // 이길 수 있다면 [점수차, [과녁 결과]]를 answer에 push
  function checkWin() {
    let peachSum = 0;
    let lionSum = 0;

    for (let i = 0; i < 11; i++) {
      if (results[i] > info[i]) {
        lionSum += 10 - i;
      } else if (info[i] > 0) {
        peachSum += 10 - i;
      }
    }

    const diff = lionSum - peachSum;

    if (diff > 0) {
      answer.push([diff, [...results]]);
    }
  }

  // DFS (남은 화살, 탐색할 점수 시작점)
  function dfs(rest, start) {
    // 남은 화살이 없는 경우 : 이길 수 있는지 확인
    if (rest === 0) {
      checkWin();
    }

    for (let i = start; i < 11; i++) {
      // 어피치보다 한 발 이상 많은 화살이 필요
      const needs = info[i] + 1;

      if (i < 10 && needs > rest) continue;

      // 마지막 0점 처리 : 남은 화살을 전부 0점에 몰아줌
      if (i === 10 && rest > 0) {
        results[10] += rest;
        dfs(0, i + 1);
        results[10] -= rest;
      }
      // 정상적인 dfs 탐색
      else {
        results[i] += needs;
        dfs(rest - needs, i + 1);
        results[i] -= needs;
      }
    }
  }
}

// const n = 5;
// const info = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];

// const n = 1;
// const info = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const n = 9;
const info = [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1];

// const n = 10;
// const info = [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3];

console.log(solution(n, info));
