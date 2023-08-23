func countMatches(items [][]string, ruleKey string, ruleValue string) int {
    count:= 0
    index:= 0
    switch ruleKey {
        case "color":
        index = 1
        case "name":
        index = 2
    }

    for _, item := range items {
        if item[index] == ruleValue {
            count++
        }
    }

    return count

}
