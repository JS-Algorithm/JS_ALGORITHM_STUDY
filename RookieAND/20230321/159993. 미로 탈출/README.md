# [unrated] 미로 탈출 - 159993 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/159993) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.80 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>1 x 1 크기의 칸들로 이루어진 직사각형 격자 형태의 미로에서 탈출하려고 합니다. 각 칸은 통로 또는 벽으로 구성되어 있으며, 벽으로 된 칸은 지나갈 수 없고 통로로 된 칸으로만 이동할 수 있습니다. 통로들 중 한 칸에는 미로를 빠져나가는 문이 있는데, 이 문은 레버를 당겨서만 열 수 있습니다. 레버 또한 통로들 중 한 칸에 있습니다. 따라서, 출발 지점에서 먼저 레버가 있는 칸으로 이동하여 레버를 당긴 후 미로를 빠져나가는 문이 있는 칸으로 이동하면 됩니다. 이때 아직 레버를 당기지 않았더라도 출구가 있는 칸을 지나갈 수 있습니다. 미로에서 한 칸을 이동하는데 1초가 걸린다고 할 때, 최대한 빠르게 미로를 빠져나가는데 걸리는 시간을 구하려 합니다.</p>

<p>미로를 나타낸 문자열 배열&nbsp;<code>maps</code>가 매개변수로 주어질 때, 미로를 탈출하는데 필요한 최소 시간을 return 하는 solution 함수를 완성해주세요. 만약, 탈출할 수 없다면 -1을 return 해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>5&nbsp;≤ <code>maps</code>의 길이 ≤ 100

<ul>
<li>5 ≤ <code>maps[i]</code>의 길이 ≤ 100</li>
<li><code>maps[i]</code>는 다음 5개의 문자들로만 이루어져 있습니다.

<ul>
<li>S : 시작 지점</li>
<li>E : 출구</li>
<li>L : 레버</li>
<li>O : 통로</li>
<li>X : 벽</li>
</ul></li>
<li>시작 지점과 출구, 레버는 항상 다른 곳에 존재하며 한 개씩만 존재합니다.</li>
<li>출구는 레버가 당겨지지 않아도 지나갈 수 있으며, 모든 통로, 출구, 레버, 시작점은 여러 번 지나갈 수 있습니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>maps</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"]</td>
<td>16</td>
</tr>
<tr>
<td>["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"]</td>
<td>-1</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<p>주어진 문자열은 다음과 같은 미로이며</p>

<p><img src="https://user-images.githubusercontent.com/62426665/214443486-cb2b84a4-afc6-4b25-8da2-645a853859f1.png" title="" alt="image1"></p>

<p>다음과 같이 이동하면 가장 빠른 시간에 탈출할 수 있습니다.</p>

<p><img src="https://user-images.githubusercontent.com/62426665/207090680-93289071-da4f-4126-9c31-066c1d4d3802.png" title="" alt="image2"></p>

<p>4번 이동하여 레버를 당기고 출구까지 이동하면 총 16초의 시간이 걸립니다. 따라서 16을 반환합니다.</p>

<p>입출력 예 #2</p>

<p>주어진 문자열은 다음과 같은 미로입니다.</p>

<p><img src="https://user-images.githubusercontent.com/62426665/214443892-1e7734e9-b4c8-49af-ba29-aa5597039617.png" title="" alt="image3"></p>

<p>시작 지점에서 이동할 수 있는 공간이 없어서 탈출할 수 없습니다. 따라서 -1을 반환합니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges