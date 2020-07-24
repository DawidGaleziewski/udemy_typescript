# array type

Array type can be flexible or strick type in typescript

When we declare an array typescript will infere what type the data inside will be:

```typescript
const person = {
  name: "Dawid",
  age: 30,
  job: "developer",
  hobbies: ["Sports", "Cooking"],
};

// inferes to:
(property) hobbies: string[]
```

## Specific array item type

If we want to declare array ourselgs that will be of type strings only we can do it this way:

```typescript
let favoriteActivities: string[];
```

After that typescript will detect if we try to use wrong type i.e a number

```typescript
let favoriteActivities: string[];
favoriteActivities = ["Sports", 2];
```

## Mixed array type

we cen declare array to accept all kind of types

```typescript
let favoriteActivities: any[];
favoriteActivities = ["Sports", "Drinking", 2];
```

Any should not be used lightly as it is removing the benefits of typescript

Additional benefit is that typescript will detect that the object contains strings and it will help us in ide to pick methods used on string. It will also nag us if we use method that should not be used on the infered type

```typescript
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
```
