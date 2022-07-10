//242. Valid Anagram
//https://leetcode.com/problems/valid-anagram/

class Solution {
    fun isAnagram(s: String, t: String): Boolean {
        if (s.length != t.length) return false
        return (s.toCharArray().sorted().joinToString() ==  t.toCharArray().sorted().joinToString())
    }
}
