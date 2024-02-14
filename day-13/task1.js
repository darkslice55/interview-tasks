console.log(getCentury(1901)); // 20
console.log(getCentury(2000)); // 20
console.log(getCentury(1900)); // 19

function getCentury(value) {
    return Math.ceil(value / 100)
}