# [level 2] 위장 - 42578 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42578) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.18 ms

### 구분

코딩테스트 연습 > 해시

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.</p>

<p>예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.</p>
<table class="table">
        <thead><tr>
<th>종류</th>
<th>이름</th>
</tr>
</thead>
        <tbody><tr>
<td>얼굴</td>
<td>동그란 안경, 검정 선글라스</td>
</tr>
<tr>
<td>상의</td>
<td>파란색 티셔츠</td>
</tr>
<tr>
<td>하의</td>
<td>청바지</td>
</tr>
<tr>
<td>겉옷</td>
<td>긴 코트</td>
</tr>
</tbody>
      </table>
<p>스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.</li>
<li>스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.</li>
<li>같은 이름을 가진 의상은 존재하지 않습니다.</li>
<li>clothes의 모든 원소는 문자열로 이루어져 있습니다.</li>
<li>모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.</li>
<li>스파이는 하루에 최소 한 개의 의상은 입습니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>clothes</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]</td>
<td>5</td>
</tr>
<tr>
<td>[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]</td>
<td>3</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>예제 #1<br>
headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.</p>
<div class="highlight"><pre class="codehilite"><code>1. yellow_hat
2. blue_sunglasses
3. green_turban
4. yellow_hat + blue_sunglasses
5. green_turban + blue_sunglasses
</code></pre></div>
<p>예제 #2<br>
face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.</p>
<div class="highlight"><pre class="codehilite"><code>1. crow_mask
2. blue_sunglasses
3. smoky_makeup
</code></pre></div>
<p><a href="http://2013.bapc.eu/" target="_blank" rel="noopener">출처</a></p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges