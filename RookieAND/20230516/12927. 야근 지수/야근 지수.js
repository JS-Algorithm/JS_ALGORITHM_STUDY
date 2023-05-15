// 어떤 일을 줄였을 때, 가장 효율적으로 피로도가 줄어들 수 있는가.
// 결국 각각의 일을 "최대한" 균등하게 나누는 작업이 필요하다. (제곱이기 때문)

function solution(n, works) {
  // 예외 : 일을 다 끝마칠 수 있는지부터 체크한 후에 return 시키자.
  let wholeWorks = works.reduce((acc, cur) => acc + cur, 0);
  if (wholeWorks <= n) return 0;

  works.sort((a, b) => a - b);
  const workAmount = works.length;

  // 가장 많은 일만 1개씩 줄여나가는 방식으로 제거 (불필요한 인덱스 탐색 방지)
  while (n > 0) {
    const biggestWork = works.at(-1);
    for (let i = workAmount - 1; i >= 0; i--) {
      if (works[i] >= biggestWork) {
        works[i]--;
        n--;
      }
      if (!n) break;
    }
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}

// // 오답 : 효율성 테스트 실패
// function solution(n, works) {
//   // 예외 : 일을 다 끝마칠 수 있는지부터 체크한 후에 return 시키자.
//   works.sort();
//   let wholeWorks = works.reduce((acc, cur) => acc + cur, 0);
//   if (wholeWorks <= n) return 0;

//   // 그게 아니라면 가장 일이 "많은" 작업을 쳐내자.
//   while (wholeWorks > 0 && n > 0) {
//     const biggestWork = Math.max(...works);
//     const biggestWorkIndex = works.findIndex((value) => value === biggestWork);
//     works[biggestWorkIndex] -= 1;
//     wholeWorks -= 1;
//     n -= 1;
//   }

//   return wholeWorks ? works.reduce((acc, cur) => acc + cur ** 2, 0) : 0;
// }
