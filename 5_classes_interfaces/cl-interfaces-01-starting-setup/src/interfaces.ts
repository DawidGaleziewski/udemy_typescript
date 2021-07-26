// # 1 Interface describes structure of a object and can be used as a custome type
interface Person {
  // Interface has key - type pairs
  name: string;
  age: number;
  hobby?: string;
  // we can also describe a method: methodName(paramName: type): returnValue
  greet(person: string): void;
}

// We can use a interface to check type that was not assigned any value and therefore was not inferenced upon
let user1: Person;

user1 = {
  name: "Dave",
  age: 30,
  greet: (name) => `Hi there ${name}`,
  // Typescript will remind us that this property should not exist on the Person object
  job: "Developer",
};

// #2 interfaces with classes

// Interface and type are not the same. interface can ONLY describe objects. Types can describe also union types. Type is more flexible. interface is more clearer

// ! use interface when you want to describe a structure of a object

// Interface can be used as a contact that class has to obey

// We canc reate a interface of a class. This will be a contract and every class will have to fallow this shape.

// Classes are great for sharing properties and methods between diffrent classes

interface BuyableItem {
  name: string;
  barCode: string;
  price: number;
  buy(buyerName: string): void;
}

interface EatableItem {
  name: string;
  tasty: boolean;
  eat(buyerName: string): void;
}

// In order to add a interface to a class we use 'implements' keyword
class Cake implements BuyableItem {
  constructor(
    public name: string,
    public barCode: string,
    public price: number
  ) {}

  buy(name: string) {
    console.log(`Here you are ${name}, that will be ${this.price}$`);
  }
}

// We can use many interfaces on a single class
// Ts will remind us with error on what is missing
class CandyBar implements BuyableItem, EatableItem {
  constructor(
    public name: string,
    public barCode: string,
    public price: number
  ) {}

  buy(name: string) {
    console.log(`Here you are ${name}, that will be ${this.price}$`);
  }
}

// # 3 why use interfaces?

// - when we want to force exsitance of a method or property on multiple classes

// - when we have parts of a code that will relly on this structure somewhere else

// #4 readonly interface
interface Furniture {
  readonly name: string;
}

// This will also work on a type.
// We cannot add other properties like private

// #5 extending interfaces
interface Eatable {
  tasty: boolean;
  calories: number;
}

interface Pet {
  play(): void;
}

// we use extends to inherit some properties from another type
// We can inherit also from multiple interfaces (!unlike normal inhertance where we can only inherit from one class)
interface EatableAnimal extends Eatable, Pet {
  readonly name: string;
  color: string;
  age: number;
}

class Dog implements EatableAnimal {}

// # 6 Interfaces as a function types
// Despite the fact we use interfaces for objects. Function is a object so we can use it to describe a function

// We can define function in interface same as we would with type keyweord
interface AddFn2 {
  (a: number, b: number): number;
}

let add2: AddFn2;

// Using Type in this example is probably more common
type AddFn = (a: number, b: number) => number;

let add: AddFn;

// # 7 optional parameters and properties

interface Task {
  readonly name: string;
  start: Date;
  // Optional property  is defined using ?
  end?: Date;
}

class Work implements Task {
  name = "Any work";
  start = new Date();
  end = new Date("2026-20-01");
}

class Breathe implements Task {
  name = "breathe to live";
  start = new Date();
  // No error due to fact this is optional
}

// Same will apply yo constructors and functions

const greet = (name?: string) => {
  if (!name) return "Hi!";
  return `Hi there ${name}`;
};

// If we assign a default value, the ? will be inferenced
const kill = (name = "all") => `kill ${name}`;
