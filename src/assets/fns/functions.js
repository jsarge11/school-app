export function toDBString(arr) {
    let numArr = [];
    numArr.push(`{`);
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
                return prefix + '5' + postfix;
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

export function toAssessmentWords(arr) {
    let words = arr.map(item => {
        switch(item) {
            case 1:
                return 'Multiplication ';
            case 2: 
                return 'Division ';
            case 3: 
                return 'Addition ';
            case 5:
                return 'Subtraction '
            default:
                return ''
        }
    })
    return words;
}