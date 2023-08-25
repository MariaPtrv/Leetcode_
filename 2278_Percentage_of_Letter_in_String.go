//https://leetcode.com/problems/percentage-of-letter-in-string

func percentageLetter(s string, letter byte) int {
    res:=float64(strings.Count(s, string(letter)))/float64(len(s))*100
    return int(res)
}
