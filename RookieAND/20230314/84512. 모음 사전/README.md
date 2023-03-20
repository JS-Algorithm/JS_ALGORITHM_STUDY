# [level 2] 모음 사전 - 84512 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/84512) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.06 ms

### 구분

코딩테스트 연습 > 완전탐색

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>사전에 알파벳 모음 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는, 길이 5 이하의 모든 단어가 수록되어 있습니다. 사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA"이며, 마지막 단어는 "UUUUU"입니다.</p>

<p>단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return 하도록 solution 함수를 완성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>word의 길이는 1 이상 5 이하입니다.</li>
<li>word는 알파벳 대문자 'A', 'E', 'I', 'O', 'U'로만 이루어져 있습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>word</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td><code>"AAAAE"</code></td>
<td>6</td>
</tr>
<tr>
<td><code>"AAAE"</code></td>
<td>10</td>
</tr>
<tr>
<td><code>"I"</code></td>
<td>1563</td>
</tr>
<tr>
<td><code>"EIO"</code></td>
<td>1189</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<p>사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA", "AAA", "AAAA", "AAAAA", "AAAAE", ... 와 같습니다. "AAAAE"는 사전에서 6번째 단어입니다.</p>

<p>입출력 예 #2</p>

<p>"AAAE"는  "A", "AA", "AAA", "AAAA", "AAAAA", "AAAAE", "AAAAI", "AAAAO", "AAAAU"의 다음인 10번째 단어입니다.</p>

<p>입출력 예 #3</p>

<p>"I"는 1563번째 단어입니다.</p>

<p>입출력 예 #4</p>

<p>"EIO"는 1189번째 단어입니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges