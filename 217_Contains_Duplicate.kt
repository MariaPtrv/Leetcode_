//217. Contains Duplicate
//https://leetcode.com/problems/contains-duplicate/

class Solution {
    fun containsDuplicate(nums: IntArray): Boolean {
        return if (nums.toList().groupingBy{it}.eachCount().filter{it.value > 1}.keys.count() > 0) true else false
    }
}
