var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// #1 Simple class
var Department = /** @class */ (function () {
    function Department(newName, numberOfWorkers) {
        this.numberOfWorkers = 0;
        this.name = newName;
        this.numberOfWorkers = numberOfWorkers;
    }
    // Methods
    // We assign the type as the object which is a Department class
    // This pattern is usefull as it will prevent us from calling describe on another object without name param it needs
    Department.prototype.describe = function (prefix) {
        return prefix + " - " + this.name + " is a department with " + this.numberOfWorkers + " workers";
    };
    return Department;
}());
var ITDepartment = new Department('IT', 20);
console.log(ITDepartment, ITDepartment.describe('test prefix'));
// Example of issue prevented with this passed to args
var ITCopy = {
    // name: 'test name'
    describe: ITDepartment.describe
};
// ITCopy.describe('test prefix')
// #2 Classes with private and public methods
var Cart = /** @class */ (function () {
    function Cart(type) {
        // private typescript  keyword will not allow for this to be changed without method usage. It is a modifier keyword
        this.items = [];
        this.type = type;
    }
    Cart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Cart.prototype.getItems = function () {
        return this.items;
    };
    return Cart;
}());
var cart = new Cart('clothes');
cart.addItem('t-shirt 1');
cart.addItem('pants');
console.log('cart items ', cart.getItems());
// This will throw a error due to fact that it is a private item
// cart.items.push('new item that should not been added')
// #3 Shorthand - avoid repetition in constructor
var CartShorthand = /** @class */ (function () {
    // public type: string;
    // In this case we have to use public keyword as this will tell typescript we also want to create properties in class for this same name
    // readonly typescript modifier - property CANT be changed
    function CartShorthand(type, id, items) {
        if (items === void 0) { items = []; }
        this.type = type;
        this.id = id;
        this.items = items;
        this.type = type;
        this.id = id;
    }
    CartShorthand.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CartShorthand.prototype.getItems = function () {
        return this.items;
    };
    CartShorthand.prototype.getId = function () {
        return this.id;
    };
    return CartShorthand;
}());
// #4 inheritance
var ITsDepartment = /** @class */ (function (_super) {
    __extends(ITsDepartment, _super);
    function ITsDepartment(newName, numberOfWorkers, admins) {
        if (numberOfWorkers === void 0) { numberOfWorkers = 0; }
        var _this = _super.call(this, newName, numberOfWorkers) || this;
        _this.admins = admins;
        return _this;
        // If we did not use the shorthand we should add properties here like this.admins = admins
    }
    return ITsDepartment;
}(Department));
var IT = new ITsDepartment('Helpdesk', 32, ['Mark', ' Matt']);
console.log('IT', IT.describe('Ilfords'));
// Protected is a kaeword that can be inherited. Private properties CANNOT be inherited
var CartHealthy = /** @class */ (function (_super) {
    __extends(CartHealthy, _super);
    function CartHealthy(type, id, items) {
        if (items === void 0) { items = []; }
        var _this = _super.call(this, type, id, items) || this;
        _this.type = type;
        _this.id = id;
        _this.items = items;
        return _this;
    }
    CartHealthy.prototype.addItem = function (item) {
        if (item === 'sugar') {
            return;
        }
        this.items.push(item);
    };
    return CartHealthy;
}(CartShorthand));
//#4 getters and setters
var HRDepartment = /** @class */ (function (_super) {
    __extends(HRDepartment, _super);
    function HRDepartment(newName, numberOfWorkers) {
        var _this = _super.call(this, newName, numberOfWorkers) || this;
        _this.lastHiredPersonName = 'Johny B';
        return _this;
    }
    Object.defineProperty(HRDepartment.prototype, "mostRecentName", {
        //If we want to modify a private value we will need to use a getter method
        get: function () {
            // getter needs to return something
            return this.lastHiredPersonName;
        },
        // In same fashion setter can be used to access the value and modify it
        set: function (value) {
            this.lastHiredPersonName = value;
        },
        enumerable: false,
        configurable: true
    });
    HRDepartment.prototype.setNewLastHiredName = function (name) {
        this.lastHiredPersonName = name;
    };
    return HRDepartment;
}(Department));
var HR = new HRDepartment('hry', 13);
// getter is accessed as a normal property, without any ()
console.log('HR getter', HR.mostRecentName);
// Setters work in similar fashion, we dont call them as methods
HR.mostRecentName = 'Mike';
console.log('HR setter', HR.mostRecentName);
// #5 static methods & properties
var Toolbox = /** @class */ (function () {
    function Toolbox() {
        // We cannot access those from constructor
        console.log(this.numberOfTools);
    }
    Toolbox.useHammer = function (times) {
        console.log("Uses hammer " + times + " times");
    };
    // static methods and properties are not accessed on the instance of the class but from the class itself.
    // Used for utility functions that we want to group or map together or global constants. Similar to Math constructor
    Toolbox.numberOfTools = 20;
    return Toolbox;
}());
Toolbox.useHammer(5);
var toolInstance = new Toolbox();
// Typescript throws error as this should not be used on a instance of a class
toolInstance.useHammer();
// #6 abstract classes
// We can force the developers to implement a certain method or overrwite it.
// Abstaract methods need to be used in abstract classes
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //  Without this method typescript will throw a error
    Dog.prototype.eat = function (food) {
        console.log("nom nom eathin " + food);
    };
    return Dog;
}(Animal));
// Typescript throws error as cat has no method eat() implemented
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
// We cannot make a instance of a abstract class
var animalInstance = new Animal();
