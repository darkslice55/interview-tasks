function cbDiv(a, b, cb) {
    if (b === 0) {
      cb(new TypeError('Нельзя делить на 0'));
    
    } else {
      cb(null, a / b);
    }
  }
  
  const promiseDiv = promisify(cbDiv);
  
  promiseDiv(1, 2).then(console.log);  // 0.5
  promiseDiv(1, 0).catch(console.log); // TypeError('Нельзя делить на 0')

  function promisify(func) {
    const argsAcceptableLength = func.length - 1
    return function(...args) {
        return new Promise((resolve, reject) => {
            if (args.length < argsAcceptableLength) {
                reject(new Error('Недостаточно аргументов'))
            }
            func.call(this, ...args.slice(0, argsAcceptableLength), (...cbArgs) => {
            if (cbArgs.length === 1) {
                reject(cbArgs[0])
            }else {
                resolve(cbArgs[1])
            }
        })
    })
    }
  }
