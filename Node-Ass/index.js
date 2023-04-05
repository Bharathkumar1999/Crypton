var crypto = require("crypto");
const argvs = process.argv
const argv = argvs.slice(2)
const operation = argv[3]
const operator1 = parseInt(argv[2])
const operator2 = parseInt(argv[4])

if (operation === 'plus') {
    console.log(operator1 + ' plus '+ operator2, ' is '
        + (operator1 + operator2));
}
if (operation === 'minus') {
    console.log(operator1 + ' minus '+ operator2, ' is '
        + (operator1 - operator2));
}
if (operation === 'multiplied_by') {
    console.log(operator1 + ' multiplied by '+ operator2,' is '
        + (operator1 * operator2));
}
if (operation === 'divided_by') {
    console.log(operator1 + ' divided by '+ operator2,' is '
        + (operator1 / operator2));
}
