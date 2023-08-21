function solution(msg) {
    const dictionary = new Map();
    for (let i = 1; i <= 26; i++) {
        dictionary.set(String.fromCharCode(64 + i), i);
    }
    
    const answer = [];
    let index = 27;
    
    for (let i = 0; i < msg.length; ) {
        let current = msg[i];
        let nextIndex = i + 1;
        
        while (nextIndex <= msg.length) {
            const combined = current + msg[nextIndex];
            if (dictionary.has(combined)) {
                current = combined;
                nextIndex++;
            } else {
                break;
            }
        }
        
        answer.push(dictionary.get(current));
        
        if (nextIndex <= msg.length) {
            dictionary.set(current + msg[nextIndex], index);
            index++;
        }
        
        i = nextIndex;
    }
    
    return answer;
}