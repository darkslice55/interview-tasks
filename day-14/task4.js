console.log(diff('bob', 'rob'));           // 1 (одна замена)
console.log(diff('австрия', 'австралия')); // 2 (два удаления)


function diff(str1, str2) {
    const [shortStr, longStr] = [str1, str2].sort((a,b) => a.length - b.length)
    let longStrArray = [...longStr[Symbol.iterator]()]
    let shortStrArray = [...shortStr[Symbol.iterator]()]

    let shortId = 0
    let operations = 0

    let shiftAttempts = longStrArray.length - shortStrArray.length

    for (let longId = 0; longId < longStrArray.length; longId++) {

        if (shortStrArray[shortId] === longStrArray[longId]){
            shortId++
            continue
        }

        // если можно сдвинуть, то сдвигаем
        if (shiftAttempts > 0) {
            shiftAttempts--
            operations++
            continue
        }

        operations++
        shortId++
        
    }

    return operations
    

}