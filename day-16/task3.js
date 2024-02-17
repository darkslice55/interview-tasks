console.log(isValid('(hello{world} and [me])'));  // true
console.log(isValid('(hello{world)} and [me])')); // false
console.log(isValid(')'));                        // false


function isValid(str) {
    const bracersDict = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
    }
    const openBracers = Object.values(bracersDict)
    const closeBracers = Object.keys(bracersDict)
    const stack = []

    for (const char of str) {
        if (openBracers.includes(char)) {
            stack.push(char)
            continue
        }

        if (closeBracers.includes(char)) {
            const previousBracer = stack.pop()
            if (bracersDict[char] !== previousBracer) {
                return false
            }
            continue
        }
    }

    return !stack.length
}