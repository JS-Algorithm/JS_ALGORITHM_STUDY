# [unrated] 등대 - 133500 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/133500) 

### 성능 요약

메모리: 40.5 MB, 시간: 8.59 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>인천 앞바다에는 1부터 <code>n</code>까지 서로 다른 번호가 매겨진 등대 <code>n</code>개가 존재합니다. 등대와 등대 사이를 오가는 뱃길이 <code>n-1</code>개 존재하여, 어느 등대에서 출발해도 다른 모든 등대까지 이동할 수 있습니다. 등대 관리자 윤성이는 전력을 아끼기 위하여, 이 중 몇 개의 등대만 켜 두려고 합니다. 하지만 등대를 아무렇게나 꺼버리면, 뱃길을 오가는 배들이 위험할 수 있습니다. 한 뱃길의 양쪽 끝 등대 중 적어도 하나는 켜져 있도록 등대를 켜 두어야 합니다.</p>

<p>예를 들어, 아래 그림과 같이 등대 8개와 7개의 뱃길들이 있다고 합시다. 이 경우 1번 등대와 5번 등대 두 개만 켜 두어도 모든 뱃길은 양쪽 끝 등대 중 하나가 켜져 있으므로, 배들은 안전하게 운항할 수 있습니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/f8f83817-2d81-41ec-ab2f-64b19abf7dfb/image7_1.PNG" title="" alt="image7_1.PNG"></p>

<p>등대의 개수 <code>n</code>과 각 뱃길이 연결된 등대의 번호를 담은 이차원 배열 <code>lighthouse</code>가 매개변수로 주어집니다. 윤성이가 켜 두어야 하는 등대 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>2 ≤ <code>n</code> ≤ 100,000</li>
<li><code>lighthouse</code>의 길이 = <code>n – 1</code>

<ul>
<li><code>lighthouse</code> 배열의 각 행 <code>[a, b]</code>는 <code>a</code>번 등대와 <code>b</code>번 등대가 뱃길로 연결되어 있다는 의미입니다.

<ul>
<li>1 ≤ <code>a</code> ≠ <code>b</code> ≤ <code>n</code></li>
<li>모든 등대는 서로 다른 등대로 이동할 수 있는 뱃길이 존재하도록 입력이 주어집니다.</li>
</ul></li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>lighthouse</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>8</td>
<td>[[1, 2], [1, 3], [1, 4], [1, 5], [5, 6], [5, 7], [5, 8]]</td>
<td>2</td>
</tr>
<tr>
<td>10</td>
<td>[[4, 1], [5, 1], [5, 6], [7, 6], [1, 2], [1, 3], [6, 8], [2, 9], [9, 10]]</td>
<td>3</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>본문에서 설명한 예시입니다.</li>
</ul>

<p><strong>입출력 예 #2</strong></p>

<ul>
<li>뱃길은 아래 그림과 같이 연결되어 있습니다. 윤성이가 이중 1, 6, 9번 등대 3개만 켜 두어도 모든 뱃길은 양쪽 끝 등대 중 하나가 켜져 있게 되고, 이때의 등대 개수 3개가 최소가 됩니다.</li>
</ul>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/afbcc08e-99f5-478e-a7d8-3bc4828ef04a/image7_2.PNG" title="" alt="image7_2.PNG"></p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges