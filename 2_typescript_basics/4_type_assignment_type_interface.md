Type assignments are removed by ts compiler from the code on runetime

```typescript
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    return phrase + (n1 + n2);
  }
}
```

## why we do not do type assignments on variables?

Typescript uses 'type interface'. It does a great job on understanding what types are used in which variables.

```typescript
const number1 = 5;
let number2 = 2.8;
```

Typescript knows number1 will be always number as we initialize it with a number. What is more if its const typescript remembers this value will be always 5 as we cannot reassign the value of const when it comes to primitive types

In case of let typescript only is sure this is a number but not that it is 2.8 as it can change.

We can however do a type assignment to variables:

```typescript
let number2: number = 2.8;
```

But it is not considered a best practice. As typescript is able to inference what kind of value we will use in this variable. Therefore it is redundant. It is only good idea if we not assign any value to declared variable

```typescript
let number: number;
```

In this case if we assign the value letter typescript knows what value we want there

```typescript
let number3: number;
number3 = "3";
```

Therefore typescript will infere values of variables when we assign the values to it. And assigning type to it then is bad.
But if we only declare variable then we should assign type as typescript does not know what value to infere
