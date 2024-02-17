class OrderedQueue {
    #comparator
    #array

    constructor(comparator) {
        this.#comparator = comparator
        this.#array  = new Array()
    }

    isEmpty() {
        return this.#array.length === 0
    }

    get length() {
        return this.#array.length
    } 

    push(item) {
        this.#array[this.length] = item
        this.#moveUp(this.length - 1)
    }

    pop() {
        const item = this.#array[0]
        this.#array[0] = this.#array[this.length - 1]
        this.#array.length = this.#array.length - 1
        this.#moveDown(0)

        return item
    }

    #moveUp(id) {
        let parentId = Math.floor((id - 1) / 2)
        const current = this.#array[id]
        
        while (id > 0 && this.#comparator(current, this.#array[parentId]) > 0) {
            this.#array[id] = this.#array[parentId]
            id = parentId
            parentId = Math.floor((id - 1) / 2)
        }

        this.#array[id] = current

    }

    #moveDown(id) {
        let biggestChildId
        let current = this.#array[id]

        while (id < Math.floor(this.length / 2)) {
            let leftChildId = 2 * id + 1
            let rightChildId = leftChildId + 1

            if (this.#array[rightChildId] !== undefined && this.#comparator(this.#array[rightChildId], this.#array[leftChildId]) > 0) {
                biggestChildId = rightChildId
            } else {
                biggestChildId = leftChildId
            }

            if (this.#comparator(current, this.#array[biggestChildId]) > 0) {
                break
            }

            this.#array[id] = this.#array[biggestChildId]
            id =  biggestChildId
        }

        this.#array[id] = current
    }



}



const queue = new OrderedQueue((a, b) => a - b);

queue.push(1);
queue.push(5);
queue.push(2);
queue.push(-1);
queue.push(5);
queue.push(2);
queue.push(-1);
queue.push(5);

console.log(queue.pop());  // 5
console.log(queue.pop());  // 5

console.log(queue.pop());  // 5
console.log(queue.pop());  // 2
console.log(queue.pop());  // 2