console.log(flat([[1, 2], [[1]], 2]));    // [1, 2, [1], 2]
console.log(flat([[1, 2], [[1]], 2], 2)); // [1, 2, 1, 2]1

console.log(flatStack([[1, 2], [[1]], 2]));    // [1, 2, [1], 2]
console.log(flatStack([[1, 2], [[1]], 2], 2)); // [1, 2, 1, 2]1


function flat(arr, depth = 1) {
    if (depth <= 0) return arr
    
    return arr.reduce((acc, el) => {
        if (Array.isArray(el)) {
            acc.push(...flat(el, depth - 1))
        } else {
            acc.push(el)
        }
        return acc
    }, [])
}

function flatStack(arr, depth = 1) {
    if (depth <= 0) return arr
    let result = [...arr]

    while (depth-- > 0) {
        result = result.reduce((acc, el) => {
            if (Array.isArray(el)) {
                acc.push(...el)
            } else {
                acc.push(el)
            }
            return acc
        }, [])
    }

    return result
}