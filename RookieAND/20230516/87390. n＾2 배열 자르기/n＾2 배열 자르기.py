def solution(N, left, right):
    answer = []
    for num in range(left, right + 1):
        answer.append(max(num // N, num % N) + 1)
    return answer
