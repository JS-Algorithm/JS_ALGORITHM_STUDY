# [level 2] 조이스틱 - 42860 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42860) 

### 성능 요약

메모리: 33.6 MB, 시간: 0.17 ms

### 구분

코딩테스트 연습 > 탐욕법（Greedy）

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2023년 11월 2일 0:46:26

### 문제 설명

<p>조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.<br>
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA</p>

<p>조이스틱을 각 방향으로 움직이면 아래와 같습니다.</p>
<div class="highlight"><pre class="codehilite"><code>▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
</code></pre></div>
<p>예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.</p>
<div class="highlight"><pre class="codehilite"><code>- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
</code></pre></div>
<p>만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.</p>

<h5>제한 사항</h5>

<ul>
<li>name은 알파벳 대문자로만 이루어져 있습니다.</li>
<li>name의 길이는 1 이상 20 이하입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>name</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>"JEROEN"</td>
<td>56</td>
</tr>
<tr>
<td>"JAN"</td>
<td>23</td>
</tr>
</tbody>
      </table>
<p><a href="https://commissies.ch.tudelft.nl/chipcie/archief/2010/nwerc/nwerc2010.pdf" target="_blank" rel="noopener">출처</a></p>

<p>※ 공지 - 2019년 2월 28일 테스트케이스가 추가되었습니다.<br>
※ 공지 - 2022년 1월 14일 지문 수정 및 테스트케이스가 추가되었습니다. 이로 인해 이전에 통과하던 코드가 더 이상 통과하지 않을 수 있습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges