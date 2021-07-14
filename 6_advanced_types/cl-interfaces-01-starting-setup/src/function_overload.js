// Function overloads allow us to describe multiple function signatures
function combine(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// Typescript knows now when we will get a string and when we get a number
var add23 = combine(1, 1);
var sentence = combine('a', 'b');
var sentence2 = combine(1, 'a');
