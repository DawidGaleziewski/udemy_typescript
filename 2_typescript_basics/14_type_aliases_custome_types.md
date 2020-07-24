We create type aliases by type keyword.
It is common ptactice to store type unions inside type alias

```typescript
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

// Union types
function combine(
  n1: Combinable,
  n2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}
```

We can also store object types

```typescript
type User = {
  name: string;
  age: number;
};
```
