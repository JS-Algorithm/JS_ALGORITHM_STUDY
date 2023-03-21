# [unrated] 개인정보 수집 유효기간 - 150370 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/150370?language=javascript) 

### 성능 요약

메모리: 33.6 MB, 시간: 0.54 ms

### 구분

코딩테스트 연습 > 2023 KAKAO BLIND RECRUITMENT

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>고객의 약관 동의를 얻어서 수집된 1~<code>n</code>번으로 분류되는 개인정보 <code>n</code>개가 있습니다. 약관 종류는 여러 가지 있으며 각 약관마다 개인정보 보관 유효기간이 정해져 있습니다. 당신은 각 개인정보가 어떤 약관으로 수집됐는지 알고 있습니다. 수집된 개인정보는 유효기간 전까지만 보관 가능하며, 유효기간이 지났다면 반드시 파기해야 합니다.</p>

<p>예를 들어, A라는 약관의 유효기간이 12 달이고, 2021년 1월 5일에 수집된 개인정보가 A약관으로 수집되었다면 해당 개인정보는 2022년 1월 4일까지 보관 가능하며 2022년 1월 5일부터 파기해야 할 개인정보입니다.<br>
당신은 오늘 날짜로 파기해야 할 개인정보 번호들을 구하려 합니다.</p>

<p><strong>모든 달은 28일까지 있다고 가정합니다.</strong></p>

<p>다음은 오늘 날짜가 <code>2022.05.19</code>일 때의 예시입니다.</p>
<table class="table">
        <thead><tr>
<th>약관 종류</th>
<th>유효기간</th>
</tr>
</thead>
        <tbody><tr>
<td>A</td>
<td>6 달</td>
</tr>
<tr>
<td>B</td>
<td>12 달</td>
</tr>
<tr>
<td>C</td>
<td>3 달</td>
</tr>
</tbody>
      </table><table class="table">
        <thead><tr>
<th>번호</th>
<th>개인정보 수집 일자</th>
<th>약관 종류</th>
</tr>
</thead>
        <tbody><tr>
<td>1</td>
<td><code>2021.05.02</code></td>
<td>A</td>
</tr>
<tr>
<td>2</td>
<td><code>2021.07.01</code></td>
<td>B</td>
</tr>
<tr>
<td>3</td>
<td><code>2022.02.19</code></td>
<td>C</td>
</tr>
<tr>
<td>4</td>
<td><code>2022.02.20</code></td>
<td>C</td>
</tr>
</tbody>
      </table>
<ul>
<li>첫 번째 개인정보는 A약관에 의해 2021년 11월 1일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.</li>
<li>두 번째 개인정보는 B약관에 의해 2022년 6월 28일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.</li>
<li>세 번째 개인정보는 C약관에 의해 2022년 5월 18일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.</li>
<li>네 번째 개인정보는 C약관에 의해 2022년 5월 19일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.</li>
</ul>

<p>따라서 파기해야 할 개인정보 번호는 [1, 3]입니다.</p>

<p>오늘 날짜를 의미하는 문자열 <code>today</code>, 약관의 유효기간을 담은 1차원 문자열 배열 <code>terms</code>와 수집된 개인정보의 정보를 담은 1차원 문자열 배열 <code>privacies</code>가 매개변수로 주어집니다. 이때 파기해야 할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return 하도록 solution 함수를 완성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li><code>today</code>는 "<code>YYYY</code>.<code>MM</code>.<code>DD</code>" 형태로 오늘 날짜를 나타냅니다. </li>
<li>1 ≤ <code>terms</code>의 길이 ≤ 20

<ul>
<li><code>terms</code>의 원소는 "<code>약관 종류</code> <code>유효기간</code>" 형태의 <code>약관 종류</code>와 <code>유효기간</code>을 공백 하나로 구분한 문자열입니다.</li>
<li><code>약관 종류</code>는 <code>A</code>~<code>Z</code>중 알파벳 대문자 하나이며, <code>terms</code> 배열에서 <code>약관 종류</code>는 중복되지 않습니다.</li>
<li><code>유효기간</code>은 개인정보를 보관할 수 있는 달 수를 나타내는 정수이며, 1 이상 100 이하입니다.</li>
</ul></li>
<li>1 ≤ <code>privacies</code>의 길이 ≤ 100

