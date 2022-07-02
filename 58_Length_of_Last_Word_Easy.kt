//58. Length of Last Word Easy
//https://leetcode.com/problems/length-of-last-word/

class Solution {
    fun lengthOfLastWord(s: String): Int {
        var regex = Regex("\\w+")
        var m = regex.findAll(s);
        return m.last().value.toString().length
    }
}
