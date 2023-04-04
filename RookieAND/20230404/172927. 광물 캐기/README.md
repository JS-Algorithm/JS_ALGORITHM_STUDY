# [unrated] 광물 캐기 - 172927 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/172927) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.26 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>마인은 곡괭이로 광산에서 광석을 캐려고 합니다. 마인은 다이아몬드 곡괭이, 철 곡괭이, 돌 곡괭이를 각각 0개에서 5개까지 가지고 있으며, 곡괭이로 광물을 캘 때는 피로도가 소모됩니다. 각 곡괭이로 광물을 캘 때의 피로도는 아래 표와 같습니다.</p>

<p><img src="https://user-images.githubusercontent.com/62426665/217975815-63c58d04-0421-4c39-85ce-17613b9c9389.png" title="" alt="image"></p>

<p>예를 들어, 철 곡괭이는 다이아몬드를 캘 때 피로도 5가 소모되며, 철과 돌을 캘때는 피로도가 1씩 소모됩니다. 각 곡괭이는 종류에 상관없이 광물 5개를 캔 후에는 더 이상 사용할 수 없습니다.</p>

<p>마인은 다음과 같은 규칙을 지키면서 최소한의 피로도로 광물을 캐려고 합니다.</p>

<ul>
<li>사용할 수 있는 곡괭이중 아무거나 하나를 선택해 광물을 캡니다.</li>
<li>한 번 사용하기 시작한 곡괭이는 사용할 수 없을 때까지 사용합니다.</li>
<li>광물은 주어진 순서대로만 캘 수 있습니다.</li>
<li>광산에 있는 모든 광물을 캐거나, 더 사용할 곡괭이가 없을 때까지 광물을 캡니다.</li>
</ul>

<p>즉, 곡괭이를 하나 선택해서 광물 5개를 연속으로 캐고, 다음 곡괭이를 선택해서 광물 5개를 연속으로 캐는 과정을 반복하며, 더 사용할 곡괭이가 없거나 광산에 있는 모든 광물을 캘 때까지 과정을 반복하면 됩니다.</p>

<p>마인이 갖고 있는 곡괭이의 개수를 나타내는 정수 배열 <code>picks</code>와 광물들의 순서를 나타내는 문자열 배열 <code>minerals</code>가 매개변수로 주어질 때, 마인이 작업을 끝내기까지 필요한 최소한의 피로도를 return 하는 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li><code>picks</code>는 [dia, iron, stone]과 같은 구조로 이루어져 있습니다.

<ul>
<li>0 ≤ dia, iron, stone ≤ 5</li>
<li>dia는 다이아몬드 곡괭이의 수를 의미합니다.</li>
<li>iron은 철 곡괭이의 수를 의미합니다.</li>
<li>stone은 돌 곡괭이의 수를 의미합니다.</li>
<li>곡괭이는 최소 1개 이상 가지고 있습니다.</li>
</ul></li>
<li>5 ≤ <code>minerals</code>의 길이 ≤ 50

<ul>
<li><code>minerals</code>는 다음 3개의 문자열로 이루어져 있으며 각각의 의미는 다음과 같습니다.</li>
<li>diamond : 다이아몬드</li>
<li>iron : 철</li>
<li>stone : 돌</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>picks</th>
<th>minerals</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 3, 2]</td>
<td>["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]</td>
<td>12</td>
</tr>
<tr>
<td>[0, 1, 1]</td>
<td>["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]</td>
<td>50</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<p>다이아몬드 곡괭이로 앞에 다섯 광물을 캐고 철 곡괭이로 남은 다이아몬드, 철, 돌을 1개씩 캐면 12(1 + 1 + 1 + 1+ 1 + 5 + 1 + 1)의 피로도로 캘 수 있으며 이때가 최소값입니다.</p>

<p>입출력 예 #2</p>

<p>철 곡괭이로 다이아몬드 5개를 캐고 돌 곡괭이고 철 5개를 캐면 50의 피로도로 캘 수 있으며, 이때가 최소값입니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges