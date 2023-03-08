function solution(maps) {
    let queue = [[0, 0]];
    const [maxY, maxX] = [maps.length, maps[0].length];
    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (queue.length > 0) {
        const [ny, nx] = queue.shift();
        for (const [dy, dx] of direction) {
            const [my, mx] = [ny + dy, nx + dx];
            if (my >= 0 && mx >= 0 && my < maxY && mx < maxX) {
                if (maps[my][mx] == 1 || maps[my][mx] > maps[ny][nx] + 1) {
                    queue.push([my, mx]);
                    maps[my][mx] = maps[ny][nx] + 1;
                }
            }
        }
    }
    return maps[maxY - 1][maxX - 1] == 1 ? -1 : maps[maxY - 1][maxX - 1];
}