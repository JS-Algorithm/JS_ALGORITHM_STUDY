function solution(arrayA, arrayB) {
  let answer = [];
  function fnGCD(a, b) {
    return a % b ? fnGCD(b, a % b) : b;
  }
  function fnCD(val) {
    let arr = [];
    for (let i = 1; i <= val; i++) {
      if (i !== 1 && !(val % i)) arr.push(i);
    }
    return arr;
  }
  function fnCondition(arr, list) {
    let cnt = false;
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] % list[i] === 0) cnt = true;
      }
      if (!cnt) answer.push(list[i]);
      cnt = false;
    }
  }
  let A_GCD = arrayA.reduce((acc, cur) => fnGCD(acc, cur), arrayA[0]);
  let B_GCD = arrayB.reduce((acc, cur) => fnGCD(acc, cur), arrayB[0]);
  let A_GCD_List = fnCD(A_GCD);
  let B_GCD_List = fnCD(B_GCD);
  fnCondition(arrayB, A_GCD_List);
  fnCondition(arrayA, B_GCD_List);
  return answer.length > 0 ? Math.max(...answer) : 0;
}

// 깔끔한 풀이
function solution(arrayA, arrayB) {
  const aResult = getAnswer(arrayA, arrayB);
  const bResult = getAnswer(arrayB, arrayA);

  return aResult > bResult ? aResult : bResult;
}

function getAnswer(A, B) {
  A.sort((a, b) => a - b);
  for (let i = A[0]; i > 1; i--) {
    if (A.every((a) => a % i === 0) && !B.some((b) => b % i === 0)) return i;
  }
  return 0;
}
