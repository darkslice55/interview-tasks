console.log(find('kbza', [
    'kobezzza',
    'bob',
    'kibiza',
    'kobea',
    'k b z asda213123a',
    'kbza',
    '',
  ])); // ['kobezzza', 'kibiza', 'k b z asda213123a', 'kbza']


// Надо Iterable Api подтянуть, а пока регулярка)
function find(str, arr) {
    const regExp = new RegExp(`${str.split('').join('.*')}.*`)

    return arr.filter((el) => el.match(regExp))
}
