"""
1. 이차원 평면 / N개의 직사각형 제공
2. 직사각형이 만들어내는 총 넓이를 구해라
"""

# N값 받기 / 2차원 배열 생성
OFFSET = 101
MAX = 201
N = int(input())
array = [[0] * MAX for _ in range(MAX)]
# FOR: N만큼 반복
for _ in range(N):
    # X1, X2, Y1, Y2 받기
    X1, Y1, X2, Y2 = map(int, input().split())
    X1 += OFFSET
    Y1 += OFFSET
    X2 += OFFSET
    Y2 += OFFSET
    # 색 칠하기
    for i in range(X1, X2):
        for j in range(Y1, Y2):
            array[i][j] = 1
# FOR: OFFSET 만큼
cnt = 0
for i in range(MAX):
    for j in range(MAX):
        if array[i][j] == 1:
            cnt += 1
# 결과 출력
print(cnt)