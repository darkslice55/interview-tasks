function sort(array) {
    const positions = []
    const sortingArray = array.filter((el, id) => {
        const isEven = Boolean(el % 2 === 0)
        isEven && positions.push(id)
        return isEven
    }).sort((a, b) => a - b)
    
    const result = [...array]
    for (const [id, position] of positions.entries()) {
        result[position] = sortingArray[id]
    }

    return result
}

console.log(sort([7, 1, 4, 2, 9, 8])); // [7, 1, 2, 4, 9, 8]
console.log(sort([7, 1, 8, 2, 9, 0])); // [7, 1, 0, 2, 9, 8]

const array = new Array(6).fill(0).map(() => Math.round((Math.random() * 10)))
console.log(array);
console.log(sort(array));
