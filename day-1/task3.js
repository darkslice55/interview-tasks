const result = format('Hello ${name}! My age is ${age * 2}.', {name: 'Bob', age: 12}); // 'Hello Bob! My age is 24.'

console.log(result);

function format(text, obj) {
    try {
        const variablesString = Object.entries(obj).reduce((acc, [key, value]) => acc + `var ${key} = obj.${key};\n`,'')
        eval(variablesString)
        return eval(`\`${text}\``)
    } catch(err) {
        throw new Error('шаблон содержит недопустимые имена переменных')
    }
}