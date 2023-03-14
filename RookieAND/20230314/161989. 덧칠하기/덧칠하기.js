// n 은 전체 구역의 너비, m 은 롤러의 길이를 의미한다.
// 현재 페인트 롤러가 "위치한 곳" 을 포인터로 놓고, 붓을 칠하면서 포인터를 업데이트 하는 방식으로.
function solution(N, M, section) {
    let [currentRollerIdx, answer] = [0, 0];


    for (const needPainted of section) {
        // 만약 롤러가 칠해야 하는 영역보다 같거나 앞에 있다면, 해당 영역을 기준으로 M칸만큼 칠하자.
        if (currentRollerIdx <= needPainted) {
            currentRollerIdx = needPainted + M;
            answer += 1;
        }
    }
    
    console.log(answer);
    return answer;
}