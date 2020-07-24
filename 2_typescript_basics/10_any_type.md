Any is a type that does not tell typescript anything.

```typescript
function anyAdd(val1: any, val2: any) {
  return val1 + val2;
}

anyAdd(100, "hello");
```

Any should be used only in case we are desperate. Otherwise typescript becomes usless in checking types
