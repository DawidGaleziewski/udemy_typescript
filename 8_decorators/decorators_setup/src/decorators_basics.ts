// #1 decorators basics
// decorators are related to classes
// decorator is a function that we will apply to a class in a certain way
// Good practice is to start uppercase in a decorator
// Decorator recives argument depending on where it will be used. 

// For class decorators there is one argument that is the constructor of that class
function Logger(constructor: Function){
    console.log('Logging...', constructor)
}

// Decorator starts with @ symbol
@Logger // Decorators initiate when class is defined. That is why we will see msg from decorator displayed first
class Person {
    name = "Dave";

    constructor(){
        console.log('Creating person object...')
    }
}

const person = new Person();


// # 2 decorator factories
function GreetFactory(greeting: string){
    return function(constructor: Function){
        console.log(`Welcome to decorators 101 and ${greeting}`)
    }
}

// This will return a decorator function. We can now pass values that will be returned by inner decorator functions
@GreetFactory('have a nice day')
class Test {
    constructor(){
        console.log('hello')
    }
}