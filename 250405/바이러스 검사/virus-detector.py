store_cnt = int(input())
customer_arr = list(map(int, input().split()))
leader_cnt, member_cnt = map(int, input().split())
answer = 0

for cnt in customer_arr:
    answer += 1
    cnt -= leader_cnt

    if cnt != 0:
        if cnt % member_cnt != 0:
            answer += cnt // member_cnt + 1
        else:
            answer += cnt // member_cnt

print(answer)