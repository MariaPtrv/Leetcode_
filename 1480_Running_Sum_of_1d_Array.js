//1480. Running Sum of 1d Array
//https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const ans = [];
    nums.reduce((accumulator, currentElement) => {
        const temp = accumulator + currentElement;
        ans.push(temp);
        return temp;
    }, 0)
    return ans;
};
