//import "strings"
//too slow
// func truncateSentence(s string, k int) string {
//     str:= strings.Split(s, " ")
//     res:=""

//     for i:=0; i<k; i++ {
//         res+=str[i]
//         if i+1 < k {
//             res+=" "
//         }
//     }

//     return res
// }


//too slow
func truncateSentence(s string, k int) string {
    str:=strings.Split(s, " ")
    return strings.Join(str[0:k], " ")
}


//the slowest
// func truncateSentence(s string, k int) string {
//     res:= ""
//     spaceCount:=0
//     const space rune = ' '
//     for _, ch := range s {
//         if ch == space {
//             spaceCount++
//             if spaceCount == k {
//                 return res
//             }
//             res+=" "
//         } else {
//             res+=string(ch)
//         }
//     }
//     return res
// }
