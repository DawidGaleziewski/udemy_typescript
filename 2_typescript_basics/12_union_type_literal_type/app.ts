// Union types
function combine(
  n1: number | string,
  n2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const concatNames = combine(5, "hello", "as-text");
const sumOfNumbers = combine(5, 2, "as-number");
console.log(concatNames, sumOfNumbers);

// Literal types
const number1 = 2.8;
function buyMeA(item: "pony" | "alpaca") {
  return `Ok, I can buy you eaither a pony or a alpaca, so ${item} it is`;
}

buyMeA("car");
