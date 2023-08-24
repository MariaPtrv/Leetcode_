import "strings"

func findWords(words []string) []string {
    rows := []string{"qwertyuiop","asdfghjkl","zxcvbnm"}
    chars := make(map[rune]int)

    for i, row := range rows {
        for _, ch :=range row {
            chars[ch] = i
        }
    }

    res := make([]string, 0, len(words))

    currentRow := 0
    isCorrect := true

    for _, word := range words {
        
        isCorrect = true

        for i, ch := range strings.ToLower(word) {
            if i == 0 {
                currentRow = chars[ch]
            }

            if chars[ch] != currentRow {
                isCorrect = false
                break
            }
        }

        if isCorrect {
            res = append(res, word)
        }
     }

     return res
}
