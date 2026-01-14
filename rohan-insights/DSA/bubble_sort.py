nums = [3,2,9,6,8,4,1,7]
# nums = [1, 2, 3, 4, 6, 7, 8, 9]
n=len(nums)

for i in range(n-2,-1,-1):
    swap = False    # if list is already sorted loop runs only once
    for j in range(0,i+1):
        if nums[j]>nums[j+1]:
            nums[j],nums[j+1]=nums[j+1],nums[j]
            swap = True
    if swap == False: 
        break
print(nums)


# TC = O(n(n+1)/2) ~ O(n^2)
# SC = O(1)

# if list already sorted then

# TC = O(n)
# SC = O(1)
