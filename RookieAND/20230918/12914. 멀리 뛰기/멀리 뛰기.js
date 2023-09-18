// 규칙을 찾아보면 1, 2, 3, 5, 8... 순으로 방법이 증가함을 알 수 있다 (피보나치 수열)
// N = 2000 이므로 메모이제이션을 통해 1234567을 나눈 나머지를 저장하여 최적화 해보자.
function solution(n) {
    
    // 예외 : n 이 3 이하일 경우 n 이 답이다. 빠른 return
    if (n < 4) return n;
    
    const memoize = Array.from({length : n + 1}, () => 0);
    memoize[1] = 1;
    memoize[2] = 2;

    
    for (let i = 1; i <= n - 2; i++) {
        memoize[i + 2] = (memoize[i] + memoize[i + 1]) % 1234567;
    }
    
    const answer = memoize[n];
    
    return answer;
}