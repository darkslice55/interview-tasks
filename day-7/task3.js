console.log(dasherize('createDocumentFragment')); // 'create-document-fragment'
console.log(dasherize('SuperMAN'));               // 'super-man'
console.log(dasherize('VirtualDOMFragment'));     // 'virtual-dom-fragment'
console.log(dasherize('Virtual131DOM134'));     // 'virtual131-dom134'


function dasherize(str) {
    let upperCharsCount = 0
    const result = str.toLowerCase().split('')

    function addSeparator(position) {
        result.splice(position + upperCharsCount, 0, '-')
        upperCharsCount++
    }

    function isNotUpper(char) {
        return char !== char.toUpperCase()
    }

    function isNumber(char) {
        return !Number.isNaN(Number(char))
    }

    for (let i = 1; i < str.length; i++) {
        const char = str.charAt(i)
        if (isNotUpper(char) || isNumber(char)) continue

        const startPosition = i
        let endPosition = startPosition
        
        while (true) {
            if (i >= str.length) {
                break
            }

            i++
            const nextChar = str.charAt(i)

            if (isNumber(nextChar)) continue
            
            if (isNotUpper(nextChar)) {
                endPosition = i - 1
                break
            }
        }

        addSeparator(startPosition)
        if (endPosition !== startPosition) addSeparator(endPosition)
    }

    return result.join('')
}