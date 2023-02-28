const tickets = [
  ["ICN", "A"],
  ["A", "B"],
  ["A", "C"],
  ["C", "A"],
  ["B", "D"],
];

console.log(solution(tickets));

function solution(tickets) {
  const INIT = "ICN";
  const N = tickets.length;
  const portMap = new Map();
  const answer = [];

  // Map에 공항 이름을 키로 티켓 배열을 생성
  // ex: key: "ICN" / value: [{dest: "ATL", used: boolean}, ...]
  tickets.forEach((info) => {
    const [start, dest] = info;

    if (portMap.has(start)) portMap.get(start).push({ dest, used: false });
    else portMap.set(start, [{ dest, used: false }]);
  });

  // "ICN"을 시작점으로 설정.
  const stack = [INIT];

  dfs(0, INIT);

  // 알파벳 순 정렬 후, 첫 원소가 정답.
  return answer.sort()[0].split(" ");

  function dfs(cnt, curr) {
    // 모든 티켓 사용 시 리턴.
    if (cnt === N) {
      answer.push(stack.join(" "));
      return;
    }

    // 예외 처리 : 현재 공항에서 더이상 이동 불가능.
    if (!portMap.has(curr)) return;

    const currTickets = portMap.get(curr);

    // 현재 공항에서 사용 가능한 티켓으로 DFS 호출.
    for (let i = 0; i < currTickets.length; i++) {
      if (currTickets[i].used) continue;

      currTickets[i].used = true;
      stack.push(currTickets[i].dest);

      dfs(cnt + 1, currTickets[i].dest);

      currTickets[i].used = false;
      stack.pop();
    }
  }
}
