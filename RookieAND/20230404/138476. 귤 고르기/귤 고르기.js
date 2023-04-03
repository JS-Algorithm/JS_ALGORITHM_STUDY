// 서로 "다른 종류" 의 귤을 최소화 하려면, 결국 가짓수가 많은 귤을 선별해야 한다.
// 근데 원소가 1천만이 넘어서 일일히 배열을 sort 하는 방식은 불가능해 보인다.. 되네?
function solution(k, tangerines) {
    const tangerineMap = new Map();
    for (const tangerine of tangerines) {
        tangerineMap.set(tangerine, tangerineMap.has(tangerine) ? tangerineMap.get(tangerine) + 1 : 1);
    }
    // 귤의 갯수가 많은 순대로 내림차순을 진행한다.
    const tangerineAmount = [...tangerineMap.values()].sort((a, b) => b - a);
    
    let answer = 0;
    // 가장 많은 갯수부터 k를 소거하고, 0 이하로 떨어졌다면 반복을 멈춘다.
    for (const amount of tangerineAmount) {
        if (k <= 0) break;
        k -= amount;
        answer += 1;
    }
    return answer;
}
