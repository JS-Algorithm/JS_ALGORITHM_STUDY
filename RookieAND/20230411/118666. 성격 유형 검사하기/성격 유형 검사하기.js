// 1. 선택지에 따라서 얻을 수 있는 점수가 0점부터 3점까지 분포되어 있다.
// 2. 1 ~ 3번은 전자의 유형 점수에, 5 ~ 7번은 후자의 유형 점수에 영향을 준다.

function solution(survey, choices) {
  const pairType = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];
  const personalResult = new Map([
    ['R', 0],
    ['T', 0],
    ['C', 0],
    ['F', 0],
    ['J', 0],
    ['M', 0],
    ['A', 0],
    ['N', 0],
  ]);

  for (const [idx, test] of survey.entries()) {
    const currentChoice = choices[idx];
    // 선택지가 "모르겠음" 일 경우 다음 테스트로 넘어가야 함.
    if (currentChoice === 4) continue;

    const [first, second] = test.split('');

    // 선택지가 부정적일 경우 전자, 긍정적일 경우 후자를 선택해야 함.
    const selectedType = currentChoice < 4 ? first : second;
    // 선택한 답안지만큼의 점수를 추가적으로 매겨서 넣어야 함.
    personalResult.set(
      selectedType,
      personalResult.get(selectedType) + Math.abs(currentChoice - 4),
    );
  }

  const answer = [];
  pairType.forEach(([first, second]) => {
    // 후자가 전자보다 더 클 경우에만 선택된다 (같을 경우 알파벳 순서에 의해 전자 선택)
    answer.push(
      personalResult.get(first) < personalResult.get(second) ? second : first,
    );
  });
  return answer.join('');
}
