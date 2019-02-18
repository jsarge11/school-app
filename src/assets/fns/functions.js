export function toDBString(arr) {
    console.log(arr);
    let numArr = [];
    numArr.push(`{`);
    console.log(arr.length)
    numArr = arr.map((item, i, array) => {
        let prefix = '';
        let postfix = ', ';
        if (i === 0) {
            prefix = '{'
        } 
        if (i === array.length - 1 || array.length === 1) {
            postfix = '}'
        }
        switch(item) {
            case 'Multiplication':
                return prefix + '1' + postfix;
            case 'Division':
                return prefix + '2' + postfix;
            case 'Addition':
                return prefix + '3' + postfix;
            case 'Subtraction':
                return prefix + '4' + postfix;
            default: 
                return prefix + -1 + postfix;
        }
    })
    return numArr.join('');
}

console.log(toDBString(["Division"]));
console.log(toDBString(["Division", "Addition"]));
console.log(toDBString(["Division", "Addition", "Subtraction"]));
console.log(toDBString(["Division", "Addition", "Subtraction", "Multiplication"]));
console.log(toDBString(["Division", "Addition", "Subtracon", ""]));