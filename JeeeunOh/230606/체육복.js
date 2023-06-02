function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  lost = lost.filter((lt) => {
    // 1. 도난 당했는데 여벌 있을 때
    if (reserve.indexOf(lt) !== -1) {
      reserve.splice(reserve.indexOf(lt), 1);
      return false;
    }
    return true;
  });
  lost = lost.filter((lt) => {
    // 2. 도난 당했는데 여벌 없을 때
    if (reserve.indexOf(lt - 1) !== -1) {
      // 2-1. 앞 사람한테 빌리기
      reserve.splice(reserve.indexOf(lt - 1), 1);
      return false;
    } else if (reserve.indexOf(lt + 1) !== -1) {
      // 2-2. 뒷 사람한테 빌리기
      reserve.splice(reserve.indexOf(lt + 1), 1);
      return false;
    }
    return true;
  });

  return n - lost.length;
}
