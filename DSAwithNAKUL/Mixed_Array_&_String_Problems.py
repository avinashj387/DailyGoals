#Longest Subarray with Sum = k
arr = [1, -1, 5, -2, 3]
k = 3

pref = 0
seen = {}
max_len = 0

for i, x in enumerate(arr):
    pref += x
    if pref == k:
        max_len = i + 1
    if pref - k in seen:
        max_len = max(max_len, i - seen[pref - k])
    seen.setdefault(pref, i)

print(max_len)
print("\n")


#Find the Majority Element
arr = [2, 2, 1, 1, 2, 2, 2]

count = 0
candidate = None

for x in arr:
    if count == 0:
        candidate = x
    count += 1 if x == candidate else -1

print(candidate)
print("\n")


