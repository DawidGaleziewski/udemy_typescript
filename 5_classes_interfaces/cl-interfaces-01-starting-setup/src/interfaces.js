// We can use a interface to check type that was not assigned any value and therefore was not inferenced upon
var user1;
user1 = {
    name: 'Dave',
    age: 30,
    greet: function (name) { return "Hi there " + name; },
    // Typescript will remind us that this property should not exist on the Person object
    job: 'Developer'
};
// In order to add a interface to a class we use 'implements' keyword
var Cake = /** @class */ (function () {
    function Cake(name, barCode, price) {
        this.name = name;
        this.barCode = barCode;
        this.price = price;
    }
    Cake.prototype.buy = function (name) {
        console.log("Here you are " + name + ", that will be " + this.price + "$");
    };
    return Cake;
}());
// We can use many interfaces on a single class
// Ts will remind us with error on what is missing
var CandyBar = /** @class */ (function () {
    function CandyBar(name, barCode, price) {
        this.name = name;
        this.barCode = barCode;
        this.price = price;
    }
    CandyBar.prototype.buy = function (name) {
        console.log("Here you are " + name + ", that will be " + this.price + "$");
    };
    return CandyBar;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var add2;
var add;
var Work = /** @class */ (function () {
    function Work() {
        this.name = 'Any work';
        this.start = new Date();
        this.end = new Date('2026-20-01');
    }
    return Work;
}());
var Breathe = /** @class */ (function () {
    function Breathe() {
        this.name = 'breathe to live';
        this.start = new Date();
        // No error due to fact this is optional
    }
    return Breathe;
}());
// Same will apply yo constructors and functions
var greet = function (name) {
    if (!name)
        return 'Hi!';
    return "Hi there " + name;
};
// If we assign a default value, the ? will be inferenced
var kill = function (name) {
    if (name === void 0) { name = 'all'; }
    return "kill " + name;
};
