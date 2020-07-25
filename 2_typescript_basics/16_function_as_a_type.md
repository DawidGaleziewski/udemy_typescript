We can assign function to a variable

```typescript
let combineValues: Function;
combineValues = add;
combineValues = 5;
```

we can define function in fine detail
Typescript uses arrow function syntax to define function type;
We have to name params and we can define their types. The name does not matter

```typescript
let combineValues: (a: number, b: number) => number;
combineValues = add;
combineValues = printResult;
combineValues = 5;
```
