console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]
console.log(twoSum([6, 0], 6));      // [0, 1]
console.log(twoSum([1, 2, 3, 4], 55));      // undefined


function twoSum(arr, purpose) {
    const sortedArr = arr.map((value, id) => ({value, id})).sort((a, b) => a.value - b.value)

    let start = 0
    let end = arr.length - 1

    while (true) {
        const difference = sortedArr[start].value + sortedArr[end].value - purpose

        if (difference === 0) {
            return [sortedArr[start].id, sortedArr[end].id].sort((a,b) => a - b)
        }

        if (start === end) break

        if (difference > 0) {
            end--
            continue
        }

        if (difference < 0) {
            start++
            continue
        }

    }
}