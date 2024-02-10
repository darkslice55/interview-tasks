console.log(compare({a: 1, b: [1, 2, 3]}, {a: 1, b: [1, 2, 3]})); // true
console.log(compare({a: 1, b: [1, 2]}, {a: 1, b: [1, 2, 3]}));    // false


function compare(obj1, obj2) {
    if (Object.getOwnPropertyNames(obj1).length !== Object.getOwnPropertyNames(obj2).length) return false

    return Object.entries(obj1)
        .every(([key, value]) => {
            if (typeof value !== 'object') {
                return value === obj2[key]
            }
            
            if (typeof value !== typeof obj2[key]) {
                return false
            }

            return compare(value, obj2[key])
        })
}