nums = [3,2,9,6,8,4,1,7]

n = len(nums)

for i in range(1,n):
    key = nums[i]
    j = i-1

    while j>=0 and nums[j]>key:
        nums[j+1]=nums[j]
        j-=1
    nums[j+1]=key

print(nums)

# TC = O(n(n+1)/2) ~ O(n^2)
# SC = O(1)
