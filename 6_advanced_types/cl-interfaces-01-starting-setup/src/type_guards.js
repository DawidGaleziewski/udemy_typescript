// type guards help us with union types
// Type check for a primitive
var add = function (a, b) {
    // Typescript is strongly typed and would not allow us a type coarsion. We can do a type guard here
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
};
// Type check for object property
var printAnimalInformation = function (animal) {
    //  We cannot check a type of object as it is done on runtime and we do not have a type like Dog | Cat in vanilla js
    // We cannot do something like !animal.canSwim. TS wont allow us to check a property that may not exist
    //  We can hovewer use 'in' property
    if ('canSwim' in animal) {
        console.log("It can swim " + animal.canSwim);
    }
    if ('meowingVolume' in animal) {
        console.log("I can meow at volume of " + animal.meowingVolume);
    }
};
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo " + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    //  We can also type guard when using objects using instanceof
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(213);
    }
}
