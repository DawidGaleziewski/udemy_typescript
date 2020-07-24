// Union types
function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (resultConversion === "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
}
var concatNames = combine(5, "hello", "as-text");
var sumOfNumbers = combine(5, 2, "as-number");
console.log(concatNames, sumOfNumbers);
// Literal types
var number1 = 2.8;
