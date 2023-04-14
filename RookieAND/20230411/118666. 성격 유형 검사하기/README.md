# [level 1] 성격 유형 검사하기 - 118666 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/118666) 

### 성능 요약

메모리: 33.9 MB, 시간: 0.93 ms

### 구분

코딩테스트 연습 > 2022 KAKAO TECH INTERNSHIP

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>나만의 카카오 성격 유형 검사지를 만들려고 합니다.<br>
성격 유형 검사는 다음과 같은 4개 지표로 성격 유형을 구분합니다. 성격은 각 지표에서 두 유형 중 하나로 결정됩니다.</p>
<table class="table">
        <thead><tr>
<th>지표 번호</th>
<th>성격 유형</th>
</tr>
</thead>
        <tbody><tr>
<td>1번 지표</td>
<td>라이언형(R), 튜브형(T)</td>
</tr>
<tr>
<td>2번 지표</td>
<td>콘형(C), 프로도형(F)</td>
</tr>
<tr>
<td>3번 지표</td>
<td>제이지형(J), 무지형(M)</td>
</tr>
<tr>
<td>4번 지표</td>
<td>어피치형(A), 네오형(N)</td>
</tr>
</tbody>
      </table>
<p>4개의 지표가 있으므로 성격 유형은 총 16(=2 x 2 x 2 x 2)가지가 나올 수 있습니다. 예를 들어, "RFMN"이나 "TCMA"와 같은 성격 유형이 있습니다.</p>

<p>검사지에는 총 <code>n</code>개의 질문이 있고, 각 질문에는 아래와 같은 7개의 선택지가 있습니다.</p>

<ul>
<li><code>매우 비동의</code></li>
<li><code>비동의</code></li>
<li><code>약간 비동의</code></li>
<li><code>모르겠음</code></li>
<li><code>약간 동의</code></li>
<li><code>동의</code></li>
<li><code>매우 동의</code></li>
</ul>

<p>각 질문은 1가지 지표로 성격 유형 점수를 판단합니다.</p>

<p>예를 들어, 어떤 한 질문에서 4번 지표로 아래 표처럼 점수를 매길 수 있습니다.</p>
<table class="table">
        <thead><tr>
<th>선택지</th>
<th>성격 유형 점수</th>
</tr>
</thead>
        <tbody><tr>
<td><code>매우 비동의</code></td>
<td>네오형 3점</td>
</tr>
<tr>
<td><code>비동의</code></td>
<td>네오형 2점</td>
</tr>
<tr>
<td><code>약간 비동의</code></td>
<td>네오형 1점</td>
</tr>
<tr>
<td><code>모르겠음</code></td>
<td>어떤 성격 유형도 점수를 얻지 않습니다</td>
</tr>
<tr>
<td><code>약간 동의</code></td>
<td>어피치형 1점</td>
</tr>
<tr>
<td><code>동의</code></td>
<td>어피치형 2점</td>
</tr>
<tr>
<td><code>매우 동의</code></td>
<td>어피치형 3점</td>
</tr>
</tbody>
      </table>
<p>이때 검사자가 질문에서 <code>약간 동의</code> 선택지를 선택할 경우 어피치형(A) 성격 유형 1점을 받게 됩니다. 만약 검사자가 <code>매우 비동의</code> 선택지를 선택할 경우 네오형(N) 성격 유형 3점을 받게 됩니다.</p>

<p><strong>위 예시처럼 네오형이 비동의, 어피치형이 동의인 경우만 주어지지 않고, 질문에 따라 네오형이 동의, 어피치형이 비동의인 경우도 주어질 수 있습니다.</strong><br>
하지만 각 선택지는 고정적인 크기의 점수를 가지고 있습니다.</p>

<ul>
<li><code>매우 동의</code>나 <code>매우 비동의</code> 선택지를 선택하면 3점을 얻습니다.</li>
<li><code>동의</code>나 <code>비동의</code> 선택지를 선택하면 2점을 얻습니다.</li>
<li><code>약간 동의</code>나 <code>약간 비동의</code> 선택지를 선택하면 1점을 얻습니다.</li>
<li><code>모르겠음</code> 선택지를 선택하면 점수를 얻지 않습니다.</li>
</ul>

<p>검사 결과는 모든 질문의 성격 유형 점수를 더하여 각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이라고 판단합니다. 단, 하나의 지표에서 각 성격 유형 점수가 같으면, 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단합니다.</p>

<p>질문마다 판단하는 지표를 담은 1차원 문자열 배열 <code>survey</code>와 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열 <code>choices</code>가 매개변수로 주어집니다. 이때, 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>survey</code>의 길이 ( = <code>n</code>) ≤ 1,000

<ul>
<li><code>survey</code>의 원소는 <code>"RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA"</code> 중 하나입니다.</li>
<li><code>survey[i]</code>의 첫 번째 캐릭터는 i+1번 질문의 비동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다. </li>
<li><code>survey[i]</code>의 두 번째 캐릭터는 i+1번 질문의 동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다.</li>
</ul></li>
<li><p><code>choices</code>의 길이 = <code>survey</code>의 길이</p>

