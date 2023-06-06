// 주어진 배열이 압축 가능한지 체크
// 배열을 4등분 한다.
// 쪼개진 배열들이 각각 압축 가능한지 체크 => 압축 가능하면 cnt++ 하고 더 이상 쪼개지 않는다

function check(arr) {
  // 압축 가능한 배열인지 확인하는 함수

  const array0 = Array.from(Array(arr.length), () => Array(arr.length).fill(0));
  const array1 = Array.from(Array(arr.length), () => Array(arr.length).fill(1));

  if (arr.toString() === array0.toString()) {
    // 0으로 압축 가능한 경우
    return 0;
  }
  if (arr.toString() === array1.toString()) {
    // 1로 압축 가능한 경우
    return 1;
  }
  return -1; // 압축 불가능한 경우 -1 리턴
}

function divide(arr, cnt0, cnt1) {
  // 배열을 4개로 쪼개는 함수
  const length = arr.length;
  const half = length / 2;

  let i = 0;

  while (i < 2 * half) {
    let k = 0;
    while (k < 2 * half) {
      const newArr = [];

      for (let j = 0; j < half; j++) {
        newArr.push(arr[j + k].slice(i, i + half));
      }

      if (newArr[0].length === 1) {
        //더 이상 쪼갤 수 없는 경우
        if (newArr[0][0] === 0) {
          cnt0++;
        } else {
          cnt1++;
        }
      } else {
        // 더 쪼갤 수 있는 경우

        const result = check(newArr); //압축 가능한 배열인지 확인

        if (result === -1) {
          [cnt0, cnt1] = divide(newArr, cnt0, cnt1); //압축 불가능하면 쪼개기
        } else if (result === 0) {
          cnt0++;
        } else {
          cnt1++;
        }
      }
      k = k + half;
    }
    i = i + half;
  }
  return [cnt0, cnt1];
}

function solution(arr) {
  let cnt0 = 0;
  let cnt1 = 0;

  if (arr.length === 1) {
    // 길이가 1인 경우
    if (arr[0][0] === 1) {
      return [0, 1];
    } else {
      return [1, 0];
    }
  }

  if (check(arr) === 0) {
    // 바로 압축 가능한 경우
    return [1, 0];
  } else if (check(arr) === 1) {
    return [0, 1];
  }

  return divide(arr, cnt0, cnt1);
}
