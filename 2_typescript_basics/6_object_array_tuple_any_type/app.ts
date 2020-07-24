// Object and tuples
const person: {
  name: string;
  age: number;
  job: string;
  hobbies: string[];
  // Tuple
  role: [number, string];
} = {
  name: "Dawid",
  age: 30,
  job: "developer",
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
person.role.push("admin");
person.role[0] = true;

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

let favoriteActivities: any[];
favoriteActivities = ["Sports", "Drinking", 2];
console.log(person.name);

// Enum
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person2 = {
  name: "Dawid",
  age: 30,
  job: "developer",
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

console.log(person2.role);

if (person2.role === Role.ADMIN) {
  console.log("user is admin");
}

//any
function anyAdd(val1: any, val2: any) {
  return val1 + val2;
}

anyAdd(100, "hello");
