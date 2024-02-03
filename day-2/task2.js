const obj = {};

const setByPath2 = (obj, path, value) => path
    .split('.')
    .reduce((acc, key, id, arr) => id !== arr.length - 1 ? acc[key] ??= {} : acc[key] = value, obj)

setByPath2(obj, 'foo.bar.baz', 1);
setByPath2(obj, 'foo.bar', 1);
setByPath2(obj, 'foo.bla', 2);
setByPath2(obj, 'baz.foo.bla', 'AAAA!!!');
setByPath2(2, 'baz.foo.bla', '2222!!!');

console.dir(obj); // {foo: {bar: 1, bla: 2}}