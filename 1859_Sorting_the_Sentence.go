import (
    "strings"
    "strconv"
)

func sortSentence(s string) string {
    sent := strings.Split(s, " ")
    res := make([]string, len(sent), len(sent))

    for _, word := range sent {
        num := string(word[len(word) - 1])
        index, _ := strconv.ParseInt(num, 10, 32)
        res[index-1], _, _ = strings.Cut(word, num)
    }

    return strings.Join(res, " ")
}
