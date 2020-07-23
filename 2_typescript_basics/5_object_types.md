typescript will show issues when we try to use property on a object that does not exist

```typescript
const person = {
  name: "Dawid",
  age: 30,
};

console.log(person.nickname);
```

Typescript will infer the types of values on the object properties
This is called a 'object type' and it describes what is in object

```typescript
const person: {
  name: string;
  age: number;
};
```

If we assign a type of object. Typescript will stop inferring on what types are the object properties. It will only care if person is a object

```typescript
const person: object = {
  name: "Dawid",
  age: 30,
};

const person: object;
```

Doing this will cause us to lose the ide suggestion of properties after dot.

## specialized object types

We can add a {} and specify a object type that has specific properties with specific types.

In this case typescript will throw a error as the job was not specified in type assignment and it accepts only two properties, name and age

```typescript
const person: {
  name: string;
  age: 30;
} = {
  name: "Dawid",
  age: 30,
  job: "developer",
};
```

IMPORTANT: we use semicolon and not comas in object types
This is a typescript representation of object type not a object

Also doing this is a bad code as in this case typescript infers the types of data simply by declaration of the object
