console.log(getUniqueStrs(['atoe', 'otea', 'ben', 'enb', 'baz', 'foo'])); // ['baz', 'foo']

// есть ощущение, что можно по сложности улучшить
function getUniqueStrs(arr) {
    const result = []

    const sortedArr = arr
        .map((item) => ({
            original: item,
            converted: [...item[Symbol.iterator]()].sort((a, b) => a.localeCompare(b)).join('').toLowerCase()
        }))
        .sort((a, b) => a.converted.localeCompare(b.converted))

    sortedArr.forEach(({original, converted}, id) => {
        // если нет по соседству такой же строки то считаем что она уникальна
        if (converted !== sortedArr[id - 1]?.converted && converted !== sortedArr[id + 1]?.converted) {
            result.push(original)
        }
    })

    return result
}