  // Можно будет вынести в отдельный модуль
  // =================
  
  // Record<key, 'pending' | 'done' | 'aborted'>
  const timers = {}

  const setImmediate = (cb) => {
    const key = `${Object.keys(timers).length}`
    timers[key] = 'pending'

    Promise.resolve().then(() => {
        if (timers[key] === 'pending') {
            cb()
            timers[key] = 'done'
        }
    })

    return key
  }

  const clearImmediate = (key) => {timers[key] = 'aborted'}

// ===================


  console.log(4);

  setTimeout(() => {
    console.log(3);
  }, 0);
  
  setImmediate(() => {
    console.log(1);
  });
  
  const timer = setImmediate(() => {
    console.log(2);
  });
  
  clearImmediate(timer);