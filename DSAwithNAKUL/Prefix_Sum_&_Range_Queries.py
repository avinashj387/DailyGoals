print("Build Prefix Sum Array")
arr = [2, 4, 1, 3, 6]

prefix = [arr[0]]
for x in arr[1:]:
    prefix.append(prefix[-1] + x)

print(prefix)
print("\n")
print("Find Sum of Elements in Multiple Ranges")
def range_sum(l, r):
    return prefix[r] if l == 0 else prefix[r] - prefix[l - 1]

print(range_sum(1, 3))
print(range_sum(0, 4))
print("\n")
print("Compare Brute-Force vs Prefix Approach")
# Brute force range sum
print(sum(arr[1:4]))

# Prefix sum range sum
print(range_sum(1, 3))
