class EventEmitter {
    #handlers = {}

    on(eventKey, func) {
        const newHandler = {func}
        this.#registerEvent(eventKey,newHandler)
    }

    once(eventKey, func) {
        const newHandler = {func, isOnce: true}
        this.#registerEvent(eventKey,newHandler)
    }

    emit(eventKey, ...args) {
        const curHandlers = this.#handlers[eventKey]
        if (!curHandlers) return

        curHandlers.forEach(({func}) => {
            func(...args)
        })
        this.#handlers[eventKey] = curHandlers.filter(({isOnce}) => !isOnce)
    }

    off(eventKey, cb) {
        if (!this.#handlers[eventKey]) return

        if (!cb) {
            delete this.#handlers[eventKey]
        } else {
            this.#handlers[eventKey] = this.#handlers[eventKey].filter(({func}) => func !== cb)
        }
    }

    #registerEvent(eventKey, handler) {
        if (Object.hasOwn(this.#handlers, eventKey)) {
            this.#handlers[eventKey].push(handler)
        } else {
            this.#handlers[eventKey] = [handler]
        }
    }

}

const ee = new EventEmitter();

(async () => {
  for await (const e of stream(ee, 'foo')) {
    console.log(e); // 1 2 3
  }
})();

ee.emit('foo', 1);
ee.emit('foo', 2);
ee.emit('foo', 3);

// Не доделал

function stream(emitter, eventName) {
    const array = []

    emitter.on(eventName, (value) => {
        array.push(value)
        console.log(array);
    })

    return {
        [Symbol.asyncIterator]() {
            return this
        },

        async next() {
            if (array.length) {
                return {
                    value: array.shift(),
                    done: false,
                }
            }

            return {
                done: true
            }
        }
    }
}