a, b, c = input().split(" ")

sum = int(a) + int(b) + int(c)
avg = sum // 3

print(sum, avg, sum - avg, sep="\n")