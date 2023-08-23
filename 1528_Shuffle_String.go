func restoreString(s string, indices []int) string {
    str:= []byte(s)
    res := make([]byte, len(str), len(str))

    for i, val := range indices {
        res[val] = str[i]
    }

    return string(res)
}
