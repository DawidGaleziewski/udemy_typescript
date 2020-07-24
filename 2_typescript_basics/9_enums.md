# enum is a type that exists in typescript but not in javascript

enum are numbers that have labels and are global constants
enum {NEW, OLD}

Example of usage is when we have numbers that are symbols for diffrent roles like user, admin, sql admin etc

In standard js it is common to define constants like:

```javascript
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
```

Enum builds on this idea

enum values are very often declatred with uppercase like ADMIN but this is not a must

```typescript
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
```

We access the enum values this way:

```typescript
const person2 = {
  name: "Dawid",
  age: 30,
  job: "developer",
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};
```

## Custome enum number

If we change enum number and assign other one. Rest of the values in line will pick up on this and incremeant after this value

```typescript
// Enum
enum Role {
  ADMIN = 5,
  READ_ONLY, //6
  AUTHOR, //7
}
```

We can also assign a string

```typescript
// Enum
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY,
  AUTHOR,
}
```

In most cases we just want to leave it as it is
