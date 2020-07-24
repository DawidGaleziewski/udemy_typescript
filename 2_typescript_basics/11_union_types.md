Union types are used when we want to use more then one type

We can use | to select muliple types

```typescript
function combine(n1: number | string, n2: number | string) {
  const result = n1 + n2; // this will complain that we cannot add number and string
  return result;
}
```

Fixing issues with concatenation

```typescript
function combine(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  return result;
}

combine(5, "hello");
combine(5, 2);
```

This type of check very often will be required when working with union types.
