function timeToMin(time) {
  const [hh, mm] = time.split(':').map(Number);
  return hh * 60 + mm;
}

function solution(plans) {
  const stack = [];
  const sortedPlans = plans.map(([subject, time, count]) => [subject, timeToMin(time), Number(count)]).sort((a, b) => b[1] - a[1]);

  while (sortedPlans.length) {
    const [subject, time, count] = sortedPlans.pop();

    stack.forEach((val, idx) => {
      if (time < val[1]) stack[idx][1] += count;
    });
    stack.push([subject, time + count]);
  }
  const answer = stack.sort((a, b) => a[1] - b[1]).map((val) => val[0]);
  return answer;
}
