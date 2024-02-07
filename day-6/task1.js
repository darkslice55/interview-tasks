function laugh(text = '') {
    console.log('Ha-ha!', text)
  }
  
  const debouncedLaugh = debounce(laugh, 300);
  
  debouncedLaugh('a');
  debouncedLaugh();
  debouncedLaugh();
  debouncedLaugh();
  debouncedLaugh();


  function debounce(cb, wait) {
    let timeoutId
    
    return function(...args) {
        if (timeoutId) clearTimeout(timeoutId)
        timeoutId = setTimeout(() => cb(...args), wait)
    }
  }