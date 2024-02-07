
function sort(arr, extractor) {
    let cur = 0
    const dict = {}
    while (cur !== arr.length) {
        for (let i = cur; i < arr.length; i++) {
            const [name, need] = extractor(arr[i])
            if (!need?.length || need.every((needName) => dict[needName])) {
                const item = arr.splice(i, 1)[0]
                arr.splice(cur, 0, item)
                dict[name] = true
                cur++
            }
        }
    }

    return arr
}



const skills = [
    {
      name: 'fireball',
      need: ['firehands', 'magicspell']
    },
  
    {
      name: 'firehands'
    },
  
    {
      name: 'magicspell'
    },
  
    {
      name: 'inferno',
      need: ['fireball', 'crazymind']
    },
  
    {
      name: 'crazymind',
      need: ['magicspell']
    }
  ];
  
  /*
  [
    {
      name: 'firehands'
    },
  
    {
      name: 'magicspell'
    },
  
    {
      name: 'crazymind',
      need: ['magicspell']
    }
  
    {
      name: 'fireball',
      need: ['firehands', 'magicspell']
    },
  
    {
      name: 'inferno',
      need: ['fireball', 'crazymind']
    }
  ]
  */
  console.log(sort(skills, ({name, need}) => [name, need]));