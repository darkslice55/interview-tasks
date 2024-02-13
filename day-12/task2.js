console.log(reduce([1, 3, 6, 8, 7, 11, 45, 46, 2, 75])); // 1-3, 6-8, 11, 45-46



function reduce(arr) {
    if (!arr.length) return arr

    arr.sort((a,b) => a - b)
    const result = []

    let curTemp = arr[0]
    let nextTemp = undefined

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] <= 1) {
            nextTemp = arr[i]
        } else {
            result.push([curTemp, nextTemp].filter((item) => item !== undefined).join('-'))

            curTemp = arr[i]
            nextTemp = undefined
        }
    }

    result.push([curTemp, nextTemp].filter((item) => item !== undefined).join('-'))
    
    return result

}