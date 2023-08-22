func plusOne(digits []int) []int {
    lastIndex := len(digits) - 1

    if digits[lastIndex] > 8 {
        dec := 1
        for i := lastIndex; i > -1; i-- {
            digits[i]+=dec 
            if digits[i] > 9 {
                digits[i] = digits[i] % 10
                dec = 1
            } else {
                dec = 0
            }
        }

        if dec == 1 {
            digits = append([]int{1}, digits...)
        }

    } else {
        digits[lastIndex]++
    }

    return digits
}
