# [level 2] n^2 배열 자르기 - 87390 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/87390?language=javascript) 

### 성능 요약

메모리: 43.8 MB, 시간: 5.28 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌3

### 채점결과

Empty

### 문제 설명

<p>정수 <code>n</code>, <code>left</code>, <code>right</code>가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.</p>

<ol>
<li><code>n</code>행 <code>n</code>열 크기의 비어있는 2차원 배열을 만듭니다.</li>
<li><code>i = 1, 2, 3, ..., n</code>에 대해서, 다음 과정을 반복합니다.

<ul>
<li>1행 1열부터 <code>i</code>행 <code>i</code>열까지의 영역 내의 모든 빈 칸을 숫자 <code>i</code>로 채웁니다.</li>
</ul></li>
<li>1행, 2행, ..., <code>n</code>행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.</li>
<li>새로운 1차원 배열을 <code>arr</code>이라 할 때, <code>arr[left]</code>, <code>arr[left+1]</code>, ..., <code>arr[right]</code>만 남기고 나머지는 지웁니다.</li>
</ol>

<p>정수 <code>n</code>, <code>left</code>, <code>right</code>가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>n</code> ≤ 10<sup>7</sup></li>
<li>0 ≤ <code>left</code> ≤ <code>right</code> &lt; n<sup>2</sup></li>
<li><code>right</code> - <code>left</code> &lt; 10<sup>5</sup></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>left</th>
<th>right</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>3</td>
<td>2</td>
<td>5</td>
<td><code>[3,2,2,3]</code></td>
</tr>
<tr>
<td>4</td>
<td>7</td>
<td>14</td>
<td><code>[4,3,3,3,4,4,4,4]</code></td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>다음 애니메이션은 주어진 과정대로 1차원 배열을 만드는 과정을 나타낸 것입니다.</li>
</ul>

<p><img src="https://grepp-programmers.s3.amazonaws.com/production/file_resource/103/FlattenedFills_ex1.gif" title="" alt="ex1"></p>

<p><strong>입출력 예 #2</strong></p>

<ul>
<li>다음 애니메이션은 주어진 과정대로 1차원 배열을 만드는 과정을 나타낸 것입니다.</li>
</ul>

<p><img src="https://grepp-programmers.s3.amazonaws.com/production/file_resource/104/FlattenedFills_ex2.gif" title="" alt="ex2"></p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges