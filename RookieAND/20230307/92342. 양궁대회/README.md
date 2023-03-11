# [level 2] 양궁대회 - 92342 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/92342) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.40 ms

### 구분

코딩테스트 연습 > 2022 KAKAO BLIND RECRUITMENT

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<h5>문제 설명</h5>

<p>카카오배 양궁대회가 열렸습니다. <br>
<code>라이언</code>은 저번 카카오배 양궁대회 우승자이고 이번 대회에도 결승전까지 올라왔습니다. 결승전 상대는 <code>어피치</code>입니다. <br>
카카오배 양궁대회 운영위원회는 한 선수의 연속 우승보다는 다양한 선수들이 양궁대회에서 우승하기를 원합니다. 따라서, 양궁대회 운영위원회는 결승전 규칙을 전 대회 우승자인 라이언에게 불리하게 다음과 같이 정했습니다. </p>

<ol>
<li>어피치가 화살 <code>n</code>발을 다 쏜 후에 라이언이 화살 <code>n</code>발을 쏩니다.</li>
<li>점수를 계산합니다.

<ol>
<li>과녁판은 아래 사진처럼 생겼으며 가장 작은 원의 과녁 점수는 10점이고 가장 큰 원의 바깥쪽은 과녁 점수가 0점입니다.
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/2c73b8f8-c938-4b6e-9bc3-e3a3784d6a41/01_2022_%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8E%E1%85%A2%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%A6_%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%80%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A2%E1%84%92%E1%85%AC_01.png" title="" alt="01_2022_공채문제_양궁대회_01.png"></li>
<li>만약, k(k는 1~10사이의 자연수)점을 어피치가 a발을 맞혔고 라이언이 b발을 맞혔을 경우 더 많은 화살을 k점에 맞힌 선수가 k 점을 가져갑니다. 단, a = b일 경우는 어피치가 k점을 가져갑니다. <strong>k점을 여러 발 맞혀도 k점 보다 많은 점수를 가져가는 게 아니고 k점만 가져가는 것을 유의하세요. 또한 a = b = 0 인 경우, 즉, 라이언과 어피치 모두 k점에 단 하나의 화살도 맞히지 못한 경우는 어느 누구도 k점을 가져가지 않습니다.</strong>

<ul>
<li>예를 들어, 어피치가 10점을 2발 맞혔고 라이언도 10점을 2발 맞혔을 경우 어피치가 10점을 가져갑니다. </li>
<li>다른 예로, 어피치가 10점을 0발 맞혔고 라이언이 10점을 2발 맞혔을 경우 라이언이 10점을 가져갑니다.</li>
</ul></li>
<li>모든 과녁 점수에 대하여 각 선수의 최종 점수를 계산합니다.</li>
</ol></li>
<li>최종 점수가 더 높은 선수를 우승자로 결정합니다. 단, 최종 점수가 같을 경우&nbsp;어피치를 우승자로 결정합니다.</li>
</ol>

<p>현재 상황은 어피치가 화살 <code>n</code>발을 다 쏜 후이고 라이언이 화살을 쏠 차례입니다.<br>
라이언은 어피치를 가장 큰 점수 차이로 이기기 위해서 <code>n</code>발의 화살을 어떤 과녁 점수에 맞혀야 하는지를 구하려고 합니다.</p>

<p>화살의 개수를 담은 자연수 <code>n</code>, 어피치가 맞힌 과녁 점수의 개수를 10점부터 0점까지 순서대로 담은 정수 배열 <code>info</code>가 매개변수로 주어집니다. 이때, 라이언이 가장 큰 점수 차이로 우승하기 위해 <code>n</code>발의 화살을 어떤 과녁 점수에 맞혀야 하는지를 10점부터 0점까지 순서대로 정수 배열에 담아 return 하도록 solution 함수를 완성해 주세요. 만약, 라이언이 우승할 수 없는 경우(무조건 지거나 비기는 경우)는 <code>[-1]</code>을 return 해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>n</code> ≤ 10</li>
<li><code>info</code>의 길이 = 11

<ul>
<li>0 ≤ <code>info</code>의 원소 ≤ <code>n</code></li>
<li><code>info</code>의 원소 총합 = <code>n</code></li>
<li><code>info</code>의 i번째 원소는 과녁의 <code>10 - i</code> 점을 맞힌 화살 개수입니다. ( i는 0~10 사이의 정수입니다.)</li>
</ul></li>
<li>라이언이 우승할 방법이 있는 경우, return 할 정수 배열의 길이는 11입니다.

