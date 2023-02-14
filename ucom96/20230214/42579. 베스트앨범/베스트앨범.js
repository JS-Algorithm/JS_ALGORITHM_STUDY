function solution(genres, plays) {
  var answer = [];

  //장르별 총 노래 수 파악
  dic = {};
  genres.forEach((genre, i) => (dic[genre] = (dic[genre] || 0) + plays[i]));

  genreNum = {}; //장르별 2개의 노래를 거르기 위한 딕셔너리

  answer = genres
    .map((a, i) => ({ genre: a, songs: plays[i], idx: i }))
    //문제에 제시된 조건 순으로 정렬한다
    .sort((a, b) => {
      //장르별 속한 총 노래수가 많은 순으로 정렬 (내림차순 정렬)
      if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
      //장르 내에서 많이 재생된 노래를 먼저 수록
      if (a.genre === b.genre) return b.songs - a.songs;
      //장르 내에서 재생횟수가 같은 노래 중에서는 고유번호가 낮은 노래 먼저 수록
      return a.idx - b.idx;
    })
    //장르별로 노래 2개씩 걸러내기
    .filter((a, i) => {
      if (genreNum[a.genre] >= 2) return false;
      //Q: 각 장르별로 노래 2개를 걸러내기 위해서는 각 장르별 몇번째 노래인지 알아야하는데 그걸 어떤 변수에 저장?
      //A: 이것 역시 장르별 노래 개수를 저장하는 것이므로 이러한 정보를 저장할 딕셔너리를 하나 사용하여 저장
      genreNum[a.genre] = (genreNum[a.genre] || 0) + 1;
      return true;
    })
    .map((a) => a.idx);

  return answer;
}
