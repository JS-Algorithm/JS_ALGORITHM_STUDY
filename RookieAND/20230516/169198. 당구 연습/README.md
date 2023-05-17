# [unrated] 당구 연습 - 169198 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/169198) 

### 성능 요약

메모리: 34.2 MB, 시간: 0.69 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

Empty

### 문제 설명

<p>프로그래머스의 마스코트인 머쓱이는 최근 취미로 당구를 치기 시작했습니다. </p>

<p>머쓱이는 손 대신 날개를 사용해야 해서 당구를 잘 못 칩니다. 하지만 끈기가 강한 머쓱이는 열심히 노력해서 당구를 잘 치려고 당구 학원에 다니고 있습니다.</p>

<p>오늘도 당구 학원에 나온 머쓱이에게 당구 선생님이"원쿠션"(당구에서 공을 쳐서 벽에 맞히는 걸 쿠션이라고 부르고, 벽에 한 번 맞힌 후 공에 맞히면 원쿠션이라고 부릅니다) 연습을 하라면서 당구공의 위치가 담긴 리스트를 건네줬습니다. 리스트에는 머쓱이가 맞춰야 하는 공들의 위치가 담겨있습니다. 머쓱이는 리스트에 담긴 각 위치에 순서대로 공을 놓아가며 "원쿠션" 연습을 하면 됩니다. 이때, 머쓱이는 항상 같은 위치에 공을 놓고 쳐서 리스트에 담긴 위치에 놓인 공을 맞춥니다. </p>

<p>머쓱이와 달리 최근 취미로 알고리즘 문제를 풀기 시작한 당신은, 머쓱이가 친 공이 각각의 목표로한 공에 맞을 때까지 최소 얼마의 거리를 굴러가야 하는지가 궁금해졌습니다.</p>

<p>당구대의 가로 길이 <code>m</code>, 세로 길이 <code>n</code>과 머쓱이가 쳐야 하는 공이 놓인 위치 좌표를 나타내는 두 정수 <code>startX</code>, <code>startY</code>, 그리고 매 회마다 목표로 해야하는 공들의 위치 좌표를 나타내는 정수 쌍들이 들어있는 2차원 정수배열 <code>balls</code>가 주어집니다. "원쿠션" 연습을 위해 머쓱이가 공을 적어도 벽에 한 번은 맞춘 후 목표 공에 맞힌다고 할 때, 각 회마다 머쓱이가 친 공이 굴러간 거리의 최솟값의 제곱을 배열에 담아 return 하도록 solution 함수를 완성해 주세요.</p>

<p>단, 머쓱이가 친 공이 벽에 부딪힐 때 진행 방향은 항상 입사각과 반사각이 동일하며, 만약 꼭짓점에 부딪힐 경우 진입 방향의 반대방향으로 공이 진행됩니다. 공의 크기는 무시하며, 두 공의 좌표가 정확히 일치하는 경우에만 두 공이 서로 맞았다고 판단합니다. 공이 목표 공에 맞기 전에 멈추는 경우는 없으며, 목표 공에 맞으면 바로 멈춘다고 가정합니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/7eeef483-ac96-43ed-8453-2eae7a9589ee/bilex1.drawio%20%2815%29.png" title="" alt="bilex1.drawio \(15\).png"></p>

<p>위 그림은 친 공이 벽에 맞았을 때의 움직임을 나타낸 그림입니다. 치기 전 공의 위치가 점 A입니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/10b87f8d-9c76-4e38-acb9-457c5403150d/bilex1.drawio%20%2819%29.png" title="" alt="bilex1.drawio \(19\).png"></p>

<p>위 그림은 친 공이 꼭짓점에 맞았을 때의 움직임을 나타낸 그림입니다. 치기 전 공의 위치가 점 A입니다.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>3 ≤ <code>m</code>, <code>n</code> ≤ 1,000</li>
<li>0 &lt; <code>startX</code> &lt; <code>m</code></li>
<li>0 &lt; <code>startY</code> &lt; <code>n</code></li>
<li>2 ≤ <code>balls</code>의 길이 ≤ 1,000</li>
<li><code>balls</code>의 원소는 [a, b] 형태입니다.

<ul>
<li>a, b는 머쓱이가 맞춰야 할 공이 놓인 좌표를 의미합니다.</li>
<li>0 &lt; a &lt; <code>m</code>, 0 &lt; b &lt; <code>n</code></li>
<li>(a, b) = ( <code>startX</code>, <code>startY</code> )인 입력은 들어오지 않습니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>m</th>
<th>n</th>
<th>startX</th>
<th>startY</th>
<th>balls</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>10</td>
<td>10</td>
<td>3</td>
<td>7</td>
<td>[[7, 7], [2, 7], [7, 3]]</td>
<td>[52, 37, 116]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><p>첫 번째 예시의 첫번째 공에 대한 그림은 다음과 같습니다.<br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/b6cbbb94-c530-4ce6-83bf-3340fe140b19/ball0.png" title="" alt="ball0.png"></p></li>
<li><p>당구대의 좌측 하단 좌표가 (0, 0) 입니다. </p></li>
<li><p>점 A는 머쓱이가 칠 공이 놓인 위치입니다.</p></li>
<li><p>점 A → 점[0] : 점선을 따라 이동하면 거리의 제곱이 52로 최소가 됩니다.</p></li>
<li><p>같은 예시의 두 번째 공에 대한 그림은 다음과 같습니다.<br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/abd94a34-92b4-4143-934c-4e2de3065558/ball1.png" title="" alt="ball1.png"></p></li>
<li><p>점 A → 점[1] : 점선을 따라 이동하면 거리의 제곱이 37로 최소가 됩니다.</p>

<ul>
<li>점 A에 놓인 공을 왼쪽 방향으로 x축과 수평이 되도록 보내면 벽에 맞고 점 [1]에 닿아 이동 거리가 더 짧아보이지만, A가 벽으로 이동하는 경로에 점 [1]이 있으므로, 벽에 맞기전에 공에 먼저 맞게 됩니다.</li>
</ul></li>
<li><p>같은 예시의 세 번째 공에 대한 그림은 다음과 같습니다.<br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/752d0b95-856f-40fc-85a1-e39d207e0075/ball2.png" title="" alt="ball2.png"></p></li>
<li><p>점 A → 점[2] : 점선을 따라 이동하면 거리의 제곱이 116으로 최소가 됩니다.</p></li>
<li><p>따라서 [52, 37, 116]을 return 합니다.</p></li>
</ul>

<hr>

<p>※ 공지 - 2023년 3월 20일 문제 난이도가 Lv. 1 → Lv. 2로 변경되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges