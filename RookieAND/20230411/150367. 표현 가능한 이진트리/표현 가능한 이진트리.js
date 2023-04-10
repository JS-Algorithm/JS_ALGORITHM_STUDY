// 1. 주어진 십진수를 이진수로 변환한다.
// 2. 해당 숫자를 가운데를 기준으로 좌우를 나누어 유효한 트리인지를 판단한다.
// 3. 유효한 트리인지를 판단하는 기준은 현재 분할된 "루트 노드" 가 0인지를 판단하자.

// 1. 루트 노드가 0인 경우 트리를 구축할 수 없음 (불가능)
// 2. 0은 무조건 말단 노드만 올 수 있음, 그 이외의 노드는 오면 안된다.
// 3. 이진 포화 트리는 (2의 제곱 - 1) 개의 노드만을 가지니, 부족하면 앞에 0을 붙여서 추가하자.

function solution(numbers) {
  // 포화 이진 트리로서 가능한 문자열의 모든 길이를 구한다.
  // 10^15의 근삿값은 2^50 이므로, 50개 이내에 적절한 이진트리의 길이를 구할 수 있다.
  const possibleBinaryTreeLength = [...Array(50).keys()]
    .slice(1)
    .map((x) => 2 ** x - 1);

  let binarys = numbers.map((number) => number.toString(2));

  let answer = [];
  for (let binary of binarys) {
    const currentLength = binary.length;
    for (const binaryLength of possibleBinaryTreeLength) {
      // 포화 이진트리를 이루기 위한 길이를 구했다면, 그만큼 0을 추가해준다.
      if (binaryLength >= currentLength) {
        binary = binary.padStart(binaryLength, "0");
        break;
      }
    }
    answer.push(divideTree(binary) ? 1 : 0);
  }

  return answer;

  function divideTree(binary) {
    const currentLength = binary.length;
    // 현재 트리의 길이가 1이거나, 전부 0 혹은 1로만 이루어진 경우라면 true
    const isAllSame = new Set(binary.split("")).size === 1;
    if (currentLength === 1 || isAllSame) {
      return true;
    }

    const middleIndex = Math.floor(currentLength / 2);
    // 루트 노드가 0이라면 false를 반환해야 한다.
    if (binary[middleIndex] == "0") return false;
    // 트리의 길이가 1이 아니라면, 또 중간을 나눠서 분할 재귀를 시행한다.
    return (
      divideTree(binary.slice(0, middleIndex)) &&
      divideTree(binary.slice(middleIndex + 1))
    );
  }
}

console.log(solution([63, 111, 95]));
