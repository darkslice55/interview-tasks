var val = Promise.resolve(1); // Promise<1>

var arr = [1, 2, 3];

for (var i = 0; i < arr.length; ++i) {
  val = val.then((val) => val + arr[i]); // синхронно перезапишет значение в переменной val. Уже на второй итерации потеряется единица
}


val.then(console.log); // ? выведет NaN