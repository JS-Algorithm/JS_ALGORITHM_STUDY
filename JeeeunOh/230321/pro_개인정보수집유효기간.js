function solution(today, terms, privacies) {
    var answer = [];
    
    const terms_map = {};
    terms.map((item)=>{
        let [alpha, len] = item.split(' ');
        terms_map[alpha] = +len;
    })
    
    // 오늘 날짜, 약관 유효기간
    const termToDate = (date) => {
        const [year, month, day] = date.split('.').map(Number);
        return (year-1)*28*12 + (month-1)*28 + day;
    }
    
    let today_term = termToDate(today);
    
    privacies.map((pri, idx)=>{
        let [date, alpha] = pri.split(' ');
        let pri_term = termToDate(date);
        
        if( today_term - pri_term >= terms_map[alpha]*28 ){
            answer.push(idx+1)
        }
    })
    
    return answer;
}