We can define callbacks as a function params and assign types to their arguments and return values

```typescript
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
```

Typescript will infer on its own that the param is a number here on result

Worth noting is that if we set return of callback as a void and we still return something, typescript wont care. Typescript simply allows us to return or not return whatever we want if the type is void
