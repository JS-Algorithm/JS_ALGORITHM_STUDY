function solution(str1, str2) {
  let arr1 = Slice(str1);
  let arr2 = Slice(str2);

  // 두 글자씩 끊어서 다중집합의 원소로 만들기(영문자 외에는 버림)
  function Slice(str) {
    let arr = [];
    for (let i = 0; i < str.length - 1; i++) {
      let slice = str.slice(i, i + 2);
      if (/^[A-Za-z]+$/.test(slice)) arr.push(slice);
    }
    return arr;
  }

  // 예외 케이스) 모두 공집합일 경우 65536 출력
  if (!(arr1.length + arr2.length)) return 65536;

  // 대소문자 차이 무시를 위해 모두 대문자로 변환
  arr1 = arr1.map((el) => el.toUpperCase());
  arr2 = arr2.map((el) => el.toUpperCase());

  // 교집합, 합집합 계산
  let obj1 = {};
  let obj2 = {};
  arr1.map((el) => (obj1[el] = (obj1[el] || 0) + 1));
  arr2.map((el) => (obj2[el] = (obj2[el] || 0) + 1));
  let intersection = 0;
  let union = 0;
  let counted = [];
  for ([key1, value1] of Object.entries(obj1)) {
    if (Object.keys(obj2).includes(key1)) {
      intersection += Math.min(value1, obj2[key1]);
      union += Math.max(value1, obj2[key1]);
      counted.push(key1);
    } else {
      union += value1;
    }
  }
  let not_counted = Object.keys(obj2).filter((el) => !counted.includes(el));
  let num = 0;
  not_counted.map((el) => (num += obj2[el]));
  union = union + num; // obj2에서 더해지지 못한 부분 더하기

  // 자카드 유사도 계산
  let zacard = intersection / union;
  // 자카드 유사도 * 65536의 정수부 출력
  return Math.floor(zacard * 65536);
}

// 참고) 더 좋은 풀이!
function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        // 넣을 때 한 번에 소문자로 변환해서 과정 단축
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
