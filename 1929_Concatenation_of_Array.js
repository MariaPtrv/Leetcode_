//1929. Concatenation of Array
//https://leetcode.com/problems/concatenation-of-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = []
    for (let i = 0; i < nums.length; i++)
        ans.push(nums[i]);
    return ans.concat(ans);
};
