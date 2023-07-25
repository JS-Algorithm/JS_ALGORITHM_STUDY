const input = require('fs').readFileSync('ex.txt').toString().trim().split('\n');

const strs = input.slice(1);

// 정규 표현식 이용한 풀이
strs.map((str) => {
  if (/^(100+1+|01)+$/.test(str)) console.log('YES');
  else console.log('NO');
});
