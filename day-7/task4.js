waterfall([
    (cb) => {
      cb(null, 'one', 'two');
    },
    
    (arg1, arg2, cb) => {
      console.log(arg1); // one
      console.log(arg2); // two
      cb(null, 'three');
    },
    
    (arg1, cb) => {
      console.log(arg1); // three
      cb(null, 'done');
    }
  ], (err, result) => {
    console.log(result); // done
  });
  
  waterfall(new Set([
    (cb) => {
      cb('ha-ha!');
    },
    
    (arg1, cb) => {
      cb(null, 'done');
    }
  ]), (err, result) => {
    console.log(err);    // ha-ha!
    console.log(result); // undefined
  });


  function waterfall(funcsIterable, cb) {
    const iterator = funcsIterable[Symbol.iterator]()
    let args = []

    inner()

    function inner() {
        const curFunc = iterator.next()

        if (curFunc.done) {
            cb(null, ...args)
            return
        } else {
            curFunc.value(...args, (error, ...newArgs) => {
                if (error) {
                    cb(error)
                    return
                }
                args = newArgs
                inner()
            })

        }
    }



  }