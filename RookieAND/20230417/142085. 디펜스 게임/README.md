# [unrated] 디펜스 게임 - 142085 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/142085) 

### 성능 요약

메모리: 33.6 MB, 시간: 0.58 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

Empty

### 문제 설명

<p>준호는 요즘 디펜스 게임에 푹 빠져 있습니다. 디펜스 게임은 준호가 보유한 병사 <code>n</code>명으로 연속되는 적의 공격을 순서대로 막는 게임입니다. 디펜스 게임은 다음과 같은 규칙으로 진행됩니다.</p>

<ul>
<li>준호는 처음에 병사 <code>n</code>명을 가지고 있습니다.</li>
<li>매 라운드마다 <code>enemy[i]</code>마리의 적이 등장합니다.</li>
<li>남은 병사 중 <code>enemy[i]</code>명 만큼 소모하여 <code>enemy[i]</code>마리의 적을 막을 수 있습니다.

<ul>
<li>예를 들어 남은 병사가 7명이고, 적의 수가 2마리인 경우, 현재 라운드를 막으면 7 - 2 = 5명의 병사가 남습니다.</li>
<li>남은 병사의 수보다 현재 라운드의 적의 수가 더 많으면 게임이 종료됩니다.</li>
</ul></li>
<li>게임에는 <code>무적권</code>이라는 스킬이 있으며, <code>무적권</code>을 사용하면 병사의 소모없이 한 라운드의 공격을 막을 수 있습니다.</li>
<li><code>무적권</code>은 최대 <code>k</code>번 사용할 수 있습니다.</li>
</ul>

<p>준호는 <code>무적권</code>을 적절한 시기에 사용하여 최대한 많은 라운드를 진행하고 싶습니다.</p>

<p>준호가 처음 가지고 있는 병사의 수 <code>n</code>, 사용 가능한 무적권의 횟수 <code>k</code>, 매 라운드마다 공격해오는 적의 수가 순서대로 담긴 정수 배열 <code>enemy</code>가 매개변수로 주어집니다. 준호가 몇 라운드까지 막을 수 있는지 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>n</code> ≤ 1,000,000,000</li>
<li>1 ≤ <code>k</code> ≤ 500,000</li>
<li>1 ≤ <code>enemy</code>의 길이 ≤ 1,000,000</li>
<li>1 ≤ <code>enemy[i]</code> ≤ 1,000,000</li>
<li><code>enemy[i]</code>에는 i + 1 라운드에서 공격해오는 적의 수가 담겨있습니다.</li>
<li>모든 라운드를 막을 수 있는 경우에는 <code>enemy[i]</code>의 길이를 return 해주세요.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>k</th>
<th>enemy</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>7</td>
<td>3</td>
<td>[4, 2, 4, 5, 3, 3, 1]</td>
<td>5</td>
</tr>
<tr>
<td>2</td>
<td>4</td>
<td>[3, 3, 3, 3]</td>
<td>4</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예#1</strong></p>

<ul>
<li>1, 3, 5 라운드의 공격을 무적권으로 막아내고, 2, 4 라운드에 각각 병사를 2명, 5명 소모하면 5라운드까지 공격을 막을 수 있습니다. 또, 1, 3, 4번째 공격을 무적권으로 막아내고, 2, 5 번째 공격에 각각 병사를 2명, 3명 소모하여 5라운드까지 공격을 막을 수 있습니다. 그보다 많은 라운드를 막는 방법은 없으므로 5를 return 합니다.</li>
</ul>

<p><strong>입출력 예#2</strong></p>

<ul>
<li>준호는 모든 공격에 무적권을 사용하여 4라운드까지 막을 수 있습니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges