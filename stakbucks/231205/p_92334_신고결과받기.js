function solution(id_list, report, k) {
  const ids = new Map(); // 아이디 별로 신고한 아이디들 기록
  const reportCnt = new Map(); // 아이디 별로 신고당한 횟수 기록

  for (const reportItem of report) {
    const [id, reportedId] = reportItem.split(' ');
    if (ids.get(id).has(reportedId)) continue;
    // [신고한 사람 id, 신고당한 사람 id]
    if (ids.has(id)) {
      const prev = ids.get(id);
      prev.add(reportedId);
    } else {
      ids.set(id, new Set().add(reportedId));
    }
    reportCnt.set(reportedId, reportCnt.has(reportedId) ? reportCnt.get(reportedId) + 1 : 1);
  }

  const suspendedIds = new Set();
  reportCnt.forEach((count, id) => {
    if (count >= k) {
      suspendedIds.add(id);
    }
  });

  console.log(suspendedIds);

  const answer = [];
  for (const id of id_list) {
    const reportedIds = ids.get(id);
    if (reportedIds) {
      console.log(reportedIds);
      let cnt = 0;
      reportedIds.forEach((reportedId) => {
        if (suspendedIds.has(reportedId)) {
          cnt++;
        }
      });
      answer.push(cnt);
    } else {
      answer.push(0);
    }
  }
  return answer;
}
