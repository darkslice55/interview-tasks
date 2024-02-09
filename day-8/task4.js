console.log(calc('12+5*2/(60-58)-5')); // 12


function calc(str) {
    const operatorWeight = {
        '-': 0,
        '+': 0,
        '*': 1,
        '/': 1,
    } 

    const stack = []
    let operand = ''
    let postfixException = []

    const pushOperand = () => {
        if (operand) {
            postfixException.push(Number(operand))
            operand = ''
        }
    }

    for (const char of str) {

        switch(char) {
            case ('+'):
            case ('*'):
            case ('/'):
            case ('-'): {
                pushOperand()
                if (!stack.length){
                    stack.push(char)
                } else {
                    while (stack.length) {
                        const stackTop = stack.pop()
                        
                        if (stackTop === '(') {
                            stack.push(stackTop)
                            break
                        } else {
                            if (operatorWeight[stackTop] >= operatorWeight[char]) {
                                postfixException.push(stackTop)
                            } else {
                                stack.push(stackTop)
                                break
                            }
                        }
                    }
                    stack.push(char)
                }
                break 
            }
            case ('('): {
                pushOperand()
                stack.push(char)
                break
            }
            case (')'): {
                pushOperand()
                while (stack.length) {
                    const stackTop = stack.pop()
                    if (stackTop === '(') {
                        break
                    } else {
                        postfixException.push(stackTop)
                    }
                }
                break
            }
            default: {
                console.log(char, Number.isNaN(Number(char)));
                if (Number.isNaN(Number(char))) throw new Error(`В выражении обнаружен некорректный символ ${char}`)
                if (operand) {
                    operand += char
                    pushOperand()
                } else {
                    operand += char
                }
            }
        }
    }

    if (operand) postfixException.push(Number(operand))

    while (stack.length) {
        const stackTop = stack.pop()
        postfixException.push(stackTop)
    }


    function postFixCalculator(postfixException) {
        const stack = []
        for (const item of postfixException) {
            if (Object.keys(operatorWeight).includes(item)) {
                const operand2 = stack.pop()
                const operand1 = stack.pop()
                switch (item) {
                    case('-'): {
                        stack.push(operand1 - operand2)
                        break
                    }
                    case('+'): {
                        stack.push(operand1 + operand2)
                        break
                    }
                    case('*'): {
                        stack.push(operand1 * operand2)
                        break
                    }
                    case('/'): {
                        stack.push(operand1 / operand2)
                        break
                    }
                }
            } else {
                stack.push(item)
            }
        }
        return stack[0]
    }

    return postFixCalculator(postfixException)
}