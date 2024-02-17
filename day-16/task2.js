const isPalindrome = (str) => {
    let start = 0
    let end = str.length - 1

    if (start >= end) return false

    while (start < end) {
        if (str.charAt(start) !== str.charAt(end)) {
            return false
        }

        start++
        end--
    }

    return true
    
}


console.log(findPalindromicSubstring('adaabbabla')); // 'abba'
console.log(findPalindromicSubstring('blablur'));    // null


function findPalindromicSubstring(str) {
    if (str.length <= 0) {
        return null
    }

    if (isPalindrome(str)) {
        return str
    }

    return [findPalindromicSubstring(str.slice(1)), findPalindromicSubstring(str.slice(0, str.length - 1))]
            .sort((a, b) => (b?.length ?? 0) - (a?.length ?? 0))[0]
    
}