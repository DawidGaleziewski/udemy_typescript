// Object and tuples
var person = {
    name: "Dawid",
    age: 30,
    job: "developer",
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
person.role.push("admin");
person.role[0] = true;
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var favoriteActivities;
favoriteActivities = ["Sports", "Drinking", 2];
console.log(person.name);
// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person2 = {
    name: "Dawid",
    age: 30,
    job: "developer",
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
console.log(person2.role);
if (person2.role === Role.ADMIN) {
    console.log("user is admin");
}
