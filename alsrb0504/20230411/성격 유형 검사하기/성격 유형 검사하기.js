function solution(survey, choices) {
  const SIZE = survey.length;
  const answer = [];

  // 각 유형별, 점수를 저장할 map 생성
  const scores = new Map();
  scores.set("R", 0).set("T", 0).set("C", 0).set("F", 0);
  scores.set("J", 0).set("M", 0).set("A", 0).set("N", 0);

  // 질문의 타입과 결과에 따라 점수 map에 값 업데이트
  for (let i = 0; i < SIZE; i++) {
    const [type1, type2] = survey[i].split("");

    calcScores(type1, type2, choices[i]);
  }

  // MBTI처럼 2개의 타입 중 정답 추출
  answer.push(getResult("R", "T"));
  answer.push(getResult("C", "F"));
  answer.push(getResult("J", "M"));
  answer.push(getResult("A", "N"));

  return answer.join("");

  /** 2개의 타입(알파벳 순)을 인자로 받아 더 큰 값을 리턴하는 함수 */
  // 단, 값이 같은 경우 알파벳 순으로 먼저 오는 것을 반환.
  function getResult(key1, key2) {
    if (scores.get(key1) < scores.get(key2)) return key2;
    else return key1;
  }

  /** 질문 응답에 따라 map에 값 업데이트 하는 함수 */
  function calcScores(key1, key2, nums) {
    if (nums === 1) {
      scores.set(key1, scores.get(key1) + 3);
    }
    if (nums === 2) {
      scores.set(key1, scores.get(key1) + 2);
    }
    if (nums === 3) {
      scores.set(key1, scores.get(key1) + 1);
    }
    if (nums === 5) {
      scores.set(key2, scores.get(key2) + 1);
    }
    if (nums === 6) {
      scores.set(key2, scores.get(key2) + 2);
    }
    if (nums === 7) {
      scores.set(key2, scores.get(key2) + 3);
    }
  }
}
