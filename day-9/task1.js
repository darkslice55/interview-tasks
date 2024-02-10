function laugh(text) {
    console.log('Ha-ha!', text)
  }
  
  const throttledLaugh = throttle(laugh, 300);
  
  throttledLaugh('0');
  throttledLaugh('1');
  throttledLaugh('2');
  throttledLaugh('3');
  throttledLaugh('4');


  function throttle(cb, interval) {
    let isThrottled = false
    let savedThis = null
    let savedArgs = null

    return function inner(...args) {
        if (isThrottled) {
            savedArgs = args
            savedThis = this
        
            return
        }

        isThrottled = true

        cb.apply(this, args)

        setTimeout(() => {
            isThrottled = false
            if (savedArgs) {
                inner.apply(savedThis, savedArgs)
            }
            savedArgs = null
            savedThis = null
        }, interval)
        
    }
  }