const input = require('fs').readFileSync('/dev/stdin').toString().trimEnd().split('\n');

const [N, L] = input[0].split(' ').map(Number);
const pools = input.slice(1).map((pool) => pool.split(' ').map(Number));

let [checkIdx, answer] = [0, 0];

// 웅덩이를 시작 인덱스 기준으로 정렬, 만약 시작이 같다면 길이가 더 긴 순으로.
pools.sort(([aStart, aEnd], [bStart, bEnd]) => (aStart === bStart ? bEnd - aEnd : aStart - bStart));

pools.forEach(([start, end]) => {
    // 1. 현재 체크한 위치가 웅덩이 시작 지점보다 이전일 경우
    // 웅덩이를 덮기 위해 필요한 널판지 수량을 구해 추가한다.
    if (checkIdx < start) {
        const needPlanks = Math.ceil((end - start) / L);
        answer += needPlanks;

        // 다음 체크 위치를 웅덩이 시작 지점 + (추가된 널빤지 길이) 로 설정
        checkIdx = start + needPlanks * L;
    }
    // 2. 현재 체크한 위치가 웅덩이 시작 지점보다 앞서지만 끝보다 작은 경우.
    // 현재 체크 위치부터 웅덩이가 끝나는 지점까지 필요한 널판지 수량을 구한다.
    else if (checkIdx < end) {
        const needPlanks = Math.ceil((end - checkIdx) / L);
        answer += needPlanks;
        checkIdx += needPlanks * L;
    }
});

console.log(answer);