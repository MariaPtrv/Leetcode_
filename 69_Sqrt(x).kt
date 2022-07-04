//69. Sqrt(x)
//https://leetcode.com/problems/sqrtx/

class Solution {
    fun mySqrt(x: Int): Int {
        var minVal:Int = 0
        var tempPow:Long = 1     
        while (tempPow <= x.toLong()) {
            minVal++
            tempPow = (minVal.toLong()+1)*(minVal.toLong()+1)
        } 
        return minVal
    }
}
