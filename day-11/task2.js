retry(() => Promise.reject('AAAA!!'), {maxAttempts: 3, delay: (n) => n * 1000}).then((value) => {console.log('resolve', value);}, (value) => { console.log('reject', value);});


async function retry(cb, options) {
    let {maxAttempts, delay} = options
    let attempts = 0

      
    return new Promise((resolve, reject) => {
        function rejectHandler(err) {
            if (maxAttempts - attempts++ <= 0) {
                reject(err)
                return
            }

            setTimeout(resolveHandler, delay(attempts))
        }

        function resolveHandler() {
            try {
                Promise.resolve(cb()).then(resolve).catch(rejectHandler)
            } catch (err) {
                rejectHandler(err)
            }
        }

        resolveHandler()

    })



}