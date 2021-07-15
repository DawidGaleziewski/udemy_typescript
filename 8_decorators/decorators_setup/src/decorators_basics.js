// #1 decorators basics
// decorators are related to classes
// decorator is a function that we will apply to a class in a certain way
// Good practice is to start uppercase in a decorator
// Decorator recives argument depending on where it will be used. 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// For class decorators there is one argument that is the constructor of that class
function Logger(constructor) {
    console.log('Logging...', constructor);
}
// Decorator starts with @ symbol
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Dave";
        console.log('Creating person object...');
    }
    Person = __decorate([
        Logger // Decorators initiate when class is defined. That is why we will see msg from decorator displayed first
    ], Person);
    return Person;
}());
var person = new Person();
// # 2 decorator factories
function GreetFactory(greeting) {
    return function (constructor) {
        console.log("Welcome to decorators 101 and " + greeting);
    };
}
// This will return a decorator function. We can now pass values that will be returned by inner decorator functions
var Test = /** @class */ (function () {
    function Test() {
        console.log('hello');
    }
    Test = __decorate([
        GreetFactory('have a nice day')
    ], Test);
    return Test;
}());
