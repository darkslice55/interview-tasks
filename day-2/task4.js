const MAIN_BASE = 10
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const myParseInt = function(input, base = MAIN_BASE) {
    const overDecimal = base - MAIN_BASE
    const regexPattern = new RegExp(`^\-?(0x)?[\\d${overDecimal > 0 ? `A-${alphabet[overDecimal - 1]}`: ''}]+`)
    const value = input.match(regexPattern)?.[0]
    return value ? convertToDecimal(value, base) : NaN
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

console.log(myParseInt('10'));      // 10
console.log(myParseInt('-10', 2));  // -2
console.log(myParseInt('FFP', 16)); // 255
console.log(myParseInt('--20'));    // NaN
console.log(myParseInt('asd213123asd'));    // NaN
console.log(parseInt('asd213123asd'));    // NaN

// console.log(myParseInt('10') === parseInt('10')); 
// console.log(myParseInt('-10', 2) === parseInt('-10', 2));
// console.log(myParseInt('FFP', 16) === parseInt('FFP', 16));
// console.log(myParseInt('--20') === parseInt('--20')); 
// console.log(myParseInt('213123asd') === parseInt('213123asd'));  
// console.log(myParseInt('asd213123asd') === parseInt('asd213123asd'));  
console.log(myParseInt("0xF", 16));
console.log(myParseInt("F", 16));
console.log(myParseInt("17", 8));
console.log(myParseInt("015", 10)); // but `myParseInt('015', 8)` will return 13
console.log(myParseInt("15,123", 10));
console.log(myParseInt("FXX123", 16));
console.log(myParseInt("1111", 2));
console.log(myParseInt("15 * 3", 10));
console.log(myParseInt("15e2", 10));
console.log(myParseInt("15px", 10));
console.log(myParseInt("12", 13));