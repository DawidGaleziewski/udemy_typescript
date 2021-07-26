// #1 Simple class
class Department {
  // This is not a object! This is a field of the class
  name: string;
  numberOfWorkers: number = 0;

  constructor(newName: string, numberOfWorkers: number) {
    this.name = newName;
    this.numberOfWorkers = numberOfWorkers;
  }

  // Methods
  // We assign the type as the object which is a Department class
  // This pattern is usefull as it will prevent us from calling describe on another object without name param it needs
  describe(this: Department, prefix: string) {
    return `${prefix} - ${this.name} is a department with ${this.numberOfWorkers} workers`;
  }
}

const ITDepartment = new Department("IT", 20);
console.log(ITDepartment, ITDepartment.describe("test prefix"));

// Example of issue prevented with this passed to args
const ITCopy = {
  // name: 'test name'
  describe: ITDepartment.describe,
};

// ITCopy.describe('test prefix')

// #2 Classes with private and public methods
class Cart {
  // private typescript  keyword will not allow for this to be changed without method usage. It is a modifier keyword
  private items: string[] = [];

  // In contrast we have a public keyword. This is however used by default so we do not have to use it
  public type: string;

  constructor(type: string) {
    this.type = type;
  }

  addItem(item: string) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}

const cart = new Cart("clothes");
cart.addItem("t-shirt 1");
cart.addItem("pants");
console.log("cart items ", cart.getItems());

// This will throw a error due to fact that it is a private item
// cart.items.push('new item that should not been added')

// #3 Shorthand - avoid repetition in constructor

class CartShorthand {
  // public type: string;

  // In this case we have to use public keyword as this will tell typescript we also want to create properties in class for this same name
  // readonly typescript modifier - property CANT be changed
  constructor(
    public type: string,
    protected readonly id: string,
    protected items: string[] = []
  ) {
    this.type = type;
    this.id = id;
  }

  addItem(item: string) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
  getId() {
    return this.id;
  }
}

// #4 inheritance
class ITsDepartment extends Department {
  constructor(
    newName: string,
    numberOfWorkers: number = 0,
    public admins: string[]
  ) {
    super(newName, numberOfWorkers);
    // If we did not use the shorthand we should add properties here like this.admins = admins
  }
}

const IT = new ITsDepartment("Helpdesk", 32, ["Mark", " Matt"]);

console.log("IT", IT.describe("Ilfords"));

// Protected is a kaeword that can be inherited. Private properties CANNOT be inherited
class CartHealthy extends CartShorthand {
  constructor(
    public type: string,
    protected readonly id: string,
    protected items: string[] = []
  ) {
    super(type, id, items);
  }

  addItem(item: string) {
    if (item === "sugar") {
      return;
    }
    this.items.push(item);
  }
}

//#4 getters and setters
class HRDepartment extends Department {
  private lastHiredPersonName: string;
  //If we want to modify a private value we will need to use a getter method
  get mostRecentName() {
    // getter needs to return something
    return this.lastHiredPersonName;
  }

  // In same fashion setter can be used to access the value and modify it
  set mostRecentName(value: string) {
    this.lastHiredPersonName = value;
  }

  constructor(newName: string, numberOfWorkers: number) {
    super(newName, numberOfWorkers);
    this.lastHiredPersonName = "Johny B";
  }

  setNewLastHiredName(name: string) {
    this.lastHiredPersonName = name;
  }
}

const HR = new HRDepartment("hry", 13);

// getter is accessed as a normal property, without any ()
console.log("HR getter", HR.mostRecentName);

// Setters work in similar fashion, we dont call them as methods
HR.mostRecentName = "Mike";
console.log("HR setter", HR.mostRecentName);

// #5 static methods & properties

class Toolbox {
  // static methods and properties are not accessed on the instance of the class but from the class itself.
  // Used for utility functions that we want to group or map together or global constants. Similar to Math constructor
  static numberOfTools = 20;
  static useHammer(times: number) {
    console.log(`Uses hammer ${times} times`);
  }

  constructor() {
    // We cannot access those from constructor
    console.log(this.numberOfTools);
  }
}

Toolbox.useHammer(5);

const toolInstance = new Toolbox();

// Typescript throws error as this should not be used on a instance of a class
toolInstance.useHammer();

// #6 abstract classes

// We can force the developers to implement a certain method or overrwite it.

// Abstaract methods need to be used in abstract classes

abstract class Animal {
  // It cannot have a {} and requires a return type
  abstract eat(food: "string"): void;
}

class Dog extends Animal {
  //  Without this method typescript will throw a error
  eat(food: "string") {
    console.log(`nom nom eathin ${food}`);
  }
}

// Typescript throws error as cat has no method eat() implemented
class Cat extends Animal {}

// We cannot make a instance of a abstract class
const animalInstance = new Animal();

// #7 private constructors

// Connected to singleton pattern
class OneOfAKind {
  // Instance of this class
  private static instance: OneOfAKind;
  private constructor(public id: number) {}

  static getInstance() {
    // Check if we have a instance and return a new one only in this case
    if (this.instance) {
      return this.instance;
    }

    // If there is no instance we can create it due to the fact that we can use a private constructor insde the class
    this.instance = new OneOfAKind(1);
    return this.instance;
  }
}

// Now we cannot create a new instance of the class
const instanceOfOOK = new OneOfAKind(2);

// We can get a instance of the class hover using its class
const instanceSingletton = OneOfAKind.getInstance();