<ul>
<li>0 ≤ return할 정수 배열의 원소 ≤ <code>n</code></li>
<li>return할 정수 배열의 원소 총합 = <code>n</code> (꼭 n발을 다 쏴야 합니다.)</li>
<li>return할 정수 배열의 i번째 원소는 과녁의 <code>10 - i</code> 점을 맞힌 화살 개수입니다. ( i는 0~10 사이의 정수입니다.)</li>
<li><strong>라이언이 가장 큰 점수 차이로 우승할 수 있는 방법이 여러 가지 일 경우, 가장 낮은 점수를 더 많이 맞힌 경우를 return 해주세요.</strong>

<ul>
<li>가장 낮은 점수를 맞힌 개수가 같을 경우 계속해서 그다음으로 낮은 점수를 더 많이 맞힌 경우를 return 해주세요.</li>
<li>예를 들어, <code>[2,3,1,0,0,0,0,1,3,0,0]</code>과 <code>[2,1,0,2,0,0,0,2,3,0,0]</code>를 비교하면 <code>[2,1,0,2,0,0,0,2,3,0,0]</code>를 return 해야 합니다.</li>
<li>다른 예로, <code>[0,0,2,3,4,1,0,0,0,0,0]</code>과 <code>[9,0,0,0,0,0,0,0,1,0,0]</code>를 비교하면<code>[9,0,0,0,0,0,0,0,1,0,0]</code>를 return 해야 합니다.</li>
</ul></li>
</ul></li>
<li>라이언이 우승할 방법이 없는 경우, return 할 정수 배열의 길이는 1입니다. 

<ul>
<li>라이언이 어떻게 화살을 쏘든 <strong>라이언의 점수가 어피치의 점수보다 낮거나 같으면 <code>[-1]</code>을 return 해야 합니다.</strong></li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>info</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>5</td>
<td>[2,1,1,1,0,0,0,0,0,0,0]</td>
<td>[0,2,2,0,1,0,0,0,0,0,0]</td>
</tr>
<tr>
<td>1</td>
<td>[1,0,0,0,0,0,0,0,0,0,0]</td>
<td>[-1]</td>
</tr>
<tr>
<td>9</td>
<td>[0,0,1,2,0,1,1,1,1,1,1]</td>
<td>[1,1,2,0,1,2,2,0,0,0,0]</td>
</tr>
<tr>
<td>10</td>
<td>[0,0,0,0,0,0,0,0,3,4,3]</td>
<td>[1,1,1,1,1,1,1,1,0,0,2]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<p>어피치와 라이언이 아래와 같이 화살을 맞힐 경우, </p>
<table class="table">
        <thead><tr>
<th>과녁 점수</th>
<th>어피치가 맞힌 화살 개수</th>
<th>라이언이 맞힌 화살 개수</th>
<th>결과</th>
</tr>
</thead>
        <tbody><tr>
<td>10</td>
<td>2</td>
<td>3</td>
<td>라이언이 10점 획득</td>
</tr>
<tr>
<td>9</td>
<td>1</td>
<td>2</td>
<td>라이언이 9점 획득</td>
</tr>
<tr>
<td>8</td>
<td>1</td>
<td>0</td>
<td>어피치가 8점 획득</td>
</tr>
<tr>
<td>7</td>
<td>1</td>
<td>0</td>
<td>어피치가 7점 획득</td>
</tr>
<tr>
<td>6</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>0</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
</tbody>
      </table>
<p>어피치의 최종 점수는 15점, 라이언의 최종 점수는 19점입니다. 4점 차이로 라이언이 우승합니다.</p>

<p>하지만, 라이언이 아래와 같이 화살을 맞힐 경우 더 큰 점수 차로 우승할 수 있습니다.</p>
<table class="table">
        <thead><tr>
<th>과녁 점수</th>
<th>어피치가 맞힌 화살 개수</th>
<th>라이언이 맞힌 화살 개수</th>
<th>결과</th>
</tr>
</thead>
        <tbody><tr>
<td>10</td>
<td>2</td>
<td>0</td>
<td>어피치가 10점 획득</td>
</tr>
<tr>
<td>9</td>
<td>1</td>
<td>2</td>
<td>라이언이 9점 획득</td>
</tr>
<tr>
<td>8</td>
<td>1</td>
<td>2</td>
<td>라이언이 8점 획득</td>
</tr>
<tr>
<td>7</td>
<td>1</td>
<td>0</td>
<td>어피치가 7점 획득</td>
</tr>
<tr>
<td>6</td>
<td>0</td>
<td>1</td>
<td>라이언이 6점 획득</td>
</tr>
<tr>
<td>5</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>0</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
</tbody>
      </table>
<p>어피치의 최종 점수는 17점, 라이언의 최종 점수는 23점입니다. 6점 차이로 라이언이 우승합니다.</p>

<p>따라서 <code>[0,2,2,0,1,0,0,0,0,0,0]</code>을 return 해야 합니다.</p>

