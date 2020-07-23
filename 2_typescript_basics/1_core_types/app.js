function add(n1, n2, showResult, phrase) {
    if (showResult) {
        return phrase + (n1 + n2);
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var result = add(number1, number2, printResult, "Your result is ");
console.log(result);
