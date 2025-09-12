"""
1. push_back: append
2. pop_back: pop
3. size: len
4. get: arr[k]
"""
N = int(input())

array = []

# push_back -> append
def push_back(num):
    return array.append(num)
# pop_back -> pop
def pop_back():
    return array.pop()
# size -> len
def size():
    return print(len(array))
# get-> arr[k]
def get(k):
    return print(array[k])

for _ in range(N):
    command = input().split()

    if command[0] == "push_back":
        push_back(command[1])
    elif command[0] == "pop_back":
        pop_back()
    elif command[0] == "size":
        size()
    elif command[0] == "get":
        get(int(command[1]) - 1)