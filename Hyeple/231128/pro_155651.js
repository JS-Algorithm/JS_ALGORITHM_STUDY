function solution(bookTime) {
    const time = Array(60 * 24).fill(0);

    for (const [s, e] of bookTime) {
        const start = 60 * parseInt(s.slice(0, 2)) + parseInt(s.slice(3));
        let end = 60 * parseInt(e.slice(0, 2)) + parseInt(e.slice(3)) + 10;

        if (end > 60 * 24 - 1) {
            end = 60 * 24 - 1;
        }

        for (let i = start; i < end; i++) {
            time[i] += 1;
        }
    }

    return Math.max(...time);
}
