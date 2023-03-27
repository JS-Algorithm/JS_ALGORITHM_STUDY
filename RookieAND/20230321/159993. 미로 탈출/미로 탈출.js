// 1. 시작 지점에서 레버까지 가는 가장 최적의 경로 길이를 구한다.
// 2. 레버 위치에서 출구까지 가는 가장 최적의 경로 길이를 구한다.
function solution(maps) {
    
    // BFS 탐색을 위한 함수
    function bfs(startLoc, endLoc, matrix) {
        const [width, height] = [maps.length, maps[0].length];
        const [[startY, startX], [endY, endX]] = [startLoc, endLoc];
        const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]; 
        
        const visited = Array.from(Array(width), () => Array(height).fill(-1));
        visited[startY][startX] = 0;
        
        const queue = [startLoc];
        while (queue.length > 0) {
            const [ny, nx] = queue.shift();
            for (const [dy, dx] of direction) {
                const [my, mx] = [ny + dy, nx + dx];
                if (my >= 0 && my < width && mx >= 0 && mx < height) {
                    if (matrix[my][mx] !== 'X' && visited[my][mx] < 0) {
                        queue.push([my, mx]);
                        visited[my][mx] = visited[ny][nx] + 1;
                    }
                }
            }
        }
        return visited[endY][endX];
    }
    
    let start, lever, end;
    const matrix = []
    maps.forEach((row, rowIdx) => {
        matrix.push(Array.from(row));
        for (const [colIdx, col] of Array.from(row).entries()) {
            switch (col) {
                case 'S':
                    start = [rowIdx, colIdx];
                    break
                case 'E':
                    end = [rowIdx, colIdx];
                    break
                case 'L':
                    lever = [rowIdx, colIdx];
                    break
            }
        }
    })

    // 시작부터 레버까지, 레버부터 종료까지 경로를 탐색
    const startToLever = bfs(start, lever, matrix);
    const leverToEnd = bfs(lever, end, matrix);

    return startToLever !== -1 && leverToEnd !== -1 ? startToLever + leverToEnd : -1;
}