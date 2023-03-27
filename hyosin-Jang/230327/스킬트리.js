// skill_trees에서 skill 순서를 만족하는 스킬트리 개수 반환

// 어떤 알고리즘인지? 위상정렬..?

// 1. skill 외의 값 제거
function solution(skill, skill_trees) {
  var answer = -1;

  for (let i = 0; i < skill_trees.length; i++) {
    let temp = [];
    for (let s = 0; s < skill_trees[i].length; s++) {
      let isOrder = skill.includes(skill_trees[i][s]);
      if (isOrder) {
        temp.push(skill_trees[i][s]);
      }
    }
    skill_trees[i] = temp.join(''); // 배열 -> 문자열
  }

  // 2. 제거한 값에서 CBD에 대한 인덱스 추출
  let arr = [];
  for (let i = 0; i < skill_trees.length; i++) {
    let temp = [];
    for (let s = 0; s < skill_trees[i].length; s++) {
      temp.push(skill.indexOf(skill_trees[i][s])); // 인덱스 저장
    }
    arr.push(temp);
  }
  // arr :  // [ [ 1, 0, 2 ], [ 0, 1, 2 ], [ 0, 1 ], [ 1, 2 ] ]

  // 3. 추출한 값이 0부터 순차적으로 구성되어야 올바른 값!
  // 만들어진 배열이 0부터 순차적인 값을 가지고 있는지 검사
  let isRightOrder = new Array(arr.length).fill(true);

  for (let i = 0; i < arr.length; i++) {
    let k = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== k) {
        isRightOrder[i] = false;
        continue;
      }
      k++;
    }
  }
  answer = isRightOrder.filter((item) => item === true).length;

  return answer;
}
