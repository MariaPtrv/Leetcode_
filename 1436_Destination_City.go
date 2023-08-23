func destCity(paths [][]string) string {
    cities := make(map[string]int, len(paths))

    for _, path := range paths {
        cities[path[0]]--
        if _, found := cities[path[1]]; found != true {
            cities[path[1]] = 0
        }
    }

    for key, value := range cities {
        if value == 0 {
            return key
        }
    }

    return ""
}
