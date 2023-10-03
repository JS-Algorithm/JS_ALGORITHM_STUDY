# [unrated] 점 찍기 - 140107 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/140107) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>좌표평면을 좋아하는 진수는 x축과 y축이 직교하는 2차원 좌표평면에 점을 찍으면서 놀고 있습니다. 진수는 두 양의 정수 <code>k</code>, <code>d</code>가 주어질 때 다음과 같이 점을 찍으려 합니다.</p>

<ul>
<li>원점(0, 0)으로부터 x축 방향으로 <code>a*k</code>(a = 0, 1, 2, 3 ...), y축 방향으로 <code>b*k</code>(b = 0, 1, 2, 3 ...)만큼 떨어진 위치에 점을 찍습니다.</li>
<li>원점과 거리가 <code>d</code>를 넘는 위치에는 점을 찍지 않습니다.</li>
</ul>

<p>예를 들어, <code>k</code>가 2, <code>d</code>가 4인 경우에는 (0, 0), (0, 2), (0, 4), (2, 0), (2, 2), (4, 0) 위치에 점을 찍어 총 6개의 점을 찍습니다.</p>

<p>정수 <code>k</code>와 원점과의 거리를 나타내는 정수 <code>d</code>가 주어졌을 때, 점이 총 몇 개 찍히는지 return 하는 solution 함수를 완성하세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>k</code> ≤ 1,000,000</li>
<li>1 ≤ <code>d</code> ≤ 1,000,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>k</th>
<th>d</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>2</td>
<td>4</td>
<td>6</td>
</tr>
<tr>
<td>1</td>
<td>5</td>
<td>26</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>본문의 예시와 같습니다.</li>
</ul>

<p><strong>입출력 예 #2</strong></p>

<ul>
<li>(0, 0), (0, 1), (0, 2), (0, 3), (0, 4), (0, 5), (1, 0), (1, 1), (1, 2), (1, 3), (1, 4), (2, 0), (2, 1), (2, 2), (2, 3), (2, 4), (3, 0), (3, 1), (3, 2), (3, 3), (3, 4), (4, 0), (4, 1), (4, 2), (4, 3), (5, 0) 위치에 점을 찍을 수 있으며, 총 26개 입니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges