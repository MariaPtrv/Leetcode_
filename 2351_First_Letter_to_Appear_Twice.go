//https://leetcode.com/problems/first-letter-to-appear-twice/

func repeatedCharacter(s string) byte {
    chars := make(map[rune]int)

    for _, ch := range s {
        if _, ok := chars[ch]; ok {
            return byte(ch)
        } else {
            chars[ch] = 1
        }
    }

    return byte(' ')
}
