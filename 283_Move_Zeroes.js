//283. Move Zeroes
//https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    return nums.sort((a,b)=>{
    if (a===0 && b!===0)
        return 1
    
    if (a!==0 && b===0)
        return -1
    
    if ((a!==0 && b!==0)|| (a===0 && b===0))
        return 0
    
 })};
