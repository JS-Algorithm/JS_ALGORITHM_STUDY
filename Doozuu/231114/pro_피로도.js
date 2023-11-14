function solution(k, dungeons) {
  let answer = 0;
  let visited = Array.from({length: dungeons.length}, () => false);

  function dfs(hp, depth) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && hp >= dungeons[i][0]) {
        visited[i] = true;
        dfs(hp - dungeons[i][1], depth + 1);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, depth);
  }
  dfs(k, 0);

  return answer;
}
