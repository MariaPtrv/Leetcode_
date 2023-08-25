//https://leetcode.com/problems/uncommon-words-from-two-sentences/

import "strings"

func uncommonFromSentences(s1 string, s2 string) []string {
    str := strings.Split(s1 + " " + s2, " ")

    words := make(map[string]int)

    for _, s := range str {
        if _, ok := words[s]; ok {
            words[s]++
        } else {
            words[s] = 1
        }
    }

    res:= make([]string, 0, len(words))

    for k,v := range words {
        if v==1 {
            res = append(res, k)
        }
    }

    return res
}
