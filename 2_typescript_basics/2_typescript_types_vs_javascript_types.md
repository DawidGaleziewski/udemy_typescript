Javascript is dynamically typed. Typescript is staticly typed.
We have measures to check types in javascript

```typescript
function add(n1: number, n2: number) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect input!");
  }
  return n1 + n2;
}
```

The diffrence is however that typescript allows us to avoid a issue durring development. This error can be avoided before the runtime which is better.

Also javascript knows only about few types. That is why runtime checking with javascript is not as powerful as the typescript way

It is important to remember. With typescript we only get type checking during the development. Not during the runtime as those features are not available in js engine
