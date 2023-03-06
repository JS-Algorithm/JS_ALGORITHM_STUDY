const input = require('fs').readFileSync('/dev/stdin').toString().trimEnd().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// A X B 사이즈의 2차원 배열을 생성한다.
const visited = Array.from(new Array(A + 1), () => new Array(B + 1).fill(false));
visited[0][0] = true;
const answer = new Set([C]);

const bfs = () => {
    // 현재 A, B에 남은 물의 양을 저장하는 queue
    const queue = [[0, 0]];
    let movedWater = 0;

    // 두 물통의 물을 이동시키는 함수 pourWater
    const pourWater = (x, y) => {
        if (!visited[x][y]) {
            visited[x][y] = true;
            queue.push([x, y]);
        }
    };

    while (queue.length) {
        const [curA, curB] = queue.shift();

        // 물의 총량은 C 물통의 용량이므로 현재 C 물통의 물의 양을 도출.
        const curC = C - curA - curB;

        // A 물통이 빈 경우, 현재 C 물통에 남은 물의 양을 저장
        if (curA === 0) answer.add(curC);

        // 1. A => B 로 물 이동
        // 현재 남은 A의 물의 양이 더 작은지, B 물통의 잔여 용량이 더 작은지를 확인하고
        // A 물통의 남은 물을 완전히 부을지, B 물통이 꽉 채워질때까지 완전히 부을지 결정.
        movedWater = Math.min(curA, B - curB);
        pourWater(curA - movedWater, curB + movedWater);

        // 2. A => C 로 물 이동
        movedWater = Math.min(curA, C - curC);
        pourWater(curA - movedWater, curB); // visited는 A와 B 물통만 고려하기에, B 물통의 변화가 없다면 그대로 진행

        // 3. B => A 로 물 이동
        movedWater = Math.min(curB, A - curA);
        pourWater(curA + movedWater, curB - movedWater);

        // 4. B => C 로 물 이동
        movedWater = Math.min(curB, C - curC);
        pourWater(curA, curB - movedWater);

        // 5. C => A 로 물 이동
        movedWater = Math.min(curC, A - curA);
        pourWater(curA + movedWater, curB);

        // 6. C => B 로 물 이동
        movedWater = Math.min(curC, B - curB);
        pourWater(curA, curB + movedWater);
    }
    // 크기 순대로 정렬
    console.log(
        Array.from(answer)
            .sort((a, b) => a - b)
            .join(' ')
    );
};

bfs();
