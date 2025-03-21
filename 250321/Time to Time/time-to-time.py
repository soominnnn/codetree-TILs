a, b, c, d = map(int, input().split())

first_time = a * 60 + b
last_time = c * 60 + d

print(last_time - first_time)