func findDisappearedNumbers(nums []int) []int {
    start, end := 0, 0 
    all := make(map[int]int)
    
    for i:=1; i < len(nums)+1; i++ {
        all[i] = i
    }
    
    for _, v := range nums {
        delete(all, v)
    }
    
    if len(all) == 0 {
        return []int{}
    }
    
    for _, v := range all {
        if v < start || start == 0 {
            start = v
        }
        
        if v > end {
            end = v
        }
    }
    
    if start != end {
        ans := make([]int, 0, len(all))
        for _, v :=range all {
            ans = append(ans, v)
        }
        return ans
    } else {
        return []int{start}
    }
  
}
