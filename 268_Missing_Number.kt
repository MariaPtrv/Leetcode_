//268. Missing Number
//https://leetcode.com/problems/missing-number/

class Solution {
    fun missingNumber(nums: IntArray): Int {
        var allNums = 0..nums.size
        return (allNums.toList().subtract(nums.toSet()).first())
    }
}
