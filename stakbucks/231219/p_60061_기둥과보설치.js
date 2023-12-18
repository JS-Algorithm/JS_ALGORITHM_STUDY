const PILLAR = 0; // 기둥
const BEAM = 1; // 보

const SET = 1; // 설치
const REMOVE = 0; // 삭제

function solution(n, build_frame) {
  const pillars = new Set();
  const beams = new Set();
  build_frame.forEach(([x, y, a, b]) => {
    if (a === PILLAR) {
      if (b === SET && canSetPillar(x, y)) pillars.add(JSON.stringify([x, y]));
      if (b === REMOVE && canRemovePillar(x, y)) pillars.delete(JSON.stringify([x, y]));
    }

    if (a === BEAM) {
      if (b === SET && canSetBeam(x, y)) beams.add(JSON.stringify([x, y]));
      if (b === REMOVE && canRemoveBeam(x, y)) beams.delete(JSON.stringify([x, y]));
    }
  });

  return [...[...pillars].map((pillar) => [...JSON.parse(pillar), PILLAR]), ...[...beams].map((beam) => [...JSON.parse(beam), BEAM])].sort((a, b) => {
    const [aX, aY] = a;
    const [bX, bY] = b;
    if (aX === bX) {
      if (aY === bY) {
        return 1;
      }
      return aY - bY;
    }
    return aX - bX;
  });

  function canSetPillar(x, y) {
    // 바닥인 경우
    if (y === 0) {
      return true;
    }
    // 보 위에 있는 경우
    if (beams.has(JSON.stringify([x, y])) || beams.has(JSON.stringify([x - 1, y]))) {
      return true;
    }
    // 다른 기둥 위에 위치한 경우
    if (pillars.has(JSON.stringify([x, y - 1]))) return true;

    return false;
  }

  function canSetBeam(x, y) {
    // 기둥 위에 위치한 경우
    if (pillars.has(JSON.stringify([x, y - 1])) || pillars.has(JSON.stringify([x + 1, y - 1]))) return true;
    // 양 끝에 보가 연결된 경우
    if (beams.has(JSON.stringify([x - 1, y])) && beams.has(JSON.stringify([x + 1, y]))) return true;

    return false;
  }
  function canRemovePillar(x, y) {
    pillars.delete(JSON.stringify([x, y]));

    // 기둥 위에 보가 존재하는 경우 (왼쪽 끝)
    if (beams.has(JSON.stringify([x, y + 1])) && !canSetBeam(x, y + 1)) {
      pillars.add(JSON.stringify([x, y]));
      return false;
    }

    // 기둥 위에 보가 존재하는 경우 (오른쪽 끝)
    if (beams.has(JSON.stringify([x - 1, y + 1])) && !canSetBeam(x - 1, y + 1)) {
      pillars.add(JSON.stringify([x, y]));
      return false;
    }

    // 기둥 위에 기둥이 존재하는 경우
    if (pillars.has(JSON.stringify([x, y + 1])) && !canSetPillar(x, y + 1)) {
      pillars.add(JSON.stringify([x, y]));
      return false;
    }

    pillars.add(JSON.stringify([x, y]));

    return true;
  }

  function canRemoveBeam(x, y) {
    beams.delete(JSON.stringify([x, y]));

    // 보 왼쪽에 보가 존재하는 경우
    if (beams.has(JSON.stringify([x - 1, y])) && !canSetBeam(x - 1, y)) {
      beams.add(JSON.stringify([x, y]));
      return false;
    }

    // 보 오른쪽에 보가 존재하는 경우
    if (beams.has(JSON.stringify([x + 1, y])) && !canSetBeam(x + 1, y)) {
      beams.add(JSON.stringify([x, y]));
      return false;
    }

    // 보 위에 기둥이 존재하는 경우(왼쪽 끝)
    if (pillars.has(JSON.stringify([x, y])) && !canSetPillar(x, y)) {
      beams.add(JSON.stringify([x, y]));
      return false;
    }

    // 보 위에 기둥이 존재하는 경우 (오른쪽 끝)
    if (pillars.has(JSON.stringify([x + 1, y])) && !canSetPillar(x + 1, y)) {
      beams.add(JSON.stringify([x, y]));
      return false;
    }

    beams.add(JSON.stringify([x, y]));

    return true;
  }
}
