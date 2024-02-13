const i = iterate({
    value: 1,
    children: [{value: 2}, {value: 3, children: [{value: 4}]}]
  });
  
  console.log(i.next()); // {value: 1, done: false}
  console.log(i.next()); // {value: 2, done: false}
  console.log(i.next()); // {value: 3, done: false}
  console.log(i.next()); // {value: 4, done: false}
  console.log(i.next()); // {value: undefined, done: true}



function iterate(obj) {
    const queue = [obj]

    return {
        [Symbol.iterator]() {
            return this
        },

        next() {
            const currentObj = queue.shift()
            if (currentObj) {
                if (currentObj.children?.length) {
                    queue.push(...currentObj.children)
                }

                return {
                    value: currentObj.value,
                    done: false,
                }
            }

            return {
                value: undefined,
                done: true,
            }
        },
    }
}