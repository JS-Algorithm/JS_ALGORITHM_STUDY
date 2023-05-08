function solution(numbers) {
  const answer = [];

  numbers.forEach((num) => {
    answer.push(findCondition(num));
  });

  return answer;

  function findCondition(std) {
    // 인자로 전달된 10진수를 2진수로 변경
    let binary = std.toString(2).split("");

    // 자릿수가 바뀌지 않는 경우
    if (binary.includes("0")) {
      // 끝자리가 1부터 시작하는지 확인하는 flag
      let isOne = false;

      // 2진수의 끝자리부터 확인하며
      // 1. 끝이 0으로 시작하면 단순히 끝의 수를 1로 변경 (ex. 1100 => 1101)
      // 2. 끝이 0으로 시작하지 않으면 처음으로 등장한 0을 기준으로
      // "01" => "10"으로 2개의 숫자 변경 (ex. 1011 => 1101)
      for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === "0") {
          binary[i] = "1";

          if (isOne) {
            binary[i + 1] = "0";
          }

          return parseInt(binary.join(""), 2);
        } else {
          isOne = true;
        }
      }
    }
    // 111, 1111 같이 자릿수가 바뀌는 경우
    // 111 => 1011, 1111 => 10111로 처리
    else {
      const newBinary = new Array(binary.length + 1).fill("1");
      newBinary[1] = "0";

      return parseInt(newBinary.join(""), 2);
    }
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// answer : [ 2,  3, 5,  5,  6, 7, 11, 9, 10, 11]

console.log(solution(numbers));
