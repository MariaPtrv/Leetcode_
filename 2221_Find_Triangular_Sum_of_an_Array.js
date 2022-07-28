//2221. Find Triangular Sum of an Array
//https://leetcode.com/problems/find-triangular-sum-of-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    
    function getSumArray(_nums) {
        const newNums = [];
        for (let i = 0; i < _nums.length-1; i++) 
            newNums.push((_nums[i]+ _nums[i+1]) % 10);
        return newNums;
    }
    
    while (nums.length !== 1) {
        const newNums = getSumArray(nums);
        nums.splice(0, nums.length);
        newNums.forEach((element) => nums.push(element));
    }   
    return nums[0];
};
