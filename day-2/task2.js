const obj = {};

setByPath(obj, 'foo.bar', 1);
setByPath(obj, 'foo.bla', 2);
setByPath(obj, 'baz.foo.bla', 'AAAA!!!');
setByPath(obj, '.', () => console.log('fnc'));
setByPath(obj, '', '2222!!!');
setByPath(obj, 222, '2222!!!');
setByPath(2, 'baz.foo.bla', '2222!!!');
setByPath(2, 'baz.foo.bla', '2222!!!');

console.dir(obj); // {foo: {bar: 1, bla: 2}}

function setByPath(obj, path, value) {
    // проверки. Почти полностью можно исключить тайпскриптом
    if (!path) return // throw new Error('Путь не может быть пустым')
    if (typeof path !== 'string') return // throw new Error('Второй аргумент (путь) должен быть строкой')
    if (typeof obj !== 'object') return // throw new Error('Первый аргумент должен быть объектом')

    const extractRegex = /([^\.]+)\.|(.+)$/ // возможно не самая красивая регулярка
    const key = path.match(extractRegex)[1] || path.match(extractRegex)[2] // забираем первую или вторую скобочную группу
    const rest = path.replace(extractRegex, '') // выцарапываем оставшуюся строку

    if (!rest) {
        // получается это последний ключ. записываем значение
        obj[key] = value
    } else {
        if (!obj.hasOwnProperty(key)) {
            // если нет такого ключа записываем новый объект в это поле
            obj[key] = {}
        }
        setByPath(obj[key], rest, value) // погружаемся внутрь
    }
}