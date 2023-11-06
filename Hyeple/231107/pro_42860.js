function solution(name) {
    let answer = 0;
    const len = name.length;
    let move = len - 1;

    for (let i = 0; i < len; i++) {
        const charCodeA = "A".charCodeAt(0);
        const charCodeZ = "Z".charCodeAt(0);
        const charCodeCurrent = name.charCodeAt(i);

        answer += Math.min(charCodeCurrent - charCodeA, charCodeZ - charCodeCurrent + 1);

        let next = i + 1;
        while (next < len && name.charAt(next) === "A") {
            next++;
        }

        move = Math.min(move, i * 2 + len - next, (len - next) * 2 + i);
    }
    answer += move;

    return answer;
}
