function solution(expression) {
    const op = ["+", "-", "*"];
    const p = [];
    const used = new Array(3).fill(false);
    const temp = [];
  
    function func1(depth) {
      if (depth === 3) {
        p.push(temp.slice());
        return;
      }
  
      for (let i = 0; i < 3; i++) {
        if (!used[i]) {
          used[i] = true;
          temp[depth] = op[i];
          func1(depth + 1);
          used[i] = false;
        }
      }
    }
  
    func1(0);
  
    let maxResult = 0;
  
    for (const perm of p) {
      const tokens = expression.split(/(\D)/);
      for (const op of perm) {
        while (tokens.indexOf(op) !== -1) {
          const index = tokens.indexOf(op);
          const a = parseInt(tokens[index - 1], 10);
          const b = parseInt(tokens[index + 1], 10);
  
          let result;
          if (op === "+") result = a + b;
          else if (op === "-") result = a - b;
          else if (op === "*") result = a * b;
  
          tokens.splice(index - 1, 3, result);
        }
      }
  
      const absoluteResult = Math.abs(tokens[0]);
      maxResult = Math.max(maxResult, absoluteResult);
    }
  
    return maxResult;
  }