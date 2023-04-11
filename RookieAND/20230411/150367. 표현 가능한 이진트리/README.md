# [unrated] 표현 가능한 이진트리 - 150367 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/150367) 

### 성능 요약

메모리: 39.7 MB, 시간: 23.23 ms

### 구분

코딩테스트 연습 > 2023 KAKAO BLIND RECRUITMENT

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>당신은 이진트리를 수로 표현하는 것을 좋아합니다.</p>

<p>이진트리를 수로 표현하는 방법은 다음과 같습니다.</p>

<ol>
<li>이진수를 저장할 빈 문자열을 생성합니다.</li>
<li>주어진 이진트리에 더미 노드를 추가하여 포화 이진트리로 만듭니다. <strong>루트 노드는 그대로 유지합니다.</strong></li>
<li>만들어진 포화 이진트리의 노드들을 가장 왼쪽 노드부터 가장 오른쪽 노드까지, 왼쪽에 있는 순서대로 살펴봅니다. <strong>노드의 높이는 살펴보는 순서에 영향을 끼치지 않습니다.</strong></li>
<li>살펴본 노드가 더미 노드라면, 문자열 뒤에 0을 추가합니다. 살펴본 노드가 더미 노드가 아니라면, 문자열 뒤에 1을 추가합니다.</li>
<li>문자열에 저장된 이진수를 십진수로 변환합니다.</li>
</ol>

<p><strong>이진트리에서 리프 노드가 아닌 노드는 자신의 왼쪽 자식이 루트인 서브트리의 노드들보다 오른쪽에 있으며, 자신의 오른쪽 자식이 루트인 서브트리의 노드들보다 왼쪽에 있다고 가정합니다.</strong></p>

<p>다음은 이진트리를 수로 표현하는 예시입니다.</p>

<p>주어진 이진트리는 다음과 같습니다.<br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/c3331b5f-2151-4ebd-a20e-8df122709d3e/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7.drawio%20%284%29.png" title="" alt="제목 없는 다이어그램.drawio \(4\).png"></p>

<p>주어진 이진트리에 더미노드를 추가하여 포화 이진트리로 만들면 다음과 같습니다. <strong>더미 노드는 점선으로 표시하였고, 노드 안의 수는 살펴보는 순서를 의미합니다.</strong><br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/0eb238be-9bfe-479a-bed8-84e1abe63097/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7.drawio%20%285%29.png" title="" alt="제목 없는 다이어그램.drawio \(5\).png"></p>

<p>노드들을 왼쪽에 있는 순서대로 살펴보며 0과 1을 생성한 문자열에 추가하면 <code>"0111010"</code>이 됩니다. 이 이진수를 십진수로 변환하면 58입니다. </p>

<p>당신은 수가 주어졌을때, 하나의 이진트리로 해당 수를 표현할 수 있는지 알고 싶습니다.</p>

<p>이진트리로 만들고 싶은 수를 담은 1차원 정수 배열 <code>numbers</code>가 주어집니다. <code>numbers</code>에 주어진 순서대로 하나의 이진트리로 해당 수를 표현할 수 있다면 1을, 표현할 수 없다면 0을 1차원 정수 배열에 담아 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>numbers</code>의 길이 ≤ 10,000

<ul>
<li>1 ≤ <code>numbers</code>의 원소 ≤ 10<sup>15</sup></li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th><code>numbers</code></th>
<th><code>result</code></th>
</tr>
</thead>
        <tbody><tr>
<td>[7, 42, 5]</td>
<td>[1, 1, 0]</td>
</tr>
<tr>
<td>[63, 111, 95]</td>
<td>[1, 1, 0]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<p>7은 다음과 같은 이진트리로 표현할 수 있습니다.<br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/f7e1fdb9-3344-420d-9238-e033a24e83ba/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7.drawio%20%287%29.png" title="" alt="제목 없는 다이어그램.drawio \(7\).png"></p>

<p>42는 다음과 같은 이진트리로 표현할 수 있습니다.<br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/f7e1fdb9-3344-420d-9238-e033a24e83ba/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7.drawio%20%287%29.png" title="" alt="제목 없는 다이어그램.drawio \(7\).png"></p>

<p>5는 이진트리로 표현할 수 없습니다.</p>

<p>따라서, [1, 0]을 return 하면 됩니다.</p>

<p><strong>입출력 예 #2</strong></p>

<p>63은 다음과 같은 이진트리로 표현할 수 있습니다.<br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/ae334397-6cf6-4cb7-a76e-f760c080def3/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7.drawio%20%288%29.png" title="" alt="제목 없는 다이어그램.drawio \(8\).png"></p>

<p>111은 다음과 같은 이진트리로 표현할 수 있습니다.<br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/b6873b5d-421c-433e-a739-97f9ab1b62b8/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7.drawio%20%2810%29.png" title="" alt="제목 없는 다이어그램.drawio \(10\).png"></p>

<p>95는 이진트리로 표현할 수 없습니다.</p>

<p>따라서, [1, 1, 0]을 return 하면 됩니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges