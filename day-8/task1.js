console.log(diff([1, 2, 3, 4, 5], [3, 4, 1])); // [2, 5]


function diff(firstArr, secondArr) {
    const dict = new Map()

    firstArr.forEach((el) => {
        dict.set(el, true)
    })

    secondArr.forEach((el) => {
        if (dict.get(el)) {
            dict.set(el, false)
        } else {
            dict.set(el, true)
        }
    })

    return [...dict.entries()].reduce((acc, [el, value]) => value ? [...acc, el] : acc, [])
    
    
}