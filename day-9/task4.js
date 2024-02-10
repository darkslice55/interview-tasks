class Queue {
    #arr
    length = 0

    constructor() {
        this.#arr = new Array()
    }

    push(item) {
        this.#arr[this.length] = item
        this.length++
    }

    pop() {
        const temp = this.#arr[0]

        for (let i = 0; i < this.length - 1; i++) {
            this.#arr[i] = this.#arr[i + 1]
        }

        this.#arr[this.length - 1] = undefined
        this.length--

        return temp
    }

    *[Symbol.iterator]() {
        for(let i = 0; i < this.length; i++) {
            yield this.#arr[i]
        }
    }

    [Symbol.toPrimitive]() {
        return `[${this.#arr.join(', ')}]`
    }

}


const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);


console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
console.log(queue.pop()); // 3
console.log(queue.pop()); // undefined
