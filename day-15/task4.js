// console.log(getAnagram('cat')); // ['cta', 'atc', 'act', 'tca', 'tac']
// console.log(getAnagram('anagram')); 
// console.log(getAnagram('dog')); 
// console.log(getAnagram('women')); 
// console.log(getAnagram('oppo')); 
// console.log(getAnagram('ab')); 

let startTime = performance.now()
getAnagram('asdasdasdadв')
let endTime = performance.now()
console.log('time: ', endTime - startTime);


function getAnagram(str) {
    const dict = new Map()

    // технические переменные для испытания алгоритма
    let dictCount = 0
    let dictCountWordsLength = 0

    function getRestStr(str, id) {
        const arr = [...str]
        arr.splice(id, 1)

        return arr.join('')
    }

    function inner(str) {
        if (str.length === 2) {
            return [str, `${str[1]}${str[0]}`]
        }

        if (dict.has(str)) {
            dictCount++
            dictCountWordsLength += str.length
            return dict.get(str)
        }

        const result = new Set();

        [...str].forEach((char, id) => {
            const restString = getRestStr(str, id)
            const anagrams = inner(restString)
            anagrams.forEach((anagram) => {
                result.add(char + anagram)
            })
        })

        dict.set(str, Array.from(result))

        return dict.get(str)
    }

    //работа с сортированной строкой позволяет ускорить алгоритм за счет сокращения обращений к кешу
    const sortedStr = [...str].sort((a,b) => a.localeCompare(b)).join('')

    const result = inner(sortedStr).filter((anagram) => anagram != str)

    console.log('средняя длина слова при обращении к кешу', dictCountWordsLength / dictCount);

    return result
}