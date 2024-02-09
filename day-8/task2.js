const semaphore = createsAsyncSemaphore(() => {
    console.log('Boom!');
  }, 'foo', 'bar');
  
  semaphore('foo');
  semaphore('bar'); // 'Boom!'
  
  // Эта функция не будет выполняться
  semaphore();


function createsAsyncSemaphore(cb, ...keys) {
    const curKeys = keys

    return function(key) {
        const keyId = curKeys.findIndex((it) => it === key)
        if (keyId === -1) return

        curKeys.splice(keyId, 1)

        if (!curKeys.length) {
            cb.apply(this)
        }
    }
}