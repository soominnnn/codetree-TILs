"""
1. 0부터 시작하여 N번의 명령에 걸쳐 움직임
2. 2번 이상 지나간 영역의 크기를 출력
3. 입력: N, 명령[숫자 L or R]
4. 1001 인덱스 생성
"""
# N 입력 받아오기 / 배열 생성 / 현재 위치 저장
N = int(input())
array = [0 for i in range(1001)]
cur_pos = 0
cnt = 0

# FOR: N번 실행
for _ in range(N):
    # 명령 받아오기
    n, d = input().split()
    n = int(n)
    # 명령 실행: 지나간 공간에 +1
    for i in range(cur_pos, n + 1):
        array[i] += 1
    # 현재 위치를 마지막 위치로 변경
    cur_pos = n

# 칸의 숫자가 2이상이면 CNT +1
for i in range(len(array)):
    if array[i] >= 2:
        cnt += 1

print(cnt)