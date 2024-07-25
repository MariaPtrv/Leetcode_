package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	var n int

	//arr := []int{3, 4, 1, 43, 643, 21, 332, 53, -2, 90, 0}
	in := bufio.NewReader(os.Stdin)
	fmt.Fscan(in, &n)
	arr := make([]int, 0, n)
	for i := 0; i < n; i++ {
		var val int
		fmt.Fscan(in, &val)
		arr = append(arr, val)
	}

	fmt.Println(arr)
	fmt.Println("Sorted: ", mergeSort(arr))
}

func mergeSort(arr []int) []int {
	if len(arr) < 2 {
		return arr
	}

	mid := len(arr) / 2
	left := mergeSort(arr[:mid])
	right := mergeSort(arr[mid:])

	return merge(left, right)
}

func merge(left, right []int) []int {
	var merged []int
	for len(left) > 0 && len(right) > 0 {
		if left[0] <= right[0] {
			merged = append(merged, left[0])
			left = left[1:]
		} else {
			merged = append(merged, right[0])
			right = right[1:]
		}
	}

	merged = append(merged, left...)
	merged = append(merged, right...)

	return merged
}
