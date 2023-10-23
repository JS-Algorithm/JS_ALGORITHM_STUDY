function solution(arr) {
  const answer = [0, 0];

  go(arr);

  return answer;

  function go(arr) {
    const result = check(arr);
    if (result === -1) {
      // 쪼개기

      const length = arr.length / 2;

      // 왼쪽 위
      go(arr.slice(0, length).map((v) => v.slice(0, length)));
      // 오른쪽 위
      go(arr.slice(0, length).map((v) => v.slice(length)));
      // 왼쪽 아래
      go(arr.slice(length).map((v) => v.slice(0, length)));
      // 오른쪽 아래
      go(arr.slice(length).map((v) => v.slice(length)));
    } else {
      // 압축
      answer[result]++;
    }
  }

  // 영역의 모든 값이 같다면, 해당 값 리턴하고, 같지 않으면 -1 리턴

  function check(arr) {
    const flatArr = arr.flat();
    const value = flatArr[0];

    if (flatArr.every((v) => v === value)) return value;
    else return -1;
  }
}
