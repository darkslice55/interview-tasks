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

console.log(isPalindrome('bob'));  // true
console.log(isPalindrome('abba')); // true
console.log(isPalindrome('a'));    // false
console.log(isPalindrome('azt'));  // false