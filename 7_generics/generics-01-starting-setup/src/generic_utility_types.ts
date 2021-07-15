//# 1 Partial type - temporary make all properties of a object optional
interface CourseGoal {
    title: string;
    description: string,
    endsAt: Date
}

function createCourseGoal(title: string, description: string, date: Date):CourseGoal{

    // Partial tells TS that this object should be a certain type at the end. This helps us start with a empty object and add properties
    let courseGoal: Partial<CourseGoal> = {}

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.endsAt = date

    // At the end we have to convert the object type back to original one without Partial. We can do this by type casting
    return courseGoal as CourseGoal;
}

// # 2 readonly
// We can use Readonly partial to specify that array should not be mutated
const names1: Readonly<string[]> = ['Dave', 'John'];
names1.push('Test')

// ! there are much more utility types that allow us to further restrict our types: https://www.typescriptlang.org/docs/handbook/utility-types.html