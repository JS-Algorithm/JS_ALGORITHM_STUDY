# [level 2] 2개 이하로 다른 비트 - 77885 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/77885) 

### 성능 요약

메모리: 59.6 MB, 시간: 454.52 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌2

### 채점결과

Empty

### 문제 설명

<p>양의 정수 <code>x</code>에 대한 함수 <code>f(x)</code>를 다음과 같이 정의합니다.</p>

<ul>
<li><code>x</code>보다 크고 <code>x</code>와 <strong>비트가 1~2개 다른</strong> 수들 중에서 제일 작은 수</li>
</ul>

<p>예를 들어, </p>

<ul>
<li><code>f(2) = 3</code> 입니다. 다음 표와 같이 2보다 큰 수들 중에서 비트가 다른 지점이 2개 이하이면서 제일 작은 수가 3이기 때문입니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>수</th>
<th>비트</th>
<th>다른 비트의 개수</th>
</tr>
</thead>
        <tbody><tr>
<td>2</td>
<td><code>000...0010</code></td>
<td></td>
</tr>
<tr>
<td>3</td>
<td><code>000...0011</code></td>
<td>1</td>
</tr>
</tbody>
      </table>
<ul>
<li><code>f(7) = 11</code> 입니다. 다음 표와 같이 7보다 큰 수들 중에서 비트가 다른 지점이 2개 이하이면서 제일 작은 수가 11이기 때문입니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>수</th>
<th>비트</th>
<th>다른 비트의 개수</th>
</tr>
</thead>
        <tbody><tr>
<td>7</td>
<td><code>000...0111</code></td>
<td></td>
</tr>
<tr>
<td>8</td>
<td><code>000...1000</code></td>
<td>4</td>
</tr>
<tr>
<td>9</td>
<td><code>000...1001</code></td>
<td>3</td>
</tr>
<tr>
<td>10</td>
<td><code>000...1010</code></td>
<td>3</td>
</tr>
<tr>
<td>11</td>
<td><code>000...1011</code></td>
<td>2</td>
</tr>
</tbody>
      </table>
<p>정수들이 담긴 배열 <code>numbers</code>가 매개변수로 주어집니다. <code>numbers</code>의 모든 수들에 대하여 각 수의 <code>f</code> 값을 배열에 차례대로 담아 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>numbers</code>의 길이 ≤ 100,000</li>
<li>0 ≤ <code>numbers</code>의 모든 수 ≤ 10<sup>15</sup></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>numbers</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td><code>[2,7]</code></td>
<td><code>[3,11]</code></td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>문제 예시와 같습니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges