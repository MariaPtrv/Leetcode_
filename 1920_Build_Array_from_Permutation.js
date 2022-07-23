//1920. Build Array from Permutation
//https://leetcode.com/problems/build-array-from-permutation/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const ans = [];
    for (let i = 0; i < nums.length; i++)
        ans.push(nums[nums[i]]);
    return ans
};