<ul>
<li><code>choices[i]</code>는 검사자가 선택한 i+1번째 질문의 선택지를 의미합니다.</li>
<li>1 ≤ <code>choices</code>의 원소 ≤ 7</li>
</ul>
<table class="table">
        <thead><tr>
<th><code>choices</code></th>
<th>뜻</th>
</tr>
</thead>
        <tbody><tr>
<td>1</td>
<td>매우 비동의</td>
</tr>
<tr>
<td>2</td>
<td>비동의</td>
</tr>
<tr>
<td>3</td>
<td>약간 비동의</td>
</tr>
<tr>
<td>4</td>
<td>모르겠음</td>
</tr>
<tr>
<td>5</td>
<td>약간 동의</td>
</tr>
<tr>
<td>6</td>
<td>동의</td>
</tr>
<tr>
<td>7</td>
<td>매우 동의</td>
</tr>
</tbody>
      </table></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>survey</th>
<th>choices</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td><code>["AN", "CF", "MJ", "RT", "NA"]</code></td>
<td>[5, 3, 2, 7, 5]</td>
<td><code>"TCMA"</code></td>
</tr>
<tr>
<td><code>["TR", "RT", "TR"]</code></td>
<td>[7, 1, 3]</td>
<td><code>"RCJA"</code></td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<p>1번 질문의 점수 배치는 아래 표와 같습니다.</p>
<table class="table">
        <thead><tr>
<th>선택지</th>
<th>성격 유형 점수</th>
</tr>
</thead>
        <tbody><tr>
<td>매우 비동의</td>
<td>어피치형 3점</td>
</tr>
<tr>
<td>비동의</td>
<td>어피치형 2점</td>
</tr>
<tr>
<td>약간 비동의</td>
<td>어피치형 1점</td>
</tr>
<tr>
<td>모르겠음</td>
<td>어떤 성격 유형도 점수를 얻지 않습니다</td>
</tr>
<tr>
<td><strong>약간 동의</strong></td>
<td><strong>네오형 1점</strong></td>
</tr>
<tr>
<td>동의</td>
<td>네오형 2점</td>
</tr>
<tr>
<td>매우 동의</td>
<td>네오형 3점</td>
</tr>
</tbody>
      </table>
<p>1번 질문에서는 지문의 예시와 다르게 비동의 관련 선택지를 선택하면 어피치형(A) 성격 유형의 점수를 얻고, 동의 관련 선택지를 선택하면 네오형(N) 성격 유형의 점수를 얻습니다.<br>
1번 질문에서 검사자는 <code>약간 동의</code> 선택지를 선택했으므로 네오형(N) 성격 유형 점수 1점을 얻게 됩니다.</p>

<p>2번 질문의 점수 배치는 아래 표와 같습니다.</p>
<table class="table">
        <thead><tr>
<th>선택지</th>
<th>성격 유형 점수</th>
</tr>
</thead>
        <tbody><tr>
<td>매우 비동의</td>
<td>콘형 3점</td>
</tr>
<tr>
<td>비동의</td>
<td>콘형 2점</td>
</tr>
<tr>
<td><strong>약간 비동의</strong></td>
<td><strong>콘형 1점</strong></td>
</tr>
<tr>
<td>모르겠음</td>
<td>어떤 성격 유형도 점수를 얻지 않습니다</td>
</tr>
<tr>
<td>약간 동의</td>
<td>프로도형 1점</td>
</tr>
<tr>
<td>동의</td>
<td>프로도형 2점</td>
</tr>
<tr>
<td>매우 동의</td>
<td>프로도형 3점</td>
</tr>
</tbody>
      </table>
<p>2번 질문에서 검사자는 <code>약간 비동의</code> 선택지를 선택했으므로 콘형(C) 성격 유형 점수 1점을 얻게 됩니다.</p>

<p>3번 질문의 점수 배치는 아래 표와 같습니다.</p>
<table class="table">
        <thead><tr>
<th>선택지</th>
<th>성격 유형 점수</th>
</tr>
</thead>
        <tbody><tr>
<td>매우 비동의</td>
<td>무지형 3점</td>
</tr>
<tr>
<td><strong>비동의</strong></td>
<td><strong>무지형 2점</strong></td>
</tr>
<tr>
<td>약간 비동의</td>
<td>무지형 1점</td>
</tr>
<tr>
<td>모르겠음</td>
<td>어떤 성격 유형도 점수를 얻지 않습니다</td>
</tr>
<tr>
<td>약간 동의</td>
<td>제이지형 1점</td>
</tr>
<tr>
<td>동의</td>
<td>제이지형 2점</td>
</tr>
<tr>
<td>매우 동의</td>
<td>제이지형 3점</td>
</tr>
</tbody>
      </table>
<p>3번 질문에서 검사자는 <code>비동의</code> 선택지를 선택했으므로 무지형(M) 성격 유형 점수 2점을 얻게 됩니다.</p>

<p>4번 질문의 점수 배치는 아래 표와 같습니다.</p>
<table class="table">
        <thead><tr>
