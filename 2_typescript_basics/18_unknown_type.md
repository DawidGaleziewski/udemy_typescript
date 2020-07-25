unknown allows us to assing any type of data. Just like any
Diffrance is that if we have another var that has assigned specific type, when we try to assign unkknown, typescript will complain, as it is not guaranteed that unknown will be that specific type.

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

Amazing feature is that typescript will know that if we check type in javascript inside of conditional for type, that it is safe to use.

So this is perfectly valid for typescript

```typescript
if (typeof userInput === "string") {
  userName = userInput;
}
```

unknwon is a great choice if we dont know the data type of incoming data, but we know what we want to do with it and how to handle this data
