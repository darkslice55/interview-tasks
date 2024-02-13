console.log(zipStr('abbaabbafffbezza')); // abafbeza


function zipStr(str) {
    let result = str

    while (true) {
        let zippedStr = result.replace(/(.+)\1+/g, '$1')

        if (zippedStr === result) {
            return result
        }

        result = zippedStr
    }
}