# [level 2] 순위 검색 - 72412 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/72412) 

### 성능 요약

메모리: 89.1 MB, 시간: 1995.04 ms

### 구분

코딩테스트 연습 > 2021 KAKAO BLIND RECRUITMENT

### 채점결과

Empty

### 문제 설명

<p><strong>[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]</strong></p>

<p>카카오는 하반기 경력 개발자 공개채용을 진행 중에 있으며 현재 지원서 접수와 코딩테스트가 종료되었습니다. 이번 채용에서 지원자는 지원서 작성 시 아래와 같이 4가지 항목을 반드시 선택하도록 하였습니다.</p>

<ul>
<li>코딩테스트 참여 개발언어 항목에 cpp, java, python 중 하나를 선택해야 합니다.</li>
<li>지원 직군 항목에 backend와 frontend 중 하나를 선택해야 합니다.</li>
<li>지원 경력구분 항목에 junior와 senior 중 하나를 선택해야 합니다.</li>
<li>선호하는 소울푸드로 chicken과 pizza 중 하나를 선택해야 합니다.</li>
</ul>

<p>인재영입팀에 근무하고 있는 <code>니니즈</code>는 코딩테스트 결과를 분석하여 채용에 참여한 개발팀들에 제공하기 위해 지원자들의 지원 조건을 선택하면 해당 조건에 맞는 지원자가 몇 명인 지 쉽게 알 수 있는 도구를 만들고 있습니다.<br>
예를 들어, 개발팀에서 궁금해하는 문의사항은 다음과 같은 형태가 될 수 있습니다.<br>
<code>코딩테스트에 java로 참여했으며, backend 직군을 선택했고, junior 경력이면서, 소울푸드로 pizza를 선택한 사람 중 코딩테스트 점수를 50점 이상 받은 지원자는 몇 명인가?</code></p>

<p>물론 이 외에도 각 개발팀의 상황에 따라 아래와 같이 다양한 형태의 문의가 있을 수 있습니다.</p>

<ul>
<li>코딩테스트에 python으로 참여했으며, frontend 직군을 선택했고, senior 경력이면서, 소울푸드로 chicken을 선택한 사람 중 코딩테스트 점수를 100점 이상 받은 사람은 모두 몇 명인가?</li>
<li>코딩테스트에 cpp로 참여했으며, senior 경력이면서, 소울푸드로 pizza를 선택한 사람 중 코딩테스트 점수를 100점 이상 받은 사람은 모두 몇 명인가?</li>
<li>backend 직군을 선택했고, senior 경력이면서 코딩테스트 점수를 200점 이상 받은 사람은 모두 몇 명인가? </li>
<li>소울푸드로 chicken을 선택한 사람 중 코딩테스트 점수를 250점 이상 받은 사람은 모두 몇 명인가?</li>
<li>코딩테스트 점수를 150점 이상 받은 사람은 모두 몇 명인가?</li>
</ul>

<p>즉, 개발팀에서 궁금해하는 내용은 다음과 같은 형태를 갖습니다.</p>
<div class="highlight"><pre class="codehilite"><code>* [조건]을 만족하는 사람 중 코딩테스트 점수를 X점 이상 받은 사람은 모두 몇 명인가?
</code></pre></div>
<hr>

<h4><strong>[문제]</strong></h4>

<p>지원자가 지원서에 입력한 4가지의 정보와 획득한 코딩테스트 점수를 하나의 문자열로 구성한 값의 배열 info, 개발팀이 궁금해하는 문의조건이 문자열 형태로 담긴 배열 query가 매개변수로 주어질 때,<br>
각 문의조건에 해당하는 사람들의 숫자를 순서대로 배열에 담아 return 하도록 solution 함수를 완성해 주세요.</p>

<h4><strong>[제한사항]</strong></h4>

<ul>
<li>info 배열의 크기는 1 이상 50,000 이하입니다.</li>
<li>info 배열 각 원소의 값은 지원자가 지원서에 입력한 4가지 값과 코딩테스트 점수를 합친 "개발언어 직군 경력 소울푸드 점수" 형식입니다.

<ul>
<li>개발언어는 cpp, java, python 중 하나입니다.</li>
<li>직군은 backend, frontend 중 하나입니다.</li>
<li>경력은 junior, senior 중 하나입니다.</li>
<li>소울푸드는 chicken, pizza 중 하나입니다.</li>
<li>점수는 코딩테스트 점수를 의미하며, 1 이상 100,000 이하인 자연수입니다.</li>
<li>각 단어는 공백문자(스페이스 바) 하나로 구분되어 있습니다.</li>
</ul></li>
<li>query 배열의 크기는 1 이상 100,000 이하입니다.</li>
<li>query의 각 문자열은 "[조건] X" 형식입니다.

