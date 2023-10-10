# [level 2] 교점에 별 만들기 - 87377 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/87377) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.18 ms

### 구분

코딩테스트 연습 > 위클리 챌린지

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2023년 10월 1일 22:57:53

### 문제 설명

<p><code>Ax + By + C = 0</code>으로 표현할 수 있는 <code>n</code>개의 직선이 주어질 때, 이 직선의 교점 중 정수 좌표에 별을 그리려 합니다.</p>

<p>예를 들어, 다음과 같은 직선 5개를  </p>

<ul>
<li><code>2x - y + 4 = 0</code></li>
<li><code>-2x - y + 4 = 0</code></li>
<li><code>-y + 1 = 0</code></li>
<li><code>5x - 8y - 12 = 0</code></li>
<li><code>5x + 8y + 12 = 0</code><br></li>
</ul>

<p>좌표 평면 위에 그리면 아래 그림과 같습니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/d440b8f4-91c3-4272-8a81-876e9aaffb9c/RisingStarGraphBox.jpg" title="" alt="RisingStarGraphBox.jpg"></p>

<p>이때, 모든 교점의 좌표는 <code>(4, 1)</code>, <code>(4, -4)</code>, <code>(-4, -4)</code>, <code>(-4, 1)</code>, <code>(0, 4)</code>, <code>(1.5, 1.0)</code>, <code>(2.1, -0.19)</code>, <code>(0, -1.5)</code>, <code>(-2.1, -0.19)</code>, <code>(-1.5, 1.0)</code>입니다. 이 중 정수로만 표현되는 좌표는 <code>(4, 1)</code>, <code>(4, -4)</code>, <code>(-4, -4)</code>, <code>(-4, 1)</code>, <code>(0, 4)</code>입니다.<br><br>
만약 정수로 표현되는 교점에 별을 그리면 다음과 같습니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/15ffe460-62dc-48df-82a2-7d7636809454/RisingStarGraphStar.jpg" title="" alt="RisingStarGraphStar.jpg"></p>

<p>위의 그림을 문자열로 나타낼 때, 별이 그려진 부분은 <code>*</code>, 빈 공간(격자선이 교차하는 지점)은 <code>.</code>으로 표현하면 다음과 같습니다.   </p>
<div class="highlight"><pre class="codehilite"><code>"..........."  
".....*....."  
"..........."  
"..........."  
".*.......*."  
"..........."  
"..........."  
"..........."  
"..........."  
".*.......*."  
"..........."  
</code></pre></div>
<p>이때 격자판은 무한히 넓으니 모든 별을 포함하는 최소한의 크기만 나타내면 됩니다.  </p>

<p>따라서 정답은  </p>
<div class="highlight"><pre class="codehilite"><code>"....*...."  
"........."  
"........."  
"*.......*"  
"........."  
"........."  
"........."  
"........."  
"*.......*"  
</code></pre></div>
<p>입니다.</p>

<p>직선 <code>A, B, C</code>에 대한 정보가 담긴 배열 <code>line</code>이 매개변수로 주어집니다. 이때 모든 별을 포함하는 최소 사각형을 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>line의 세로(행) 길이는 2 이상 1,000 이하인 자연수입니다.

<ul>
<li>line의 가로(열) 길이는 3입니다.</li>
<li>line의 각 원소는 [A, B, C] 형태입니다.</li>
<li>A, B, C는 -100,000 이상 100,000 이하인 정수입니다.</li>
<li>무수히 많은 교점이 생기는 직선 쌍은 주어지지 않습니다.</li>
<li>A = 0이면서 B = 0인 경우는 주어지지 않습니다.</li>
</ul></li>
<li>정답은 1,000 * 1,000 크기 이내에서 표현됩니다.</li>
<li>별이 한 개 이상 그려지는 입력만 주어집니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>line</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td><code>[[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]</code></td>
<td><code>["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"]</code></td>
</tr>
<tr>
<td><code>[[0, 1, -1], [1, 0, -1], [1, 0, 1]]</code></td>
<td><code>["*.*"]</code></td>
</tr>
<tr>
<td><code>[[1, -1, 0], [2, -1, 0]]</code></td>
<td><code>["*"]</code></td>
</tr>
<tr>
<td><code>[[1, -1, 0], [2, -1, 0], [4, -1, 0]]</code></td>
<td><code>["*"]</code></td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong>  </p>

<p>문제 예시와 같습니다.</p>

<p><strong>입출력 예 #2</strong></p>

<p>직선 <code>y = 1</code>, <code>x = 1</code>, <code>x = -1</code>는 다음과 같습니다.<br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/49a6590a-33b2-4240-a1a4-bbd5292c6e7b/RisingStarGraphTC2.png" title="" alt="RisingStarGraphTC2.png"></p>

<p><code>(-1, 1)</code>, <code>(1, 1)</code> 에서 교점이 발생합니다.<br><br>
따라서 정답은  </p>
<div class="highlight"><pre class="codehilite"><code>"*.*"  
</code></pre></div>
<p>입니다.</p>

<p><strong>입출력 예 #3</strong>  </p>

<p>직선 <code>y = x</code>, <code>y = 2x</code>는 다음과 같습니다.<br><br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/663cd2ee-3326-4da8-b545-c213a2f2dc5b/RisingStarGraphTC3.png" title="" alt="RisingStarGraphTC3.png"></p>

<p><code>(0, 0)</code> 에서 교점이 발생합니다.<br><br>
따라서 정답은  </p>
<div class="highlight"><pre class="codehilite"><code>"*"  
</code></pre></div>
<p>입니다.</p>

<p><strong>입출력 예 #4</strong></p>

<p>직선 <code>y = x</code>, <code>y = 2x</code>, <code>y = 4x</code>는 다음과 같습니다.<br><br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/966291bc-278c-40db-bf72-780aba3e5f5b/RisingStarGraphTC4.png" title="" alt="RisingStarGraphTC4.png"></p>

<p><code>(0, 0)</code> 에서 교점이 발생합니다.<br><br>
따라서 정답은  </p>
<div class="highlight"><pre class="codehilite"><code>"*"
</code></pre></div>
<p>입니다.</p>

<hr>

<h5>참고 사항</h5>

<p><code>Ax + By + E = 0</code><br>
<code>Cx + Dy + F = 0</code><br>
두 직선의 교점이 유일하게 존재할 경우, 그 교점은 다음과 같습니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/133f75ab-a22a-476b-92c2-587cea721944/RisingStarExpression.png" title="" alt="RisingStarExpression.png"></p>

<p>또, AD - BC = 0인 경우 두 직선은 평행 또는 일치합니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges