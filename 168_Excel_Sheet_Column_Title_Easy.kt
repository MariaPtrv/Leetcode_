//168. Excel Sheet Column Title
//https://leetcode.com/problems/excel-sheet-column-title/


class Solution {
    fun convertToTitle(columnNumber: Int): String {
        val chank = 26
        var currentNum :Int = columnNumber
        var alphaList = ArrayList<Char>()
        var pem :Int
        var answerString:String = ""
        var ansList = ArrayList<Int>()
        
        for (elem in 'A'..'Z')
        alphaList.add(elem)

        while (currentNum > chank){
            pem = currentNum % chank
            ansList.add (pem)
            currentNum =
            if (pem == 0) currentNum / chank - 1
            else currentNum / chank
        }
        
        ansList.add(currentNum)
        
        for (item in ansList.reversed()) {
            var charIndex:Int =
            if (item - 1 >= 0) {
                item 
            }
            else {26 - item}

        answerString+=alphaList.get(charIndex-1)
    
        }

        return answerString
    }
}
