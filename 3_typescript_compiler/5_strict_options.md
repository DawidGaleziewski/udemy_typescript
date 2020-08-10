If we have "strict": strue, all strict options will be enabled

- "noImplicitAny" - there cannot be default any. We have to set it by ourselfs
  It is ok for variables as it can be infered by typescript. Functions are not ok to be left without type

- "strictNullChecks" informs ts to strictly check for values that could potentially hold null. For example if we querySelector a DOM element it could be a DOM element or undefined
  Important is the use of exclamation mark here

```typescript
const button = document.querySelector("button")!; // If we are not 100% sure this will return dom element it would be better to error control by for example if statment
button.addEventListener("click", () => {
  console.log("test");
});
```
