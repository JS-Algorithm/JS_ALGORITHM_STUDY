# [unrated] 리코쳇 로봇 - 169199 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/169199) 

### 성능 요약

메모리: 36.4 MB, 시간: 2.79 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

Empty

### 문제 설명

<p>리코쳇 로봇이라는 보드게임이 있습니다. </p>

<p>이 보드게임은 격자모양 게임판 위에서 말을 움직이는 게임으로, 시작 위치에서 목표 위치까지 최소 몇 번만에 도달할 수 있는지 말하는 게임입니다. </p>

<p>이 게임에서 말의 움직임은 상, 하, 좌, 우 4방향 중 하나를 선택해서 게임판 위의 장애물이나 맨 끝에 부딪힐 때까지 미끄러져 이동하는 것을 한 번의 이동으로 칩니다. </p>

<p>다음은 보드게임판을 나타낸 예시입니다.</p>
<div class="highlight"><pre class="codehilite"><code>...D..R
.D.G...
....D.D
D....D.
..D....
</code></pre></div>
<p>여기서 "."은 빈 공간을, "R"은 로봇의 처음 위치를, "D"는 장애물의 위치를, "G"는 목표지점을 나타냅니다.<br>
위 예시에서는 "R" 위치에서 아래, 왼쪽, 위, 왼쪽, 아래, 오른쪽, 위 순서로 움직이면 7번 만에 "G" 위치에 멈춰 설 수 있으며, 이것이 최소 움직임 중 하나입니다.</p>

<p>게임판의 상태를 나타내는 문자열 배열 <code>board</code>가 주어졌을 때, 말이 목표위치에 도달하는데 최소 몇 번 이동해야 하는지 return 하는 solution함수를 완성하세요. 만약 목표위치에 도달할 수 없다면 -1을 return 해주세요.</p>

<hr>

<h5>제한 사항</h5>

<ul>
<li>3 ≤ <code>board</code>의 길이 ≤ 100

<ul>
<li>3 ≤ <code>board</code>의 원소의 길이 ≤ 100</li>
<li><code>board</code>의 원소의 길이는 모두 동일합니다.</li>
<li>문자열은 ".", "D", "R", "G"로만 구성되어 있으며 각각 빈 공간, 장애물, 로봇의 처음 위치, 목표 지점을 나타냅니다.</li>
<li>"R"과 "G"는 한 번씩 등장합니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>board</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]</td>
<td>7</td>
</tr>
<tr>
<td>[".D.R", "....", ".G..", "...D"]</td>
<td>-1</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>문제 설명의 예시와 같습니다.</li>
</ul>

<p>입출력 예 #2</p>
<div class="highlight"><pre class="codehilite"><code>.D.R
....
.G..
...D
</code></pre></div>
<ul>
<li>"R" 위치에 있는 말을 어떻게 움직여도 "G" 에 도달시킬 수 없습니다.</li>
<li>따라서 -1을 return 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges