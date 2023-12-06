function solution(s) {
  const maxPatternLength = ~~(s.length / 2);
  let answer = s.length;

  let pattern = ''; // 압축될 패턴
  let cnt = 1; // 압축된 패턴의 개수를 나타내는 값

  // i: 압축할 패턴의 길이
  for (let i = 1; i <= maxPatternLength; i++) {
    let result = ''; // 압축 패턴의 길이 마다 저장될 결과

    let j = 0; // j: s의 인덱스
    while (j < s.length) {
      const unit = s.slice(j, j + i); // 압축할 길이 만큼 자른 문자열

      if (pattern === unit) {
        cnt++;
      } else {
        // 패턴이 한 번만 반복되면 1 생략
        result += `${cnt === 1 ? '' : cnt}${pattern}`;
        cnt = 1;

        pattern = unit;
      }
      j += i;
    }

    result += `${cnt === 1 ? '' : cnt}${pattern}`;

    answer = Math.min(answer, result.length);

    // pattern, cnt 값 초기화
    pattern = '';
    cnt = 1;
  }

  return answer;
}
