const MAIN_BASE = 10
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const hexPrefix = '0x'

const myParseInt = function(input, base) {
    try {
        const str = String(input)
        const checkedBase = checkBase(base)
    
        const overDecimal = checkedBase - MAIN_BASE
        const regexPattern = new RegExp(`^\-?(${hexPrefix})?[\\d${overDecimal > 0 ? `A-${alphabet[overDecimal - 1]}`: ''}]+`)
        const value = str.match(regexPattern)?.[0].replace(hexPrefix,'')
        if (!value) throw new Error()
        return convertToDecimal(value, checkedBase)
    }catch(err) {
        return NaN
    }
}

// base: <= 36
// return Number
const convertToDecimal = function(input, base) {
    const isNegative = input.startsWith('-')
    const str = isNegative ? input.slice(1) : input
    const charDict = alphabet.split('').reduce((acc, char, id) => ({...acc, [char]: id + MAIN_BASE}), {})

    let result = 0
    for (let i = str.length - 1; i >= 0; i--) {
        const curNumber = charDict[str[i]] || Number(str[i])
        result += curNumber * base**(str.length - 1 - i)
    }
    return result * (isNegative ? -1 : 1)
}

const checkBase = function(base) {
    if (!base || typeof base !== 'number') return MAIN_BASE
    return String(base).split('.')[0]
}

console.log(myParseInt('10'));      // 10
console.log(myParseInt('-10', 2));  // -2
console.log(myParseInt('FFP', 16)); // 255
console.log(myParseInt('--20'));    // NaN
console.log(myParseInt('asd213123asd'));    // NaN
console.log(parseInt('123sa', 'asdasd'));    // 123
console.log(parseInt('123sa', 10.3));    // 123
console.log(myParseInt("0xF", 16)); // 15
console.log(myParseInt("F", 16)); // 15
console.log(myParseInt("17", 8)); // 15
console.log(myParseInt("015", 10)); // 15
console.log(myParseInt("15,123", 10)); // 15
console.log(myParseInt("FXX123", 16)); // 15
console.log(myParseInt("1111", 2)); // 15
console.log(myParseInt("15 * 3", 10)); // 15
console.log(myParseInt("15e2", 10)); // 15
console.log(myParseInt("15px", 10)); // 15
console.log(myParseInt("12", 13)); // 15