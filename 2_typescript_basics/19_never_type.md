Never is type that functions can "return".
Never type is for functions that will for example thow an error therefore nver returning anything

```typescript
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 404);
```

This function above always crashes the script, therefore never returning anything

Infered type in this case will be void. So it is good practice to assign never type here