<ul>
<li><code>privacies[i]</code>는 <code>i+1</code>번 개인정보의 수집 일자와 약관 종류를 나타냅니다.</li>
<li><code>privacies</code>의 원소는 "<code>날짜</code> <code>약관 종류</code>" 형태의 <code>날짜</code>와 <code>약관 종류</code>를 공백 하나로 구분한 문자열입니다.</li>
<li><code>날짜</code>는 "<code>YYYY</code>.<code>MM</code>.<code>DD</code>" 형태의 개인정보가 수집된 날짜를 나타내며, <code>today</code> 이전의 날짜만 주어집니다.</li>
<li><code>privacies</code>의 <code>약관 종류</code>는 항상 <code>terms</code>에 나타난 <code>약관 종류</code>만 주어집니다.</li>
</ul></li>
<li><code>today</code>와 <code>privacies</code>에 등장하는 <code>날짜</code>의 <code>YYYY</code>는 연도, <code>MM</code>은 월, <code>DD</code>는 일을 나타내며 점(<code>.</code>) 하나로 구분되어 있습니다.

<ul>
<li>2000 ≤ <code>YYYY</code> ≤ 2022</li>
<li>1 ≤ <code>MM</code> ≤ 12</li>
<li><code>MM</code>이 한 자릿수인 경우 앞에 0이 붙습니다.</li>
<li>1 ≤ <code>DD</code> ≤ 28</li>
<li><code>DD</code>가 한 자릿수인 경우 앞에 0이 붙습니다.</li>
</ul></li>
<li>파기해야 할 개인정보가 하나 이상 존재하는 입력만 주어집니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>today</th>
<th>terms</th>
<th>privacies</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td><code>"2022.05.19"</code></td>
<td><code>["A 6", "B 12", "C 3"]</code></td>
<td><code>["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]</code></td>
<td>[1, 3]</td>
</tr>
<tr>
<td><code>"2020.01.01"</code></td>
<td><code>["Z 3", "D 5"]</code></td>
<td><code>["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]</code></td>
<td>[1, 4, 5]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>문제 예시와 같습니다.</li>
</ul>

<p><strong>입출력 예 #2</strong></p>
<table class="table">
        <thead><tr>
<th>약관 종류</th>
<th>유효기간</th>
</tr>
</thead>
        <tbody><tr>
<td>Z</td>
<td>3 달</td>
</tr>
<tr>
<td>D</td>
<td>5 달</td>
</tr>
</tbody>
      </table><table class="table">
        <thead><tr>
<th>번호</th>
<th>개인정보 수집 일자</th>
<th>약관 종류</th>
</tr>
</thead>
        <tbody><tr>
<td>1</td>
<td><code>2019.01.01</code></td>
<td>D</td>
</tr>
<tr>
<td>2</td>
<td><code>2019.11.15</code></td>
<td>Z</td>
</tr>
<tr>
<td>3</td>
<td><code>2019.08.02</code></td>
<td>D</td>
</tr>
<tr>
<td>4</td>
<td><code>2019.07.01</code></td>
<td>D</td>
</tr>
<tr>
<td>5</td>
<td><code>2018.12.28</code></td>
<td>Z</td>
</tr>
</tbody>
      </table>
<p>오늘 날짜는 2020년 1월 1일입니다.</p>

<ul>
<li>첫 번째 개인정보는 D약관에 의해 2019년 5월 28일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.</li>
<li>두 번째 개인정보는 Z약관에 의해 2020년 2월 14일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.</li>
<li>세 번째 개인정보는 D약관에 의해 2020년 1월 1일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.</li>
<li>네 번째 개인정보는 D약관에 의해 2019년 11월 28일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.</li>
<li>다섯 번째 개인정보는 Z약관에 의해 2019년 3월 27일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges