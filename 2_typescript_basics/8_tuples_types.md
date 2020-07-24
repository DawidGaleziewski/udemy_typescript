# Tuple is a type that does not exist in vanilla js and is introduced in typescript

Tupe is a array who has fixed length and fixed types

We declare tuple this way:

```typescript
role: [number, string];
```

In a object

```typescript
const person: {
  name: string;
  age: number;
  job: string;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Dawid",
  age: 30,
  job: "developer",
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
```

Tuples allow to push another objects unfortunetly in typescript. So typescript wont catch this error:

```typescript
person.role.push("admin");
```

But we cannot asign something that is diffrent data type:

```typescript
person.role[0] = true;
```
