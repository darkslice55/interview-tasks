console.log(intersectRanges('1-2; 4-6; 9-11', '1-5; 10-14; 15')); // 1-2; 4-5; 10-11
console.log(intersectRanges('4-6; 9-11; 7', '1-10')); // 4-6; 9-10;


function intersectRanges(str1, str2) {
    let result = []

    const convertStr = (str) => str.split('; ').map((item) => item.split('-')).sort(([a], [b]) => a - b)

    const arr1 = convertStr(str1)
    const arr2 = convertStr(str2)

    let counter = 0

    for (let i = 0; i < arr2.length; i++) {
        let [start2, end2] = arr2[i].map(Number)
        end2 ??= start2

        for (counter; counter < arr1.length; counter++) {
            let [start1, end1] = arr1[counter].map(Number)
            end1 ??= start1

            // случай 1. Второе множество полностью слева от первого
            if (end2 < start1) {
                break
            }

            // случай 2. Второе множество частично пересекает первое слева
            if (start2 < start1 && end2 >= start1 && end2 <= end1) {
                result.push([start1, end2])

                break
            }

            // случай 3. Второе множество внутри первого
            if (start2 >= start1 && end2 <= end1) {
                result.push([start2, end2])

                break
            }

            // случай 4. Второе множество частично пересекает первое справа
            if (start2 >= start1 && start2 <= end1 && end2 > end1) {
                result.push([start2, end1])

                start2 = end1 + 1

                continue
            }

            // случай 5. Второе множество полностью справа от первого
            if (start2 > end1) {
                continue
            }

            // случай 6. Второе множество шире первого с обеих сторон
            if (start2 < start1 && end2 > end1) {
                result.push([start1, end1])

                start2 = end1 + 1

                continue
            }


        }

    }
    

    return result.reduce((acc, [start, end]) => [...acc, start === end ? `${start}` : `${start}-${end}`], []).join('; ')
}