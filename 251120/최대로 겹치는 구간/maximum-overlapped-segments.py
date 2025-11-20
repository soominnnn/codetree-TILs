"""
1. 최대로 겹치는 구간에서, 몇 개의 선분이 겹치는지 출력
2. 입력: N, X1, X2
3. 제한조건: 인덱스가 음수이므로, 인덱스를 양수로 맞춰줄 것
"""
# 200개의 배열 공간을 제작 / N 받아오기
array = [0 for i in range(201)]
N = int(input())

# FOR: N번 반복
for _ in range(N):
    # x1, x2 받아오기
    x1, x2 = map(int, input().split())
    x1 += 100
    x2 += 100
    # 겹치는 구간 +1씩 추가
    for i in range(x1, x2 + 1):
        array[i] += 1

# MAX 출력
result = max(array)

print(result)