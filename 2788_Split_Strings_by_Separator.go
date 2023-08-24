//https://leetcode.com/problems/split-strings-by-separator/

import "strings"

func splitWordsBySeparator(words []string, separator byte) []string {
    var temp []string
    for _, word := range words {
        w :=  strings.Split(strings.Trim(word, string(separator)), string(separator))
        temp = append(temp, w...)
    }

    var res []string
    for _, s := range temp {
        if len(s) > 0 {
            res = append(res, s)
        } 
    }
    return res
}
