const maxDepth = (obj) => !obj.children?.length ? 0 : 1 + Math.max(...obj.children.map(child => maxDepth(child)))

function maxDepthStack(obj) {
    const stack = [obj]
    let maxDepth = 0

    while(stack.length > 0) {
        let curItem = stack.pop()
        let result = 0
        
        while(true) {
            if (!curItem.children?.length) {
                break
            }
            result++
            for (let i = 0; i < curItem.children.length - 1; i++) {
                stack.push(curItem.children[i])
            }
            curItem = curItem.children[curItem.children.length - 1]
        }

        maxDepth = Math.max(maxDepth, result)

    }

    return maxDepth
}

const obj = {
    value: 'foo',
    children: [
      {
        value: 'bar'
      },
  
      {
        value: 'bla',
        children: [{value: 'baz'}]
      }
    ]
  };

const obj2 = {
    value: 'foo',
    children: [
      {
        value: 'bar'
      },
  
      {
        value: 'bla',
        children: [
            {
                value: 'baz',
                children: [
                  {
                    value: 'bar'
                  },
              
                  {
                    value: 'bla',
                    children: [
                        {
                            value: 'baz',
                        }
                    ]
                  }
                ]

            }
        ]
      }
    ]
  };
  
console.log(maxDepth(obj)); // 2  
console.log(maxDepth(obj2)); // 4
console.log(maxDepthStack(obj)); // 2
console.log(maxDepthStack(obj2)); // 4
