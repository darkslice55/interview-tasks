class Queue {
    #first
    #last

    constructor() {
        this.#first = null
        this.#last = null
    }

    isEmpty() {
        return this.#first === null
    }

    push(item) {
        const newData = {
            value: item
        }

        if (this.isEmpty()) {
            this.#first = newData
        } else {
            this.#last.next = newData
        }

        this.#last = newData
    }

    pop() {
        const temp = this.#first

        if (!this.#first?.next) {
            this.#last = null    
        }

        this.#first = this.#first?.next

        return temp?.value ?? undefined
        
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
