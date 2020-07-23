function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    return phrase + (n1 + n2);
  }
}

const number1 = 5;
let number2 = 2.8;

let number3: number;
number3 = 3;

const printResult = true;

const result = add(number1, number2, printResult, "Your result is ");
console.log(result);
