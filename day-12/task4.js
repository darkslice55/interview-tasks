console.log(myParseFloat('10'));      // 10
console.log(myParseFloat('-10.2'));   // -10.2
console.log(myParseFloat('6e-2'));    // 0.06
console.log(myParseFloat('--20'));    // NaN
console.log(myParseFloat('3.6e2'));    // 360
console.log(myParseFloat('3.6e'));    // 3.6



function myParseFloat(str) {
    let isNegative = false
    let start = 0
    let integerPart = ''
    let fractionalPart = ''
    let exponentialPart = ''
    let isExpNegative = false
    let state = 0 // 0 - ищем целое, 1 - ищем дробное, 2 - экспоненциальная форма, ищем знак, 3 - ищем степень десяти

    if (str.charAt(0) === '-') {
        isNegative = true
        start = 1
    }

    function isNumber(char) {
        return !Number.isNaN(Number(char))
    }

    for (const char of str.slice(start)) {
        if (state === 0) {
            if (char === '.') {
                state = 1
                continue
            }

            if (char === 'e') {
                state = 2
                continue
            }

            if (!isNumber(char)) break

            integerPart += char

            continue
        }

        if (state === 1) {
            if (char === 'e') {
                state = 2
                continue
            }

            if (!isNumber(char)) break

            fractionalPart += char

            continue
        }


        if (state === 2) {
            if (char === '-') {
                state = 3
                isExpNegative = true
                continue
            }

            if (isNumber(char)) {
                state = 3
                exponentialPart += char
                continue
            }

            break

        }

        if (state === 3) {
            if (!isNumber(char)) break

            exponentialPart += char

            continue
        }
    }


    const expFactor = state === 3 && exponentialPart ? 10**((isExpNegative ? -1 : 1) * exponentialPart) : 1


    return Number(`${integerPart}.${fractionalPart}`) * (isNegative ? -1 : 1) * expFactor
}