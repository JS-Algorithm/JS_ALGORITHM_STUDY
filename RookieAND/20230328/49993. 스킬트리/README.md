# [level 2] 스킬트리 - 49993 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/49993) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.18 ms

### 구분

코딩테스트 연습 > Summer／Winter Coding（～2018）

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.</p>

<p>예를 들어 선행 스킬 순서가 <code>스파크 → 라이트닝 볼트 → 썬더</code>일때, 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.</p>

<p>위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 따라서 <code>스파크 → 힐링 → 라이트닝 볼트 → 썬더</code>와 같은 스킬트리는 가능하지만, <code>썬더 → 스파크</code>나 <code>라이트닝 볼트 → 스파크 → 힐링 → 썬더</code>와 같은 스킬트리는 불가능합니다.</p>

<p>선행 스킬 순서 skill과 유저들이 만든 스킬트리<sup id="fnref1"><a href="#fn1">1</a></sup>를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.</p>

<h5>제한 조건</h5>

<ul>
<li>스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.</li>
<li>스킬 순서와 스킬트리는 문자열로 표기합니다.

<ul>
<li>예를 들어, <code>C → B → D</code> 라면 "CBD"로 표기합니다</li>
</ul></li>
<li>선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.</li>
<li>skill_trees는 길이 1 이상 20 이하인 배열입니다.</li>
<li>skill_trees의 원소는 스킬을 나타내는 문자열입니다.

<ul>
<li>skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.</li>
</ul></li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>skill</th>
<th>skill_trees</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td><code>"CBD"</code></td>
<td><code>["BACDE", "CBADF", "AECB", "BDA"]</code></td>
<td>2</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<ul>
<li>"BACDE": B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트립니다.</li>
<li>"CBADF": 가능한 스킬트리입니다.</li>
<li>"AECB": 가능한 스킬트리입니다.</li>
<li>"BDA": B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트리입니다.</li>
</ul>

<div class="footnotes">
<hr>
<ol>

<li id="fn1">
<p>스킬 트리: 유저가 스킬을 배울 순서&nbsp;<a href="#fnref1">↩</a></p>
</li>

</ol>
</div>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges