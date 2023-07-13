function solution(word) {
  const result = [];
  const str = '';
  for (let i = 1; i <= 5; i++) {
    dfs(str, i, result);
  }
  return result.sort().indexOf(word) + 1;
}

function dfs(str, length, result) {
  const words = ['A', 'E', 'I', 'O', 'U'];
  if (length === str.length) {
    result.push(str);
    return;
  }
  words.forEach((el) => dfs(el + str, length, result));
}

// 문자열에 "A","E","I","O","U"를 붙여 가면서 길이가 1,2,,,5가 되는 경우를 모두 구해준다.
// 사전순으로 나타내기 위해 정렬해서 위치를 구해준다.
