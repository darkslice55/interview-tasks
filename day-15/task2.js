console.log(maxUniqueSubstr('aab'));      // ab
console.log(maxUniqueSubstr('abcabcbb')); // abc
console.log(maxUniqueSubstr('bbbbb'));    // b
console.log(maxUniqueSubstr('pwwkew'));   // wke


function maxUniqueSubstr(str) {
    if (!str) return str

    let start = 0
    let end = 0
    const strings = []

    let substr = ''
    let dict

    while (true) {
        if (end >= str.length) break

        if (start === end) {
            const startChar = str.charAt(start)

            substr += startChar
            dict = new Map()
            dict.set(startChar, true)
            end++
            continue
        }

        if (dict.has(str.charAt(end))) {
            start = end
            strings.push(substr)
            substr=''

            continue
        }
        
        const endChar = str.charAt(end)
        dict.set(endChar, true)
        substr += endChar
        end++
    }

    if (substr) strings.push(substr)

    return strings.sort((a, b) => b.length - a.length)[0]
}