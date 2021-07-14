// Function overloads allow us to describe multiple function signatures



type Mixed = string | number;

// We can overrite what the function will return and specify in which cases what type will be returned

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number, b: string): string;
function combine (a: Mixed, b: Mixed) {
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString()
    }
    return a + b;
}

// Typescript knows now when we will get a string and when we get a number
const add23 = combine(1, 1)
const sentence = combine('a', 'b')
const sentence2 = combine(1, 'a')