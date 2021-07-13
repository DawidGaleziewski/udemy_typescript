// type guards help us with union types

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Type check for a primitive
const add = (a: Combinable, b: Combinable) => {
    // Typescript is strongly typed and would not allow us a type coarsion. We can do a type guard here
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString()
    }
    return a + b;
}

type Cat = {
    name: string;
    race: string;
    meowingVolume: number;
};

type Dog = {
    name: string;
    race: string;
    canSwim: boolean;
}

type UnknownAnimal = Cat | Dog;

// Type check for object property
const printAnimalInformation = (animal: UnknownAnimal) => {
    //  We cannot check a type of object as it is done on runtime and we do not have a type like Dog | Cat in vanilla js
    // We cannot do something like !animal.canSwim. TS wont allow us to check a property that may not exist
    //  We can hovewer use 'in' property
    if('canSwim' in animal){
        console.log(`It can swim ${animal.canSwim}`)
    }
    if('meowingVolume' in animal){
        console.log(`I can meow at volume of ${animal.meowingVolume}`)
    }
}

class Car {
    drive(){
        console.log('Driving...')
    }
}

class Truck {
    drive(){
        console.log('Driving...')
    }

    loadCargo(amount: number){
        console.log(`Loading cargo ${amount}`)
    }
}

const v1 = new Car();
const v2 = new Truck();

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    //  We can also type guard when using objects using instanceof
    if(vehicle instanceof Truck){
        vehicle.loadCargo(213);
    }
}