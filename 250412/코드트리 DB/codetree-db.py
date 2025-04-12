from bisect import bisect_right, insort

table = {}              # name -> value
sorted_values = []      # 항상 정렬된 상태 유지
value_to_name = {}      # value -> name (unique value니까 가능)

def init():
    table.clear()
    sorted_values.clear()
    value_to_name.clear()

def insert(input):
    query = input.split()
    name, value = query[1], int(query[2])

    if name in table or value in value_to_name:
        print(0)
    else:
        table[name] = value
        value_to_name[value] = name
        insort(sorted_values, value)  # O(log N)
        print(1)

def delete(input):
    name = input.split()[1]

    if name in table:
        value = table.pop(name)
        sorted_values.remove(value)  # O(N)이지만 value가 unique니까 괜찮음
        value_to_name.pop(value)
        print(value)
    else:
        print(0)

def rank(input):
    k = int(input.split()[1])

    if k > len(sorted_values):
        print("None")
    else:
        value = sorted_values[k - 1]
        print(value_to_name[value])

def sum_value(input):
    k = int(input.split()[1])
    idx = bisect_right(sorted_values, k)  # k 이하 값의 개수
    print(sum(sorted_values[:idx]))

Q = int(input())
for _ in range(Q):
    inp = input()
    if inp.startswith("init"):
        init()
    elif inp.startswith("insert"):
        insert(inp)
    elif inp.startswith("delete"):
        delete(inp)
    elif inp.startswith("rank"):
        rank(inp)
    elif inp.startswith("sum"):
        sum_value(inp)
