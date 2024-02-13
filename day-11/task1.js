console.log(bisect([1, 2, 3, 4, 5, 6, 7], (val) => 4 - val));   // 3
console.log(bisect([1, 2, 3, 4, 5, 6, 7], (val) => 234 - val)); // -1


function bisect (sortedArr, cb) {
    if (sortedArr.length === 0) return -1
    const middleIndex = Math.floor(sortedArr.length / 2)
    const middleItem = sortedArr[middleIndex]

    const checkResult = cb(middleItem)

    if (checkResult === 0) return middleIndex
    
    if (checkResult > 0) {
        return bisect(sortedArr.slice(middleIndex + 1), cb)
    } else {
        return bisect(sortedArr.slice(0, middleIndex), cb)
    }
    

}