def solution(nums):
    answer = 0
    n = len(nums) / 2
    k = 0
    arr = []
    while(n != 0 and k < len(nums)):
        if nums[k] not in arr:
            arr.append(nums[k])
            n = n - 1
            answer = answer + 1
        k = k + 1
        
    return answer