<ul>
<li>[조건]은 "개발언어 and 직군 and 경력 and 소울푸드" 형식의 문자열입니다.</li>
<li>언어는 cpp, java, python, - 중 하나입니다.</li>
<li>직군은 backend, frontend, - 중 하나입니다.</li>
<li>경력은 junior, senior, - 중 하나입니다.</li>
<li>소울푸드는 chicken, pizza, - 중 하나입니다.</li>
<li>'-' 표시는 해당 조건을 고려하지 않겠다는 의미입니다.</li>
<li>X는 코딩테스트 점수를 의미하며 조건을 만족하는 사람 중 X점 이상 받은 사람은 모두 몇 명인 지를 의미합니다.</li>
<li>각 단어는 공백문자(스페이스 바) 하나로 구분되어 있습니다.</li>
<li>예를 들면, "cpp and - and senior and pizza 500"은 "cpp로 코딩테스트를 봤으며, 경력은 senior 이면서 소울푸드로 pizza를 선택한 지원자 중 코딩테스트 점수를 500점 이상 받은 사람은 모두 몇 명인가?"를 의미합니다.</li>
</ul></li>
</ul>

<hr>

<h5><strong>[입출력 예]</strong></h5>
<table class="table">
        <thead><tr>
<th>info</th>
<th>query</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td><code>["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"]</code></td>
<td><code>["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]</code></td>
<td>[1,1,1,1,2,4]</td>
</tr>
</tbody>
      </table>
<h5><strong>입출력 예에 대한 설명</strong></h5>

<p>지원자 정보를 표로 나타내면 다음과 같습니다.</p>
<table class="table">
        <thead><tr>
<th>언어</th>
<th>직군</th>
<th>경력</th>
<th>소울 푸드</th>
<th>점수</th>
</tr>
</thead>
        <tbody><tr>
<td>java</td>
<td>backend</td>
<td>junior</td>
<td>pizza</td>
<td>150</td>
</tr>
<tr>
<td>python</td>
<td>frontend</td>
<td>senior</td>
<td>chicken</td>
<td>210</td>
</tr>
<tr>
<td>python</td>
<td>frontend</td>
<td>senior</td>
<td>chicken</td>
<td>150</td>
</tr>
<tr>
<td>cpp</td>
<td>backend</td>
<td>senior</td>
<td>pizza</td>
<td>260</td>
</tr>
<tr>
<td>java</td>
<td>backend</td>
<td>junior</td>
<td>chicken</td>
<td>80</td>
</tr>
<tr>
<td>python</td>
<td>backend</td>
<td>senior</td>
<td>chicken</td>
<td>50</td>
</tr>
</tbody>
      </table>
<ul>
<li><code>"java and backend and junior and pizza 100"</code> : java로 코딩테스트를 봤으며, backend 직군을 선택했고 junior 경력이면서 소울푸드로 pizza를 선택한 지원자 중 코딩테스트 점수를 100점 이상 받은 지원자는 1명 입니다.</li>
<li><code>"python and frontend and senior and chicken 200"</code> : python으로 코딩테스트를 봤으며, frontend 직군을 선택했고, senior 경력이면서 소울 푸드로 chicken을 선택한 지원자 중 코딩테스트 점수를 200점 이상 받은 지원자는 1명 입니다.</li>
<li><code>"cpp and - and senior and pizza 250"</code> : cpp로 코딩테스트를 봤으며, senior 경력이면서 소울푸드로 pizza를 선택한 지원자 중 코딩테스트 점수를 250점 이상 받은 지원자는 1명 입니다.</li>
<li><code>"- and backend and senior and - 150"</code> : backend 직군을 선택했고, senior 경력인 지원자 중 코딩테스트 점수를 150점 이상 받은 지원자는 1명 입니다.</li>
<li><code>"- and - and - and chicken 100"</code> : 소울푸드로 chicken을 선택한 지원자 중 코딩테스트 점수를 100점 이상을 받은 지원자는 2명 입니다.</li>
<li><code>"- and - and - and - 150"</code> : 코딩테스트 점수를 150점 이상 받은 지원자는 4명 입니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges