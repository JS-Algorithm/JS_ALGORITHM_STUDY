function solution(info, edges) {
  let answer = 0;
  let connectedNode = Array.from({length: info.length}, () => []);

  edges.forEach(([from, to]) => connectedNode[from].push(to));

  function dfs(currentNode, sheep, wolf, possible) {
    let newPossibles = [...possible];
    let currentIndex = newPossibles.indexOf(currentNode);

    info[currentNode] ? wolf++ : sheep++;

    answer = Math.max(answer, sheep);

    if (sheep === wolf) return;

    newPossibles.push(...connectedNode[currentNode]);
    newPossibles.splice(currentIndex, 1);

    for (const nextNode of newPossibles) {
      dfs(nextNode, sheep, wolf, newPossibles);
    }
  }

  dfs(0, 0, 0, [0]);

  return answer;
}
