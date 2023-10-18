const MULTIPLY = '*';
const ADD = '+';
const SUBTRACT = '-';

const orders = [
  [MULTIPLY, ADD, SUBTRACT],
  [MULTIPLY, SUBTRACT, ADD],
  [ADD, MULTIPLY, SUBTRACT],
  [ADD, SUBTRACT, MULTIPLY],
  [SUBTRACT, MULTIPLY, ADD],
  [SUBTRACT, ADD, MULTIPLY],
];

function solution(expression) {
  let answer = 0;
  const operands = expression.split(/[+,*,-]/).map(Number);
  const operators = expression.split('').filter((v) => v === '+' || v === '*' || v === '-');

  for (const order of orders) {
    let operandsCopy = [...operands];
    let operatorsCopy = [...operators];

    for (const operator of order) {
      let i = operatorsCopy.indexOf(operator);

      // 계산해야 하는 연산자가 남아 있을 때까지 반복
      while (i !== -1) {
        const result = calculate(operator, operandsCopy[i], operandsCopy[i + 1]);

        operandsCopy.splice(i, 2, result);
        operatorsCopy.splice(i, 1);

        i = operatorsCopy.indexOf(operator);
      }
    }
    answer = Math.max(answer, Math.abs(operandsCopy[0]));
  }
  return answer;

  function calculate(operator, op1, op2) {
    switch (operator) {
      case MULTIPLY:
        return op1 * op2;
      case ADD:
        return op1 + op2;
      case SUBTRACT:
        return op1 - op2;
    }
  }
}
