def init():
    table.clear()

def insert(input):
    query = input.split()
    name, value = query[1], int(query[2])

    if name in table or value in table.values():
        print(0)
    else:
        table[name] = value
        print(1)
def delete(input):
    name = input.split()[1]

    if name in table:
        print(table.pop(name))
    else:
        print(0)

def rank(input):
    k = int(input.split()[1])
    sorted_table = sorted(table.values())

    if k > len(sorted_table):
        return print("None")

    for key, value in table.items():
        if sorted_table[k-1] == value:
            return print(key)

def sum_value(input):
    s = 0
    k = int(input.split()[1])

    for key, value in table.items():
        if value <= k:
            s += value

    if s == 0:
        print(0)
    else:
        print(s)

Q = int(input())
table = {}

for idx in range(Q):
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