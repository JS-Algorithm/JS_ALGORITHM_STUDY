function solution(n, wires) {
  const tree = Array.from({length: n + 1}, () => []);
  for (const wire of wires) {
    const [a, b] = wire;
    tree[a].push(b);
    tree[b].push(a);
  }
  let min = Infinity;

  // 전선 하나 자르기
  for (const cutWire of wires) {
    const visited = new Set(); // 방문한 송전탑 체크용

    const value = [...wires].filter((v) => v[0] !== cutWire[0] || v[1] !== cutWire[1]).shift();
    visited.add(value[0]);
    visited.add(value[1]);
    for (const v of tree[value[0]]) {
      const sorted = [value[0], v].sort((a, b) => a - b);
      if (sorted[0] === cutWire[0] && sorted[1] === cutWire[1]) {
        continue;
      }
      if (!visited.has(v)) {
        visited.add(sorted[0]);
        visited.add(sorted[1]);
        DFS(cutWire, [value[0], v], visited);
      }
    }
    DFS(cutWire, value, visited);
    min = Math.min(Math.abs(n - 2 * visited.size), min);
  }
  function DFS(cutWire, value, visited) {
    const [a, b] = value;
    for (const v of tree[b]) {
      const sorted = [b, v].sort((a, b) => a - b);
      if (sorted[0] === cutWire[0] && sorted[1] === cutWire[1]) {
        continue;
      }
      if (!visited.has(v)) {
        visited.add(sorted[0]);
        visited.add(sorted[1]);
        DFS(cutWire, [b, v], visited);
      }
    }
  }
  return min;
}
