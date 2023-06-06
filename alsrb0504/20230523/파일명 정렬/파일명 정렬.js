function solution(files) {
  // 데이터를 {HEAD, NUMBER, 파일명, 입력 순서} 객체의 배열로
  // 변경한 후, 문제 조건에 맞게 정렬.
  // {
  //   HEAD: 'IMG', (대문자 처리),
  //   NUMBER: 123,
  //   fileName: "img123.zip",
  //   inputIdx: 0
  // }

  const fileData = files.map((info, idx) => {
    // 숫자 정보를 찾기 위한 변수들
    let numStart = -1;
    let numEnd = -1;

    // 입력 문자열을 앞에서부터 확인하며
    // 1. 처음으로 숫자를 발견하면 numStart에 시작값을 저장
    // 2. 이후 숫자가 아닌 문자를 찾으면 numEnd에 끝값을 저장
    // 3. 만약 TAIL이 없고 숫자로 끝난다면 예외처리
    for (let i = 1; i < info.length; i++) {
      if ('0' <= info[i] && '9' >= info[i]) {
        if (numStart === -1) numStart = i;
      } else {
        if (numStart !== -1) {
          numEnd = i - 1;
          break;
        }
      }
    }

    const HEAD = info.slice(0, numStart).toUpperCase();
    const NUMBER = numEnd === -1 ? Number(info.slice(numStart)) : Number(info.slice(numStart, numEnd + 1));

    return {HEAD, NUMBER, fileName: info, inputIdx: idx};
  });

  // 정렬 후, 필요한 파일이름만 리턴
  fileData.sort(sortCond);

  return fileData.map((data) => data.fileName);

  /** 문제 조건에 맞는 정렬 함수 */
  // 1. HEAD를 ascii 정렬
  // 2. NUMBER 를 오름차순으로 정렬
  // 3. 입력 순서대로 정렬
  function sortCond(a, b) {
    if (a.HEAD === b.HEAD) {
      if (a.NUMBER === b.NUMBER) {
        return a.inputIdx - b.inputIdx;
      }
      return a.NUMBER - b.NUMBER;
    } else {
      return a.HEAD > b.HEAD ? 1 : -1;
    }
  }
}

const files = ['O00321', 'O49qcGPHuRLR5FEfoO00321'];
console.log(solution(files));
