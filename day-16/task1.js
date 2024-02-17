const obj = {
    a: {
      b: [1, 2],
      '': {c: 2}
    }
  };
  
  /* {'a.b.0': 1, 'a.b.1': 2, 'a..c': 2} */
  console.log(collapse(obj));



  function collapse(obj) {
    if (typeof obj !== 'object') return obj

    const result = {}
    
    function inner(obj, keys = []) {
        if (typeof obj !== 'object') {
            result[keys.join('.')] = obj
            return 
        }

        Object.entries(obj).forEach(([key, value]) => {
            inner(value, [...keys, key])
        })
    }

    inner(obj)

    return result

  }