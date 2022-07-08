//169. Majority Element
//https://leetcode.com/problems/majority-element/

class Solution {
    fun majorityElement(nums: IntArray): Int {
        return (nums.toList().groupingBy{it}.eachCount().filter{it.value > nums.count()/2}.keys.first())
    }
}
