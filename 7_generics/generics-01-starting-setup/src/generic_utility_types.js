function createCourseGoal(title, description, date) {
    // Partial tells TS that this object should be a certain type at the end. This helps us start with a empty object and add properties
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.endsAt = date;
    // At the end we have to convert the object type back to original one without Partial. We can do this by type casting
    return courseGoal;
}
// # 2 readonly
// We can use Readonly partial to specify that array should not be mutated
var names1 = ['Dave', 'John'];
names1.push('Test');
// ! there are much more utility types that allow us to further restrict our types: https://www.typescriptlang.org/docs/handbook/utility-types.html