<th>선택지</th>
<th>성격 유형 점수</th>
</tr>
</thead>
        <tbody><tr>
<td>매우 비동의</td>
<td>라이언형 3점</td>
</tr>
<tr>
<td>비동의</td>
<td>라이언형 2점</td>
</tr>
<tr>
<td>약간 비동의</td>
<td>라이언형 1점</td>
</tr>
<tr>
<td>모르겠음</td>
<td>어떤 성격 유형도 점수를 얻지 않습니다</td>
</tr>
<tr>
<td>약간 동의</td>
<td>튜브형 1점</td>
</tr>
<tr>
<td>동의</td>
<td>튜브형 2점</td>
</tr>
<tr>
<td><strong>매우 동의</strong></td>
<td><strong>튜브형 3점</strong></td>
</tr>
</tbody>
      </table>
<p>4번 질문에서 검사자는 <code>매우 동의</code> 선택지를 선택했으므로 튜브형(T) 성격 유형 점수 3점을 얻게 됩니다.</p>

<p>5번 질문의 점수 배치는 아래 표와 같습니다.</p>
<table class="table">
        <thead><tr>
<th>선택지</th>
<th>성격 유형 점수</th>
</tr>
</thead>
        <tbody><tr>
<td>매우 비동의</td>
<td>네오형 3점</td>
</tr>
<tr>
<td>비동의</td>
<td>네오형 2점</td>
</tr>
<tr>
<td>약간 비동의</td>
<td>네오형 1점</td>
</tr>
<tr>
<td>모르겠음</td>
<td>어떤 성격 유형도 점수를 얻지 않습니다</td>
</tr>
<tr>
<td><strong>약간 동의</strong></td>
<td><strong>어피치형 1점</strong></td>
</tr>
<tr>
<td>동의</td>
<td>어피치형 2점</td>
</tr>
<tr>
<td>매우 동의</td>
<td>어피치형 3점</td>
</tr>
</tbody>
      </table>
<p>5번 질문에서 검사자는 <code>약간 동의</code> 선택지를 선택했으므로 어피치형(A) 성격 유형 점수 1점을 얻게 됩니다.</p>

<p>1번부터 5번까지 질문의 성격 유형 점수를 합치면 아래 표와 같습니다.</p>
<table class="table">
        <thead><tr>
<th>지표 번호</th>
<th>성격 유형</th>
<th>점수</th>
<th>성격 유형</th>
<th>점수</th>
</tr>
</thead>
        <tbody><tr>
<td>1번 지표</td>
<td>라이언형(R)</td>
<td>0</td>
<td>튜브형(T)</td>
<td>3</td>
</tr>
<tr>
<td>2번 지표</td>
<td>콘형(C)</td>
<td>1</td>
<td>프로도형(F)</td>
<td>0</td>
</tr>
<tr>
<td>3번 지표</td>
<td>제이지형(J)</td>
<td>0</td>
<td>무지형(M)</td>
<td>2</td>
</tr>
<tr>
<td>4번 지표</td>
<td>어피치형(A)</td>
<td>1</td>
<td>네오형(N)</td>
<td>1</td>
</tr>
</tbody>
      </table>
<p>각 지표에서 더 점수가 높은 <code>T</code>,<code>C</code>,<code>M</code>이 성격 유형입니다.<br>
하지만, 4번 지표는 1점으로 동일한 점수입니다. 따라서, 4번 지표의 성격 유형은 사전순으로 빠른 <code>A</code>입니다.</p>

<p>따라서 <code>"TCMA"</code>를 return 해야 합니다.</p>

<p><strong>입출력 예 #2</strong></p>

<p>1번부터 3번까지 질문의 성격 유형 점수를 합치면 아래 표와 같습니다.</p>
<table class="table">
        <thead><tr>
<th>지표 번호</th>
<th>성격 유형</th>
<th>점수</th>
<th>성격 유형</th>
<th>점수</th>
</tr>
</thead>
        <tbody><tr>
<td>1번 지표</td>
<td>라이언형(R)</td>
<td>6</td>
<td>튜브형(T)</td>
<td>1</td>
</tr>
<tr>
<td>2번 지표</td>
<td>콘형(C)</td>
<td>0</td>
<td>프로도형(F)</td>
<td>0</td>
</tr>
<tr>
<td>3번 지표</td>
<td>제이지형(J)</td>
<td>0</td>
<td>무지형(M)</td>
<td>0</td>
</tr>
<tr>
<td>4번 지표</td>
<td>어피치형(A)</td>
<td>0</td>
<td>네오형(N)</td>
<td>0</td>
</tr>
</tbody>
      </table>
<p>1번 지표는 튜브형(T)보다 라이언형(R)의 점수가 더 높습니다. 따라서 첫 번째 지표의 성격 유형은 <code>R</code>입니다.<br>
하지만, 2, 3, 4번 지표는 모두 0점으로 동일한 점수입니다. 따라서 2, 3, 4번 지표의 성격 유형은 사전순으로 빠른 <code>C</code>, <code>J</code>, <code>A</code>입니다.</p>

<p>따라서 <code>"RCJA"</code>를 return 해야 합니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges