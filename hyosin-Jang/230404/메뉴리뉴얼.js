// 틀렸음 ...

// 조합 만드는 함수: arr 배열에서 k개를 고름
function combinations(arr, k) {
  const result = [];

  function combine(start, picked) {
    // picked: 선택한 원소들의 배열
    if (picked.length === k) {
      result.push(picked.join(''));
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combine(i + 1, [...picked, arr[i]]);
    }
  }

  combine(0, []);
  // console.log('result: ', result);
  return result;
}

// str이 charArr의 모든 알파벳을 포함하고 있는지 검사하는 함수
function containsAllChars(str, charArr) {
  for (const char of charArr) {
    if (!str.includes(char)) {
      return false; // 하나라도 포함 안하면 false
    }
  }
  return true;
}

function findMaxKeys(map) {
  let max = 1; // 최소 1보다는 커야 함 (2 이상)
  let maxKeys = [];

  for (const [key, value] of map.entries()) {
    if (value > max) {
      max = value; // 갱신
      maxKeys = [key];
    } else if (value === max) {
      maxKeys.push(key);
    }
  }
  return maxKeys;
}

function solution(orders, course) {
  var answer = [];

  // orders: ["XYZ", "XWY", "WXA"]
  // course: [2,3,4]

  // 1. 각 문자열 map에 담기
  let map = new Map();

  orders.forEach((order) => {
    order.split('').map((char) => {
      // map에 char가 있으면 value 증가, 없으면 1로 생성
      map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
    });
  });

  // 2. course의 각 숫자에 대해 만족하는 애들 answer에 담기
  let candidateKeyArr = course.map((menuCnt) => {
    // 2-1. value가 menuCnt -1 보다 작은 것들 제거
    let candidateKeyArr = []; // 후보키 배열
    for (const [key, value] of map.entries()) {
      if (value <= menuCnt - 1) {
        map.delete(key);
      } else {
        candidateKeyArr.push(key);
      }
    }
    return candidateKeyArr;
  });

  // 2-2. 후보키배열에 있는 애들로 현재 menuCnt length의 길이를 가지는 조합 만들기 > 여기서 문제 잘못 이해했음
  let combinationResult = combinations(candidateKeyArr, menuCnt);

  // console.log('combinationResult', combinationResult);

  // 2-3. orders를 순회하면서 각 친구들의 등장횟수를 기록
  let map2 = new Map();
  orders.forEach((order) => {
    combinationResult.forEach((char) => {
      if (containsAllChars(order, char)) {
        map2.has(char) ? map2.set(char, map2.get(char) + 1) : map2.set(char, 1);
      }
    });
  });

  // 3. map2 순회하면서 value가 2를 넘기고, max값을 가지고 있는 key들 answer에 push
  let maxKeyArray = findMaxKeys(map2);

  // 3-1. 각 문자열 정렬해서 answer에 푸쉬
  maxKeyArray = maxKeyArray.map((key) => key.split('').sort().join(''));

  answer.push(...maxKeyArray);
  answer = answer.sort();

  return answer;
}

// orders = ['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'];
// course = [2, 3, 5];

solution(orders, course);
