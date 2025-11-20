"""
1. 인덱스: 1 ~ N
2. Ai ~ Bi까지 블럭을 1씩 쌓으라는 명령이 K번 제공
3. 입력: N, K, A, B
4. 전부 수행한 이후 블럭의 수 중 최댓값을 출력
"""

# N, K 값 받아오기 / 1 ~ N 1차열 배열 생성
N, K = map(int, input().split())
block = [0 for i in range(N + 1)]

# FOR: K번 실행
for _ in range(K):
    # A, B 인덱스 받아오기
    a, b = map(int, input().split())
    # 블록 쌓기
    for i in range(a, b + 1):
        block[i] += 1

# MAX 구해서 최댓값 출력하기
result = max(block)

print(result)