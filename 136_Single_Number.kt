//136. Single Number
//https://leetcode.com/problems/single-number/

class Solution {
    fun singleNumber(nums: IntArray): Int {
        val list = listOf(nums)
        println(nums.distinct())
        var answer:Int = 0
        for (item in nums.distinct()){
            println("item: $item")
            val predicate: (Int) -> Boolean = {it == item}
            if (nums.count(predicate) == 1) {
                answer = item
                break;
            }
        }
        return answer
    }
}
