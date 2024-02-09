const original = {
    myDate: new Date(),
    mySet: new Set([1, 2, 3]),
    myMap: new Map([
      [new Date(), {a: 1}]
    ])
  };
  


  const str = serialize(original);
  console.log('str', str);
  
  // Объект должен иметь аналогичную структуру с original
  parse(str);

// Пока не успел добить ()
function serialize(obj) {
    if (typeof obj !== 'object') {
        return JSON.stringify(obj)
    }

    return JSON.stringify(obj, (key, value) => {
        console.log('key', key);
        console.log('value', value);
        return value?.toString()
        // if (value instanceof Date) {
        //     return JSON.stringify({
        //         type: 'Date',
        //         value: value.toString(),
        //     })
        // }
        // return JSON.stringify({
        //     [key]: serialize(value)
        // })
    })



}