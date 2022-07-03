//202. Happy Number
//https://leetcode.com/problems/happy-number/submissions/

class Solution {
    fun isHappy(n: Int): Boolean {
        val MAX_VALUE: Int = 2147483647
        var sum:Int = n
        var tempValue = 0
        if (n > 0) {
            var counter:Int = 0;
            while (counter < MAX_VALUE) {
                if (sum==1) return true
                counter++
                val digits = Regex("\\d").findAll(sum.toString())
                val ex: Int = 2
                sum = 0
                digits.forEach{sum+=Math.pow(it.value.toDouble(), ex.toDouble()).toInt()}
                if (digits.count() < 2 && sum !=1){
                    if (tempValue == sum) return false
                    tempValue = sum
                }
                println(sum)
            }
            return false
        }
        else return false
    }
}
