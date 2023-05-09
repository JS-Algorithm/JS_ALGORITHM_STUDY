/* '-' 를 포함해서 조합들 생성 : https://dkwjdi.tistory.com/224 */
let map = {};

function solution(info, query) {
  var answer = [];

  for (let i = 0; i < info.length; i++) {
    let infos = info[i].split(' ');
    let score = infos.pop();
    combination(infos, score, 0);
  }

  for (let key in map) {
    map[key].sort((o1, o2) => o1 - o2);
  }

  for (let i = 0; i < query.length; i++) {
    let querys = query[i].replace(/ and /g, '').split(' ');
    let score = Number(querys.pop());
    answer.push(binarySearch(querys.join(''), score));
  }

  return answer;
}

function combination(infos, score, start) {
  let key = infos.join(''); //키 값으로 쓸거 합쳐주기
  let value = map[key]; //값 있는지 없는지 확인해주기

  if (value) {
    //값이 있으면 push
    map[key].push(score);
  } else {
    //값이 없으면 프로퍼티 만들어줘야 됨
    map[key] = [score];
  }
  //여기서는 - 를 이용해 조합 만들어주기
  for (let i = start; i < infos.length; i++) {
    let combiArr = [...infos]; //전개 연산자
    combiArr[i] = '-';
    combination(combiArr, score, i + 1);
  }
}

function binarySearch(key, score) {
  let scoreArr = map[key];

  if (scoreArr) {
    let start = 0;
    let end = scoreArr.length;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);

      if (scoreArr[mid] >= score) {
        //현재 가르키는 값보다 내가 찾는 값이
        end = mid;
      } else if (scoreArr[mid] < score) {
        start = mid + 1;
      }
    }
    return scoreArr.length - start;
  } else return 0;
}

/* 내 풀이 : 원하는 key가 없을 경우 예외처리 + 이분탐색 */

function solution(infos, querys) {
  var answer = [];
  let map = new Map(); // 해당 key를 조건으로 한 사람의 점수 배열

  // 1. 지원자들 정보 조건을 key로 하는 지원자들 점수 map으로 저장
  for (const inf of infos) {
    let condition = inf.split(' ');
    let score = +condition[4];

    for (let i = 1; i <= 4; i++) {
      // inf 조건 중 점수 뺀 나머지 이용해서 key 생성
      let keyList = combination(condition.slice(0, 4), i);
      for (let key of keyList) {
        let newKey = key.join('');
        map.set(newKey, map.get(newKey) ? [...map.get(newKey), score] : [score]);
      }
    }

    map.set('-', map.get('-') ? [...map.get('-'), score] : [score]); // 조건이 0개일 경우 추가
  }

  for (const [key, value] of map) {
    map.set(
      key,
      value.sort((a, b) => a - b),
    );
  }

  for (const query of querys) {
    let qArr = query.split(/ and | |-/i).filter((i) => i != '');
    let score = +qArr.pop();
    let condition = qArr.join('');

    let scoreArr = condition === '' ? map.get('-') : map.get(condition);

    if (!scoreArr) {
      // 예외처리 : 해당하는 key가 없을 경우
      answer = [...answer, 0];
      continue;
    }

    // 이분탐색 풀이로 수정
    let start = 0,
      end = scoreArr.length;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (scoreArr[mid] >= score) end = mid;
      else start = mid + 1;
    }

    answer = [...answer, scoreArr.length - end];
  }

  return answer;
}

function combination(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    res.push(...attach);
  });
  return res;
}
