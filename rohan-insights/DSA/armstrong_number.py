n = 153
num = n
total = 0
nod = len(str(n))

while num > 0:
    ld = num % 10
    total = total + (ld**nod)
    num = num // 10

print(total==n)