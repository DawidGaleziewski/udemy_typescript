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
