"""
1. N개의 숫자 제공
2. 연속해서 동일한 숫자가 나오는 횟수 중 최대 횟수 출력
"""
# N 입력 받기 / N개의 숫자를 담은 배열 생성
N = int(input())
array = [input() for _ in range(N)]
cnt, max_num = 0, 0

# FOR: N번 만큼 진행
for i in range(N):
    # IF: i = 0일때, 예외 처리
    if i == 0:
        cnt += 1
    else:
        # 이전 숫자와 동일한 숫자라면 +1
        if array[i] == array[i-1]:
            cnt += 1
        else:
            cnt = 1
    # cnt가 max 넘버라면 매칭
    if max_num < cnt:
        max_num = cnt
# max값 출력
print(max_num)