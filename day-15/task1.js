console.log(includes('hello bob!', 'bob'));  // true
console.log(includes('abba', 'aba'));        // false


function includes(str, substr) {
    let charId = 0

    for (const char of str) {
        if (charId >= substr.length) {
            return true
        }

        if (charId === 0) {
            if (char === substr.charAt(charId)) {
                charId++
            }

            continue
        }

        if (char === substr.charAt(charId)) {
            charId++
        } else {
            charId = 0
        }
    }

    return false
}