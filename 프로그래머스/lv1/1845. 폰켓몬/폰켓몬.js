function solution(nums) {
    const setLen = [...new Set(nums)].length;
    const max = nums.length / 2;
    
    return setLen < max ? setLen : max;
    
    //return [...new Set(nums)].length < nums.length/2 ? [...new Set(nums)].length : nums.length/2;
}