<p><strong>입출력 예 #2</strong></p>

<p>라이언이 10점을 맞혀도 어피치가 10점을 가져가게 됩니다.<br>
따라서, 라이언은 우승할 수 없기 때문에 <code>[-1]</code>을 return 해야 합니다.</p>

<p><strong>입출력 예 #3</strong></p>

<p>어피치와 라이언이 아래와 같이 화살을 맞힐 경우, </p>
<table class="table">
        <thead><tr>
<th>과녁 점수</th>
<th>어피치가 맞힌 화살 개수</th>
<th>라이언이 맞힌 화살 개수</th>
<th>결과</th>
</tr>
</thead>
        <tbody><tr>
<td>10</td>
<td>0</td>
<td>1</td>
<td>라이언이 10점 획득</td>
</tr>
<tr>
<td>9</td>
<td>0</td>
<td>1</td>
<td>라이언이 9점 획득</td>
</tr>
<tr>
<td>8</td>
<td>1</td>
<td>2</td>
<td>라이언이 8점 획득</td>
</tr>
<tr>
<td>7</td>
<td>2</td>
<td>3</td>
<td>라이언이 7점 획득</td>
</tr>
<tr>
<td>6</td>
<td>0</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>1</td>
<td>2</td>
<td>라이언이 5점 획득</td>
</tr>
<tr>
<td>4</td>
<td>1</td>
<td>0</td>
<td>어피치가 4점 획득</td>
</tr>
<tr>
<td>3</td>
<td>1</td>
<td>0</td>
<td>어피치가 3점 획득</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>0</td>
<td>어피치가 2점 획득</td>
</tr>
<tr>
<td>1</td>
<td>1</td>
<td>0</td>
<td>어피치가 1점 획득</td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>0</td>
<td>어피치가 0점 획득</td>
</tr>
</tbody>
      </table>
<p>어피치의 최종 점수는 10점, 라이언의 최종 점수는 39점입니다. 29점 차이로 라이언이 우승합니다.</p>

<p>하지만 라이언이 아래와 같이 화살을 맞힐 경우,</p>
<table class="table">
        <thead><tr>
<th>과녁 점수</th>
<th>어피치가 맞힌 화살 개수</th>
<th>라이언이 맞힌 화살 개수</th>
<th>결과</th>
</tr>
</thead>
        <tbody><tr>
<td>10</td>
<td>0</td>
<td>1</td>
<td>라이언이 10점 획득</td>
</tr>
<tr>
<td>9</td>
<td>0</td>
<td>1</td>
<td>라이언이 9점 획득</td>
</tr>
<tr>
<td>8</td>
<td>1</td>
<td>2</td>
<td>라이언이 8점 획득</td>
</tr>
<tr>
<td>7</td>
<td>2</td>
<td>0</td>
<td>어피치가 7점 획득</td>
</tr>
<tr>
<td>6</td>
<td>0</td>
<td>1</td>
<td>라이언이 6점 획득</td>
</tr>
<tr>
<td>5</td>
<td>1</td>
<td>2</td>
<td>라이언이 5점 획득</td>
</tr>
<tr>
<td>4</td>
<td>1</td>
<td>2</td>
<td>라이언이 4점 획득</td>
</tr>
<tr>
<td>3</td>
<td>1</td>
<td>0</td>
<td>어피치가 3점 획득</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>0</td>
<td>어피치가 2점 획득</td>
</tr>
<tr>
<td>1</td>
<td>1</td>
<td>0</td>
<td>어피치가 1점 획득</td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>0</td>
<td>어피치가 0점 획득</td>
</tr>
</tbody>
      </table>
<p>어피치의 최종 점수는 13점, 라이언의 최종 점수는 42점입니다. 이 경우도 29점 차이로 라이언이 우승합니다.<br>
하지만, 첫 번째 경우와 두 번째 경우를 비교했을 때, 두 번째 경우가 두 경우 중 가장 낮은 점수인 4점을 더 많이 맞혔기 때문에 <code>[1,1,2,3,0,2,0,0,0,0,0]</code>이 아닌 <code>[1,1,2,0,1,2,2,0,0,0,0]</code>을 return 해야 합니다.</p>

<p><strong>입출력 예 #4</strong>  </p>

<p>가장 큰 점수 차이로 이기는 경우 중에서 가장 낮은 점수를 가장 많이 맞힌, 10~3점을 한 발씩 맞히고 나머지 두 발을 0점에 맞히는 경우인 <code>[1,1,1,1,1,1,1,1,0,0,2]</code>를 return 해야 합니다.</p>

<hr>

<h5>제한시간 안내</h5>

<ul>
<li>정확성 테스트 : 10초</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges