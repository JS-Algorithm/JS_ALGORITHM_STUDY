function solution(numbers) {
  const answer = [];
  // 10^15의 포화 이진 트리의 노드 수 선언
  const maxSize = 63;

  numbers.forEach((num) => {
    // 주어진 숫자를 이진수로 변경하고 길이 63의 이진수를 만듦
    // ex. 15 => 1111 (2진수) => 00000....001111 (63의 길이의 2진수)
    const str = num.toString(2);
    const diff = maxSize - str.length;
    const trees = "0".repeat(diff) + str;

    // 해당 숫자(이진 트리)가 만들수 있는지 확인
    if (checkRoot(trees, maxSize, true, true, 0)) answer.push(1);
    else answer.push(0);
  });

  return answer;

  /** 주어진 포화 이진 트리가 표현 가능한지 확인하는 함수 */
  // ( subTree(트리), size(트리 길이), isRight(가장 오른쪽인지 트리인지 boolean),
  // parent(부모가 0/1인지 boolean), changeCnt(0: 한 번도 부모가 1인적인 없음, 1: 한 번이라도 부모가 1인 경우) )

  // 63길이의 포화 이진트리를 루트를 기준으로 반반씩 자르며 탐색
  // 63 => 31/31 => 15/15/15/15 => 7/7/7/...
  function checkRoot(subTree, size, isRight, parent, changeCnt) {
    // 트리 길이가 1인 경우
    // 예외: 가장 오른쪽 노드면 true
    // 노드가 1일 때, 부모가 0이었다면 false, 그 외는 항상 true
    if (size === 1) {
      if (isRight) return true;

      if (subTree === "1") {
        if (!parent) {
          return false;
        }
      }

      return true;
    }

    const mid = Math.floor(size / 2);
    const left = Math.floor(mid / 2);
    const right = mid + left + 1;

    // 처음으로 루트(미드)가 1인 경우, changeCnt = 1로 변경.
    // 이유 :이제부터 제대로 이진 트리를 찾기 위해
    if (subTree[mid] === "1" && changeCnt === 0) {
      changeCnt++;
    }

    // 조건 : changeCnt === 1 && 현재 루트(미드)가 0인 경우
    // 오른쪽 자식이 1이면 탐색 종료.
    // 즉, 이제 부모 노드가 0이 되면 자식 노드는 1이 되면 안됨
    // ex. 9 => 0001001
    if (subTree[mid] === "0" && changeCnt === 1) {
      if (subTree[right] === "1") return false;
    }

    // 부모가 0인 경우
    if (subTree[mid] === "0") {
      // 부모가 0인데 왼쪽 자식이 1이면 탐색 종료
      if (subTree[left] === "1") return false;

      // 부모가 0인데 가장 오른쪽 노드도 아니면서 값이 1이면 탐색 종료
      // 이유 : 가장 오른쪽 노드는 예외의 경우기 때문. (ex. 001 0 000인 경우를 위해)
      if (!isRight && subTree[right] === "1") return false;
    }

    // 부모가 1인지 여부
    const isParent = subTree[mid] === "1" ? true : false;

    // 현재 루트를 기준으로 반씩 나눠서 탐색 진행
    return (
      checkRoot(subTree.slice(0, mid), mid, false, isParent, changeCnt) &&
      checkRoot(subTree.slice(mid + 1), mid, isRight, isParent, changeCnt)
    );
  }
}

const numbers = [9];

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const numbers = [8192 + 4096 + 2048 + 1024 + 512 + 256 + 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1];
// const numbers = [14478 - 8];
console.log(solution(numbers));
