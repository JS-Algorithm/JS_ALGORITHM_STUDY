function solution(expression) {
  let operator = expression.replace(/[0-9]/g, '');
  let distinct_operator = [...new Set(operator.split(''))]; // 연산자 종류

  function change(num1, num2, op) {
    return op === '+' ? num1 + num2 : op === '-' ? num1 - num2 : num1 * num2;
  }

  if (distinct_operator.length === 1) {
    // 연산자가 1개일 때 바로 계산
    let op = distinct_operator[0];
    return Math.abs(
      expression
        .split(op)
        .map(Number)
        .reduce((acc, cur) => change(acc, cur, op)),
    );
  } else if (distinct_operator.length === 2) {
    // 연산자가 2개일 때 2가지 연산 후 최대값 반환
    let [op1, op2] = distinct_operator;
    function operate(op1, op2) {
      return expression
        .split(op2)
        .map((el) => {
          return el
            .split(op1)
            .map(Number)
            .reduce((acc, cur) => change(acc, cur, op1));
        })
        .reduce((acc, cur) => change(acc, cur, op2));
    }
    return Math.max(Math.abs(operate(op1, op2)), Math.abs(operate(op2, op1)));
  } else {
    // 연산자가 3개일 때 6가지 연산 후 최대값 반환
    let operator_list = ['*+-', '*-+', '+*-', '+-*', '-*+', '-+*'];
    let answer_list = [];
    operator_list.map((el) => {
      let [op1, op2, op3] = el.split('');
      let candidate = expression
        .split(op1)
        .map((el) => {
          return el
            .split(op2)
            .map((el2) => {
              return el2
                .split(op3)
                .map(Number)
                .reduce((acc, cur) => change(acc, cur, op3));
            })
            .reduce((acc, cur) => change(acc, cur, op2));
        })
        .reduce((acc, cur) => change(acc, cur, op1));
      answer_list.push(Math.abs(candidate));
    });
    return Math.max(...answer_list);
  }
}
