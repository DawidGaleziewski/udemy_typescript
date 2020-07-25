function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(2, 1));

// function as a value
let combineValues: (a: number, b: number) => number;
combineValues = add;
combineValues = printResult;
combineValues = 5;

// callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
