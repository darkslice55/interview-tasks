console.log(dasherize('createDocumentFragment')); // 'create-document-fragment'
console.log(dasherize('SuperMAN'));               // 'super-man'
console.log(dasherize('VirtualDOMFragment'));     // 'virtual-dom-fragment'


function dasherize(str) {
    let upperCharsCount = 0
    const result = str.toLowerCase().split('')

    function addSeparator(position) {
        result.splice(position + upperCharsCount, 0, '-')
        upperCharsCount++
    }

    for (let i = 1; i < str.length; i++) {
        const char = str.charAt(i)
        if (char !== char.toUpperCase()) continue

        const startPosition = i
        let endPosition = startPosition
        
        while (true) {
            i++
            const nextChar = str.charAt(i)
            if (nextChar !== nextChar.toUpperCase()) {
                endPosition = i - 1
                break
            }
            if (i >= str.length) {
                break
            }
        }

        addSeparator(startPosition)
        if (endPosition !== startPosition) addSeparator(endPosition)
    }

    return result.join('')
}