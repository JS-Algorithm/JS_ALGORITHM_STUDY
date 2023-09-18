function solution(board) {
    let startPos;
    let goalPos;

    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const [MATRIX_WIDTH, MATRIX_HEIGHT] = [board[0].length, board.length];

    const matrix = board.map((row, rowIndex) =>
        row.split("").map((col, colIndex) => {
            switch (col) {
                case 'R': {
                    startPos = [rowIndex, colIndex];
                    break;
                }
                case 'G': {
                    goalPos = [rowIndex, colIndex];
                    break;
                }
            }
            return col;
        }));

    // 해당 좌표가 영역 밖을 벗어났거나 장애물에 부딪혔는지 판별하는 함수 possibleToMove
    const checkMove = (y, x) => {
        return y >= 0 && x >= 0 && y < MATRIX_HEIGHT && x < MATRIX_WIDTH && matrix[y][x] !== 'D'
    }

    const visited = Array.from({ length: MATRIX_HEIGHT }, () => new Array(MATRIX_WIDTH).fill(false))
    const [startY, startX] = startPos;
    visited[startY][startX] = true;

    let answer = -1;
    const queue = [[startY, startX, 0]];

    while (queue.length) {
            let [ny, nx, movement] = queue.shift();

            // 골인했다면 정답을 return 하도록 함.
            if (matrix[ny][nx] === 'G') {
                answer = movement;
            }

            direction.forEach(([dy, dx]) => {
                let [my, mx] = [ny, nx];
                while (checkMove(my, mx)) {
                    my += dy;
                    mx += dx;
                };
                my -= dy;
                mx -= dx;

                // 아직 방문하지 않은 좌표라면 queue에 추가.
                if (!visited[my][mx]) {
                    visited[my][mx] = true;
                    queue.push([my, mx, movement + 1]);
                }
            })
    }

    return answer;
}