function solution(s) {
  let openBracket = 0;

  for (const char of s) {
    // 열린 괄호를 만났다면 수량을 1개 추가하고 다음 반복을 진행.
    if (char == '(') {
      openBracket += 1;
      continue;
    }
    // 만약 열린 괄호가 없는데 닫힌 괄호가 들어왔다면 false.
    if (!openBracket) {
      return false;
    }
    openBracket -= 1;
  }
  // 괄호가 완전히 열리고 닫혀 stack 내부가 비었다면 true, 아니라면 false
  return openBracket === 0;
}

/**
 * 해당 문제를 풀면서 효율성 테스트를 진행하였는데, 이를 통과하지 못하고 실패한 원인은 2가지 입니다.
 *
 * 1. 테스트 케이스에서 5만 자 이상의 문자열을 인자로 넣을 경우, 이를 array 에 넣는 과정에서 메모리 초과
 * 2. 열린 괄호의 갯수를 판단하는 과정에서, 엄격한 비교 (===) 로 0인지를 판별할 경우에도 실패 처리되었습니다.
 *
 * 이에 대한 해결은 0 이 falsy 한 값임을 캐치해서 조건식을 축약하니 그제서야 통과가 되었습니다.
 * 하단은 상단의 코드를 보다 짧고 간결하게, 효율적으로 재정리하여 작성한 문제 풀이 코드입니다/
 *
 */
function solution(s) {
  let openBracket = 0;

  for (const char of s) {
    // 열린 괄호인지, 닫힌 괄호인지에 따라 열린 괄호의 수량을 더하거나 빼줌.
    openBracket += char == '(' ? 1 : -1;
    // 만약 열린 괄호의 수량이 0 혹은 그 이하로 떨어진다면 false
    if (openBracket < 0) return false;
  }
  // 괄호가 완전히 열리고 닫혀 수량이 0개라면 true, 아니라면 false
  return openBracket === 0;
}
