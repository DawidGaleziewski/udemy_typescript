const userName = 'Max';
let age = 30;

//  # Assigning diffrent type will throw error
age = 29;
// Typescript compains about changing types
age = '30';

function add(a: number, b: number){
    let result;
    result = a + b;
    return result;
}

console.log(add(2,2))


// # Arrow functions
// Also adding a default param
const add2 = (a: number, b:number = 1) =>  a + b;
console.log(add2(2))


// # Diffrent way of assigning types to arrow function
const printOutput: (a:number) => void = output => console.log(output) 

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => {
        console.log(event)
    })
}

// # Spread operator
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['hikking', ...hobbies]


// # Rest params

const addRests = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue)=> {
        return curResult + curValue
    }, 0)
}

console.log(addRests(1,2,3,4,5,6))

//  Using tuples to define what hind of params will be used and how many of them
const addRestsTuple = (...numbers: [number, number, number]) => {
    return numbers.reduce((curResult, curValue)=> {
        return curResult + curValue
    }, 0) 
}

console.log(addRestsTuple(1,2,3))

// Ts will inform us if we add to many
console.log(addRestsTuple(1,2,3,4))

// # array and object destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const person = {
    name: 'Dave',
    age: 30,
    job: 'developer'
}
const { job } = person