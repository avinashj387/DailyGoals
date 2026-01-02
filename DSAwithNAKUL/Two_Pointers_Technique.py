#Check if an array has a pair with given sum
arr = [1, 2, 3, 4, 6, 8]
target = 10

l, r = 0, len(arr) - 1
found = False

while l < r:
    s = arr[l] + arr[r]
    if s == target:
        found = True
        break
    elif s < target:
        l += 1
    else:
        r -= 1

print(found)
print("\n")
#Reverse an array using two pointers
arr = [1, 2, 3, 4, 5]

l, r = 0, len(arr) - 1
while l < r:
    arr[l], arr[r] = arr[r], arr[l]
    l += 1
    r -= 1

print(arr)
print("\n")
#Check if a string is a palindrome using two pointers
s = "madam"

l, r = 0, len(s) - 1
is_palindrome = True

while l < r:
    if s[l] != s[r]:
        is_palindrome = False
        break
    l += 1
    r -= 1

print(is_palindrome)
