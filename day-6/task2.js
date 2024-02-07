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

ee.once('foo', console.log); // Сработает только один раз

ee.emit('foo', 1);
ee.emit('foo', 2);

ee.off('foo', console.log); // Отмена конкретного обработчика события по ссылке
ee.off('foo');              // Отмена всех обработчиков этого события

ee.on('baz', console.log);
ee.on('baz', (asd) => console.log('!!!!', asd));

ee.emit('baz', 'asd', 2)
ee.emit('baz', 'sdf', 31)

console.log('======');
ee.off('baz', console.log); 

ee.emit('baz', 'asd', 2)
ee.emit('baz', 'sdf', 31)

console.log('======');
ee.off('baz'); 

ee.emit('baz', 'asd', 2)
ee.emit('baz', 'sdf', 31)