const commits = ['good', 'good', 'good', 'bad', 'bad', 'bad', 'bad', 'bad', 'bad'];
const commits1 = ['good', 'bad', 'bad', 'bad', 'bad', 'bad', 'bad', 'bad', 'bad'];
const commits2 = ['good', 'good', 'good', 'good', 'good', 'good', 'good', 'good', 'good'];
const commits3 = ['bad', 'bad', 'bad'];

const test = (commit) => commit === 'good';

console.log(findFirstBadCommit(commits, test)); // 3
console.log(findFirstBadCommit(commits1, test)); // 1
console.log(findFirstBadCommit(commits2, test)); // -1
console.log(findFirstBadCommit(commits3, test)); // 0


function findFirstBadCommit(commits, test) {
    function inner(start, end) {
        if (start === end) {
            return test(commits[start]) ? -1 : start
        }

        let middle = Math.floor((end - start) / 2)

        if (test(commits[middle]) && !test(commits[middle + 1])) {
            return middle + 1
        }

        if (test(commits[middle - 1]) && !test(commits[middle])) {
            return middle
        }

        if (test(middle)) {
            return inner((middle + 1), end)
        } else {
            return inner(0, middle)
        }
    }

    return inner(0, commits.length - 1)

}