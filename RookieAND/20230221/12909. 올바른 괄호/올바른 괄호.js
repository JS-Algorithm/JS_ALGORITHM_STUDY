// '(' 열린 괄호를 만나면 stack 에 이를 추가하고, 닫힌 괄호를 만나면 stack에서 제거한다.
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
 *
 */
