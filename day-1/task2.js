class Parent {
    foo() {
      console.log('It works!');
    }
  }
  
  class Example extends Parent {}
  
  partial(Example, {
    foo() {
      super.foo();
      console.log('Yeaaah');
    },
    
    get bar() {
      return Math.random();
    }
  });
  
  const example = new Example();

  
  example.foo(); // It works! Yeaaah
  
  console.log(example.bar); // Случайное число
  console.log(example.bar); // Случайное число
  console.log(example.bar); // Случайное число


  function partial(constructor, extendingObj) {
    const descriptors = Object.getOwnPropertyDescriptors(extendingObj)
    Object.defineProperties(constructor.prototype, descriptors)
    Object.setPrototypeOf(extendingObj, Object.getPrototypeOf(constructor.prototype))
  }