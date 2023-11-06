function solution(N, road, K) {
    const graph = Array.from({ length: N }, () => []);
    for (const [a, b, c] of road) {
        graph[a - 1].push([b - 1, c]);
        graph[b - 1].push([a - 1, c]);
    }

    const visited = new Array(N).fill(false);
    const distances = new Array(N).fill(Number.MAX_VALUE);

    const queue = [];
    queue.push([0, 0]);
    distances[0] = 0;

    while (queue.length > 0) {
        queue.sort((a, b) => a[1] - b[1]);
        const [currentNode, currentDistance] = queue.shift();

        if (visited[currentNode]) continue;

        visited[currentNode] = true;

        for (const [nextNode, nextDistance] of graph[currentNode]) {
            const newDistance = currentDistance + nextDistance;

            if (newDistance < distances[nextNode]) {
                distances[nextNode] = newDistance;
                queue.push([nextNode, newDistance]);
            }
        }
    }

    const count = distances.filter((distance) => distance <= K).length;
    return count;
}
