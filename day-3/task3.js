const sum = curry((a, b, c, z) => a + b + c + z);

console.log(sum(1)(2)(3)(4)); // 10;
console.log(sum(1)(2)(3, 4)); // 10;
console.log(sum(1)(2, 3, 4)); // 10;


function curry(cb) {
    return function innerCurry(...argsOuter) {
        //если собрали сколько нужно аргументов, то выполняем исходную функцию
        if (arguments.length === cb.length) {
            return cb(...argsOuter)
        }
        //иначе возвращаем новую функцию, которая принимает аргументы и возвращает каррированную функцию с аргументами имеющимися и новыми
        return function(...argsInner) {
            return innerCurry(...argsOuter,...argsInner)
        }
    }
}
