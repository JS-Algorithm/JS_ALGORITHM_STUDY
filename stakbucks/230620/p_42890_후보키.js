function solution(relation) {
  let candidates = [];
  let arr = Array(relation[0].length)
    .fill(0)
    .map((i, v) => v);

  // 인덱스 조합하는 함수
  const combinate = (arr, length) => {
    if (length === 1) return arr.map((i) => [i]);
    let result = [];
    arr.forEach((i, v) => {
      const remain = combinate(
        arr.filter((i2, v2) => v2 > v),
        length - 1,
      );
      for (const r of remain) {
        const temp = [i, ...r];
        result.push(temp);
      }
    });
    return result;
  };

  for (let i = 1; i <= relation[0].length; i++) {
    // i는 후보키 배열의 길이

    //길이가 i인 모든 인덱스 조합
    const combinations = combinate(arr, i);

    //각 조합별로 후보키가 가능한지 체크
    for (const combination of combinations) {
      const set = new Set();
      let isUnique = true;
      for (const r of relation) {
        let added = '';
        for (const index of combination) {
          added += '+' + r[index];
        }
        if (set.has(added)) {
          isUnique = false;
        } else {
          set.add(added);
        }
      }
      // 유일성을 만족하는 경우
      if (isUnique) {
        let isCandidate = true;
        // 앞서 확인된 후보키들과 최소성 확인
        for (let i = 0; i < candidates.length; i++) {
          let count = 0;
          for (const c of candidates[i]) {
            if (combination.includes(c)) {
              count++;
            }
          }
          if (count === candidates[i].length) isCandidate = false;
        }
        if (isCandidate) candidates.push(combination);
      }
    }
  }

  return candidates.length;
}
