class LRUCache {
    #map = new Map()
    #size

    constructor(size = 10) {
        this.#size = size
        this.#map = new Map()
    }

    set(key, value) {
        this.#map.set(key, value)

        if (this.#map.size > this.#size) {
            this.#map = new Map([...this.#map].slice(1))
        }

    }

    get(key) {
        const temp = this.#map.get(key)

        this.#map.delete(key)

        this.#map.set(key, temp)

        return temp
    }

    has(key) {
        return this.#map.has(key)
    }
}



const cache = new LRUCache(3); // Размер кеша

cache.set('key1', 1);
cache.set('key2', 2);
cache.set('key3', 3);

console.log(cache.get('key1')); // 1

cache.set('key4', 4);
cache.set('key4', 5);

console.log(cache.has('key2')); // false