Typescript by default infers the return value of the function as well

```typescript
function add(n1: number, n2: number) {
  return n1 + n2;
}

// When we hover at the end we get ):number - this is the return type
//function add(n1: number, n2: number): number
```

We can assign return type on the end of the function after brackets by adding (): type

```typescript
function add(n1: number, n2: number): number {
  return n1 + n2;
}
```

If we do not have a specific reason to set the type we should let it be so that typescript do it for us

## void type

If the function does not return a value, typescript will infer void on it by default.

```typescript
function printResult(num: number) {
  console.log("Result: " + num);
}
// function printResult(num: number): void;
```

Technically javascript will return undefined for those kind of situation.
Undefined is also a type that is valid in typescript.
However if we assign a return type as undefined we will get a error.

```typescript
function printResult(num: number): undefined {
  // will show error. Typescript expects void not undefined. Typescript would suspect us to have retun statment bellow without a value
  console.log("Result: " + num);

  return; // now typescript is ok with us assigning undefined as a return type
}
```

Void is a standard and we will use it in most scenarios where function wont return a value
