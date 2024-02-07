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
    return function(...args) {
        setTimeout(() => cb(...args), wait)
    }
  }