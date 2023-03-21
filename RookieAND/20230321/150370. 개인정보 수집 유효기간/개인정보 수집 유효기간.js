// 년, 월, 일을 일 단위로 합산하여 계산하는 것이 효율적이다.

function solution(today, terms, privacies) {
    
    // 년도는 2000년부터 시작하므로 2000을 뺀 나머지를 기준으로 합산한다.
    // 한 달은 28일 이므로 1년은 28 x 12 = 336일이다. 이 또한 적용한다.
    function dateToDay(date) {
        const [year, month, day] = date.split(".").map(Number);
        return ((year - 2000) * 336) + (month * 28) + day 
    }
    
    const todayDayAmount = dateToDay(today);
    // 약관 : 저장 기한 (일) 로 Map 에 저장한다.
    const termMap = new Map();
    
    for (const term of terms) {
        const [termCase, termMonth] = term.split(" ");
        termMap.set(termCase, Number(termMonth) * 28);
    }
    
    let answer = [];
    for (const [idx, privacy] of privacies.entries()) {
        const [privacyDate, privacyTerm] = privacy.split(" ");
        // 수집 일자 + 약관 종류에 따른 보관 일수 > 현재 일자 인 경우에만 보관 가능.
        if (dateToDay(privacyDate) + termMap.get(privacyTerm) <= todayDayAmount) {
            answer.push(idx + 1);
        }
    }
    
    return answer;
}