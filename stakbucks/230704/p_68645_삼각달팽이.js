class Row {
  constructor(index) {
    this.array = Array(index + 1).fill(0);
    this.front = 0;
    this.rear = index;
  }
  has_space() {
    if (this.front <= this.rear) return true;
    return false;
  }
  push_front(value) {
    this.array[this.front++] = value;
  }
  push_rear(value) {
    this.array[this.rear--] = value;
  }
  fill(count) {
    while (this.has_space()) {
      this.array[this.front++] = count++;
    }
    return count;
  }
}

function solution(n) {
  let count = 1;

  const getMaxCount = (n) => {
    if (n === 1) return 1;
    return n + getMaxCount(n - 1);
  };

  const rows = [];

  for (let i = 0; i < n; i++) {
    rows.push(new Row(i));
  }

  while (count <= getMaxCount(n)) {
    // 맨 앞 칸 채우기
    for (let i = 0; i < n; i++) {
      if (rows[i].has_space()) {
        rows[i].push_front(count++);
      }
    }
    // 맨 아래 줄 전부 채우기
    for (let i = n - 1; i >= 0; i--) {
      if (rows[i].has_space()) {
        count = rows[i].fill(count);
        break;
      }
    }
    //맨 끝 칸 채우기
    for (let i = n - 1; i >= 0; i--) {
      if (rows[i].has_space()) {
        rows[i].push_rear(count++);
      }
    }
  }
  const answer = [];
  for (const row of rows) {
    answer.push(row.array);
  }
  return answer.flat();
}
