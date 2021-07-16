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
    console.log('Logging in...', constructor);
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
// #2 useful decorators
function WithTemplate(template, hookId) {
    // Underscode is a convention where we tell typescript that we need to specify a argument but we will not use it
    return function (constructor) {
        var element = document.getElementById(hookId);
        if (element) {
            element.innerHTML = template;
            // Find h1 tag and inform TS it will never be null
            var h1Tag = element.querySelector('h1');
            // We can run the constructor inside the class
            var classConstructor = new constructor();
            // we can access the variables inside the class constructor
            var name_1 = classConstructor.name;
            // We can set up the tag with the name from the constructor
            h1Tag.textContent = name_1;
        }
    };
}
var Item = /** @class */ (function () {
    function Item(name) {
        if (name === void 0) { name = 'test'; }
        this.name = name;
    }
    Item = __decorate([
        WithTemplate('<h1>Item class was created</h1>', 'itemID')
    ], Item);
    return Item;
}());
// This kind of code is used in angular
// #3 Multiple decorators
function LoggerOut(_) {
    console.log('Logging out...');
}
// Important this that the first closest to the function decorator will be executed. First @Logger and after that @LoggerOut
var Test2 = /** @class */ (function () {
    function Test2() {
    }
    Test2 = __decorate([
        LoggerOut,
        Logger
    ], Test2);
    return Test2;
}());
