const tree = {
    value: 1,
    children: [
      {
        value: 2,
        children: [{value: 4}]
      },
      {
        value: 3
      }
    ]
  };
  
  log(tree); // 1 2 3 4


  function log(tree) {
    const queue = [tree]

    while(queue.length) {
        const curItem = queue.shift()

        console.log(curItem.value);

        if (curItem.children?.length) {
            queue.push(...curItem.children)
        }
        
    }
  }