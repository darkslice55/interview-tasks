class Foo {
    bar = 1;
  
    bla = () => console.log(this.bar);
  
    baz = function () { console.log(this.bar); };
  }
  
  new Foo().bla(); // 1 так класс это функция??  //ошибка, так как this в стрелочной функции берется у внешней функции в данном случае он = undefined в стрикт моде. Без стрикта будет искать в глобальном объекте и выведет undefined
  new Foo().baz(); // 1


  function Foo2() {
    this.bar = 1
  
    this.bla = () => console.log(this.bar);
  
    this.baz = function () { console.log(this.bar); };
  }

//   Foo2.prototype.bla = () => console.log(this.bar);
//   Foo2.prototype.baz = function () { console.log(this.bar); };


  console.log(Foo2.prototype);
  console.log(Foo.prototype);

  new Foo2().bla(); // ошибка, так как this в стрелочной функции берется у внешней функции в данном случае он = undefined в стрикт моде. Без стрикта будет искать в глобальном объекте и выведет undefined
  new Foo2().baz(); // 1


  const foo3 = {
    bar: 1,
    bla: () => console.log(this.bar),
    baz: function () { console.log(this.bar); },
  }

  foo3.bla(); // ошибка, так как this в стрелочной функции берется у внешней функции в данном случае он = undefined в стрикт моде. Без стрикта будет искать в глобальном объекте и выведет undefined
  foo3.baz(); // 1