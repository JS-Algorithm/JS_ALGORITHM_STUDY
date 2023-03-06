function solution(tickets) {
    let answer = [];
    const visited = [];

    // 알파벳 순으로 티켓을 먼저 정렬
    tickets.sort();

    const ticketAmount = tickets.length;

    const dfs = (currentAirport, visitCount) => {
        // 일단 공항을 방문했다고 가정하고 배열에 값을 추가.
        answer.push(currentAirport);
        // 모든 공항을 모두 방문했다면 재귀 종료
        if (visitCount === ticketAmount) {
            return true;
        }

        // 그렇지 않을 경우, 현재 공항에서 이동 가능한 경로를 탐색
        for (let idx = 0; idx < ticketAmount; idx++) {
            // 현재 공항이 아직 방문되지 않았다면 방문 가능.
            if (!visited[idx] && tickets[idx][0] === currentAirport) {
                visited[idx] = true;
                // 계속 재귀를 반복하여 종착역까지 도착하여 true를 리턴하는지 체크.
                if (dfs(tickets[idx][1], visitCount + 1)) return true;

                // 종착역 도달에 실패했을 경우, 반복 처리를 번복시켜야 함.
                visited[idx] = false;
            }
        }

        // 여기에 코드가 도달했다면 경로 탐색에 실패했다는 의미이므로 이전으로 회귀.
        answer.pop();
        return false;
    };

    dfs('ICN', 0);
    return answer;
}