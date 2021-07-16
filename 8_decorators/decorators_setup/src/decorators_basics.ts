// #1 decorators basics
// decorators are related to classes
// decorator is a function that we will apply to a class in a certain way
// Good practice is to start uppercase in a decorator
// Decorator recives argument depending on where it will be used. 

// For class decorators there is one argument that is the constructor of that class
function Logger(constructor: Function){
    console.log('Logging in...', constructor)
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

// #2 useful decorators
function WithTemplate(template: string, hookId: string){
    // Underscode is a convention where we tell typescript that we need to specify a argument but we will not use it
    return function (constructor: any){
        const element = document.getElementById(hookId);
        if(element){
            element.innerHTML = template;
            // Find h1 tag and inform TS it will never be null
            const h1Tag = element.querySelector('h1')!;
            // We can run the constructor inside the class
            const classConstructor = new constructor();

            // we can access the variables inside the class constructor
            const name =classConstructor.name;

            // We can set up the tag with the name from the constructor
            h1Tag.textContent = name;

        }
    }
}

@WithTemplate('<h1>Item class was created</h1>', 'itemID')
class Item {
    constructor(public readonly name: string = 'test'){

    }
}

// This kind of code is used in angular

// #3 Multiple decorators

function LoggerOut(_: Function){
    console.log('Logging out...')
}

// Important this that the first closest to the function decorator will be executed. First @Logger and after that @LoggerOut

@LoggerOut
@Logger
class Test2 {

}
