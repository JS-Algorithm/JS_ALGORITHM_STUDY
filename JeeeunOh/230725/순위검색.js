let map = {};

function solution(info, query) {
  var answer = [];

  // 1. -로 가능한 모든 조합 만들기
  for (let i = 0; i < info.length; i++) {
    let infos = info[i].split(' ');
    let score = infos.pop();
    combination(infos, score, 0);
  }

  // 2. 이분탐색을 위해 정렬
  for (let key in map) {
    map[key].sort((o1, o2) => o1 - o2);
  }

  // 3. 이분탐색 실행
  for (let i = 0; i < query.length; i++) {
    let querys = query[i].replace(/ and /g, '').split(' ');
    let score = Number(querys.pop());
    answer.push(binarySearch(querys.join(''), score));
  }

  return answer;
}

/**
 *
 * @param {string[]} infos key로 쓸 값 배열
 * @param {number} score 해당 key를 가진 사람이 몇점인지
 * @param {number} start infos의 어떤 idx부터 key값으로 추가해야하는가?
 */
const combination = (infos, score, start) => {
  let key = infos.join('');
  let value = map[key];

  value ? map[key].push(score) : (map[key] = [score]);

  // -를 이용해 조합 만들기
  for (let i = start; i < infos.length; i++) {
    let combiArr = [...infos];
    combiArr[i] = '-';

    combination(combiArr, score, i + 1);
  }
};

/**
 *
 * @param {string} key 지원자 코테 정보 string
 * @param {number} score 지원자 점수
 * @returns
 */
const binarySearch = (key, score) => {
  let scoreArr = map[key];

  if (scoreArr) {
    var start = 0;
    var end = scoreArr.length;

    while (start < end) {
      var mid = Math.floor((start + end) / 2);

      if (scoreArr[mid] >= score) {
        // 현재 가르키는 값보다 내가 찾는 값이
        end = mid;
      } else if (scoreArr[mid] < score) {
        start = mid + 1;
      }
    }

    return scoreArr.length - start;
  } else return 0;
};
