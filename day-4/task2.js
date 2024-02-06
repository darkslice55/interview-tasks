class MyNumber {
    #number

    constructor(initValue = 0) {
        this.#number = initValue
    }

    add(value) {
        this.#number += Number(value)

        return this 
    }

    mult(value) {
        this.#number *= Number(value)

        return this 
    }

    sub(value) {
        this.#number -= Number(value)

        return this 
    }

    div(value) {
        if (Number(value) === 0) throw new TypeError('Нельзя делить на 0')

        this.#number /= Number(value)

        return this 
    }

    [Symbol.toPrimitive]() {
        return this.#number
    }
}

const num = new MyNumber(10);

console.log(num.add(2).mult(2).sub(1) - 5); // 18
