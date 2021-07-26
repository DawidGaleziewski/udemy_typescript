# Primitive types

```Typescript

    interface {
        name: string;
        age: number;
        isAlive: boolean
    }

```

# Non-primitive types

```Typescript

    let person:object;

    let detailedPerson:{
        name: string;
        age: number
    }

    let hobbies:string[];

    let settings:{id: string, max: number, min:number}[]

```

## Non-primitive Typescript specific

1. Tuples

Tuple in JS is just a array with defined types and length

```Typescript

    let longLatGeolocation:[number, number]

```

2. Enums

Enum creates a array of numbers. But we can reffer to them as in object via key prop

```Typescript

    enum PermissionLevel = {
        ADMIN,
        USER,
        READ_ONLY
    }

    console.log(PermissionLevel.ADMIN)
```

# Union types

Combine multiple types

```typescript
type ServerResponse = number | string[] | null;
```

# Literals

When we want value to be specific.

```typescript
type PackageStatus = "send" | "delivered" | "unknown";
type MinimumAge = 18 | 21 | 37;
```

# Function return values

```typescript
function add(): number {}
function print(): void {}
```

# Describe function in detail

```typescript
let advancedFunction: (
  name: string,
  age: number,
  hobbies: { id: string; name: string }[]
) => void;
```

# Callbacks

```typescript

    const modValues = (array: {}[], cb: (value:{text: string}) => string)
```

# Unknown vs any type

any - disables all type checking
unknown - allows to assign any type but keeps the type checking

```typescript
let userInput: unknown;
let userInputAny: any;
let userName: string;

userInput = 5;
userInput = "Max";

userName = userInputAny;
userName = userInput; // will show a error
```

# never

Never is type that functions can "return".
Never type is for functions that will for example thow an error therefore nver returning anything

```typescript
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 404);
```

# ! symbol for not nullable type

If a type could be a null and we want to inform typescript that we are sure this wont happen.
Used when we get something from DOM and we are sure it will be there.

```Typescript
const button = document.querySelector("button")!;
```

# Diffrent ways of function declarations

```typescript
const add1 = (a: number, b: number = 1):number => a + b;

const add2: (a:number, b:number):number = (a, b) => a + b
```

# Classes

## Simple class declaration

```typescript
class Department {
  name: string;

  constructor(newName: string) {
    this.name = newName;
  }

  describe(prefix: string) {
    return `${prefix} - ${this.name} is a department with ${this.numberOfWorkers} workers`;
  }
}
```

## Private and protected keyword

Private properties cannot be accessed without a method.
They will also not be accessed if the class inherits this property.

Protected act the same way as private but allow for accessing the item if the class was extended

```typescript
class Cart {
  private items: string[] = [];

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
```

## Readonly keyword

Readonly property cannot be changed. It can be used with other keywords

```typescript
class Cart {
  protected readonly tax1: string;
  readonly tax2: string;
}
```

## Getters and setters

If we want to modify private keyword we need to use get or set methods

```typescript
class Cart {
  private items: string[] = [];

  get items() {
    return this.items;
  }

  set items(items: string[]) {
    this.items = items;
  }
}

const clothsCart = new Cart();

// Accessing a getter
clothsCart.getItems;

// Using setter
clothsCart.getItems = ["item1", "item2"];
```

## Static keyword

Static methods and keywords can be used only on class and not on the class instance

```typescript
class Toolbox {
  static readonly PI = 3.14;

  static getLength(item: string) {
    return item.length;
  }
}

Toolbox.getLength();
```

## Abstract classes

Abstract classes cannot be instanciated. We can use the as a blueprint for other classes and force usage of some methods

```typescript
abstract class Animal {
  abstract eat() {}
}

class Cat extends Animal {
  eat() {
    console.log("Meow, nom nom");
  }
}
```

## Interfaces with classes

In interface we can describe the properties and methods of a class

```typescript
interface EatableItem {
  name: string;
  calories: number;
  eat(): void;
}

interface Pet {
  name: string;
  race: string;
  play(): void;
}

// We can join multiple interfaces
interface Dog extends EatableItem, Pet {}

class Fafik implements Dog {}
```

# Advanced types

## Discriminated unions pattern

```typescript
// We create a discriminated types by ading a value like 'type' or 'kind'
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  // We can act on those types in switch statments
  switch (animal.type) {
    case "bird":
      return `flying in speed with ${animal.flyingSpeed}`;
    case "horse":
      return `horse running speed ${animal.runningSpeed}`;
  }
};

// Typescript will inform us that bird does not have running speed
moveAnimal({ type: "bird", runningSpeed: 20 });

// While horse has that property
moveAnimal({ type: "horse", runningSpeed: 20 });
```

## function overloads

We can describe multiple types for a function

```typescript
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number, b: string): string;
function combine(a: Mixed, b: Mixed) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
```

## index types. Flexible object keys [key] : type

When we do not know what key we will use

```typescript
interface ErrorContainer {
  id: string;
  // We do not know what properties we will have in advance
  // The syntax is [anyVariableName: type of key]
  [key: string]: string | number; // This says that each property key will be a string and its value will be string or value
}
```

## intersection types |

Intersection types will combine all properties of the interface

```typescript
interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;

let e: Employee = {
  id: 100,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(408)-897-5684",
};
```

## nullish coalescing

Storing default value in variable depending on the value beeing null or undefined

```typescript
// Way to store default value if the the value is falsy
const msg1 = userInput || "I will be displayed due to value beeing null";

// Way to store default only if the value is NOT falsy
const msg2 = userInput && "I will NOT be displayed";
```

## Optional chaining - checking if value exists

We can check if property exists on a object first before using it to avoid crash

```typescript
const fetchedTitle = fetchedUserData?.job?.title;
```

## type casting

We can use type casting when typescript is unable to detect the type of element. Like DOM elements.

We can do this with 'as' keyword or generics syntax

```typescript
// a) using generics syntax
const userInputElement1 = <HTMLInputElement>(
  document.querySelector("#user-input")
);
userInputElement1.value = "Hi there!";

// If we want to get the value of a object in the same line
(DOMElement as HTMLInputElement).value = "new value";

// b) using 'as'
const userInputElement2 = document.querySelector(
  "#user-input"
) as HTMLInputElement;
userInputElement2.value = "Hi there!";
```

## type guards

We can use type guards only with JS methods

```typescript
// a) Using typeof
if (typeof a === "number" || typeof b === "number") return a + b;

// b) Using 'in' for objects
if ("canSwim" in animal) return true;

// c) using instanceof for classes
if (vehicle instanceof Truck) return true;
```

# Generics

Generic type is a type that is connected with other type. Like array

```typescript
const surnames: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this id done");
  }, 200);
});
```

## Custome generics

We can use generics to pass to function identifiers of what will be used in function declaration.

After that we can pass to the function expression what kind of values will be used. However this is mostly redundant as ts will infer what value was used

```typescript
function mergeWithGenerics<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
```

## Constraining generics

We can constrain generics to be of specific type

```typescript
function mergeWithConstrains<T extends object, U extends object>(
  objA: T,
  objB: U
) {
  return Object.assign(objA, objB);
}
```

## keyof kayword

When we want to make sure one param is a property of another param

```typescript
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
```
