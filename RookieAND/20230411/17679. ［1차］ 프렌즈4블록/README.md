# [level 2] [1차] 프렌즈4블록 - 17679 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/17679) 

### 성능 요약

메모리: 38 MB, 시간: 10.20 ms

### 구분

코딩테스트 연습 > 2018 KAKAO BLIND RECRUITMENT

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<h2>프렌즈4블록</h2>

<p>블라인드 공채를 통과한 신입 사원 라이언은 신규 게임 개발 업무를 맡게 되었다. 이번에 출시할 게임 제목은 "프렌즈4블록".<br>
같은 모양의 카카오프렌즈 블록이 2×2 형태로 4개가 붙어있을 경우 사라지면서 점수를 얻는 게임이다.</p>

<p><img src="http://t1.kakaocdn.net/welcome2018/pang1.png" title="Friends 4 block!" alt="board map"><br>
만약 판이 위와 같이 주어질 경우, 라이언이 2×2로 배치된 7개 블록과 콘이 2×2로 배치된 4개 블록이 지워진다. 같은 블록은 여러 2×2에 포함될 수 있으며, 지워지는 조건에 만족하는 2×2 모양이 여러 개 있다면 한꺼번에 지워진다.</p>

<p><img src="http://t1.kakaocdn.net/welcome2018/pang2.png" title="Friends 4 block!" alt="board map"></p>

<p>블록이 지워진 후에 위에 있는 블록이 아래로 떨어져 빈 공간을 채우게 된다.</p>

<p><img src="http://t1.kakaocdn.net/welcome2018/pang3.png" title="Friends 4 block!" alt="board map"></p>

<p>만약 빈 공간을 채운 후에 다시 2×2 형태로 같은 모양의 블록이 모이면 다시 지워지고 떨어지고를 반복하게 된다.<br>
<img src="http://t1.kakaocdn.net/welcome2018/pang4.png" title="Friends 4 block!" alt="board map"></p>

<p>위 초기 배치를 문자로 표시하면 아래와 같다.</p>
<div class="highlight"><pre class="codehilite"><code>TTTANT
RRFACC
RRRFCC
TRRRAA
TTMMMF
TMMTTJ
</code></pre></div>
<p>각 문자는 라이언(R), 무지(M), 어피치(A), 프로도(F), 네오(N), 튜브(T), 제이지(J), 콘(C)을 의미한다</p>

<p>입력으로 블록의 첫 배치가 주어졌을 때, 지워지는 블록은 모두 몇 개인지 판단하는 프로그램을 제작하라.</p>

<h3>입력 형식</h3>

<ul>
<li>입력으로 판의 높이 <code>m</code>, 폭 <code>n</code>과 판의 배치 정보 <code>board</code>가 들어온다.</li>
<li>2 ≦ <code>n</code>, <code>m</code> ≦ 30</li>
<li><code>board</code>는 길이 <code>n</code>인 문자열 <code>m</code>개의 배열로 주어진다. 블록을 나타내는 문자는 대문자 A에서 Z가 사용된다.</li>
</ul>

<h3>출력 형식</h3>

<p>입력으로 주어진 판 정보를 가지고 몇 개의 블록이 지워질지 출력하라.</p>

<h3>입출력 예제</h3>
<table class="table">
        <thead><tr>
<th>m</th>
<th>n</th>
<th>board</th>
<th>answer</th>
</tr>
</thead>
        <tbody><tr>
<td>4</td>
<td>5</td>
<td>["CCBDE", "AAADE", "AAABF", "CCBBF"]</td>
<td>14</td>
</tr>
<tr>
<td>6</td>
<td>6</td>
<td>["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]</td>
<td>15</td>
</tr>
</tbody>
      </table>
<h3>예제에 대한 설명</h3>

<ul>
<li>입출력 예제 1의 경우, 첫 번째에는 A 블록 6개가 지워지고, 두 번째에는 B 블록 4개와 C 블록 4개가 지워져, 모두 14개의 블록이 지워진다.</li>
<li>입출력 예제 2는 본문 설명에 있는 그림을 옮긴 것이다. 11개와 4개의 블록이 차례로 지워지며, 모두 15개의 블록이 지워진다.</li>
</ul>

<p><a href="http://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/" target="_blank" rel="noopener">해설 보러가기</a></p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges