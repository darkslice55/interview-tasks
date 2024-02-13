allSettledLimit([
    () => fetch('//some-data-1'),
    () => fetch('//some-data-2'),
    () => fetch('//some-data-3'),
    () => fetch('//some-data-4')
  ], 2).then(console.log);


function allSettledLimit(iterableObj, limit) {
    const funcsArray = [...iterableObj]

    const result = []
    let started = limit
    let finished = 0

    return new Promise((resolve) => {
        function inner(func, id) {
            Promise.resolve(func()).then((value) => {
                result[id] = {
                    value,
                    status: 'fulfilled',
                }

                finished++
                if (finished >= funcsArray.length) {
                    resolve(result)
                } else if (started <= funcsArray.length) {
                    inner(funcsArray[started], started++)
                }
            }).catch((reason) => {
                result[id] = {
                    reason,
                    status: 'rejected',
                }

                finished++
                if (finished >= funcsArray.length) {
                    resolve(result)
                } else if (started < funcsArray.length) {
                    inner(funcsArray[started], started++)
                }
            })
        }
        funcsArray.slice(0, limit).forEach(inner)
    })

}