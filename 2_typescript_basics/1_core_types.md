# TypeScript core types

- number - same as js - only one data type, no floats and ints like in js [-1, 1, 1.112]

- string - same as js
- boolean - same as js - no truthy or falsy

# basic types syntax

We declare types in parameters using this syntax:
n1: number

```typescript
function add(n1: number, n2: number) {
  return n1 + n2;
}
```

IDE will start naging us about the fact that we use incorrect type and it will cause a issue

```typescript
function add(n1: number, n2: number) {
  return n1 + n2;
}

// issue here
const number1 = "5";
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
```

tsc compiler will also nag us about this issue
"error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'."

It is important to know. Javascript compiled with with errors in tsc compiler will still work. Browser cannot nag us about types as it does not know about it and compiler will remove all the typescript boilerplate like types

TypeScript helps us during development not runtime!
We can setup typescript to block compilation
