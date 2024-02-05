console.log(...zip(new Set([1, 2]), ['a', 'b', 'z'], '...')); // [1, 'a', '.'] [2, 'b', '.']

function zip(...iterableObjects) {
    let minLength = Number.MAX_SAFE_INTEGER
    const arrays = iterableObjects.map((obj) => {
        const array = Array.from(obj)
        minLength = Math.min(minLength, array.length)
        return array
    })

    return {
        *[Symbol.iterator]() {
            for(let i = 0; i < minLength; i++) {
                yield arrays.map((array) => array[i])
            }
        }
    }

}