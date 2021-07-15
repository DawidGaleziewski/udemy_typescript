// #1 generics basics
// Generics do not exist in vanilla js
// Generic type is a type that is connected with other type, and is quite flexible regarding what kind of type it is.
// Array is a type. But it stores a data. Array needs information on what data it will store even if its any
// array of strings is a generic string[]. Generic types like Array<T> require 1 type argument
var names = ['Max', 'Manuel'];
// We can specify generics. It is same as string[] notation.
var surnames = [];
// Promise type. Promise has a type unknown as typescript does not know to what it will resolve. We can specify it will resolve to string
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('this id done');
    }, 200);
});
promise.then(function (data) {
    // It is good to specify the generics as we get full ts support. We know what methods we can use for example
    data.split(' ');
});
// #2 custome generics
var merge = function (objA, objB) {
    return Object.assign(objA, objB);
};
// The problem with this is that we cannot access name or age on the result of the function
var mergedObj = merge({ name: 'Max' }, { age: 23 });
// This will throw a error
mergedObj.age;
// We can fix it always by type casting
var mergedObj2 = merge({ name: 'Max' }, { age: 23 });
mergedObj2.age;
// Better way is to use generics
// We define two identifiers <T>
// This will show us it is yielding T & U - intersection of T and U
function mergeWithGenerics(objA, objB) {
    return Object.assign(objA, objB);
}
// Now typescript will understand what kind of objects we are storying inside
var mergedObjWithGenerics = mergeWithGenerics({ name: 'Max' }, { age: 23 });
mergedObjWithGenerics.age;
/**
 * This is due to fact that object is a higly non specific type. Typescript is able to infer only that we return intersection of unknown object, which is a another unknwon object.
 *
 * By using generics typescript understands those objects will be of diffrent types
 *
 * Typescript also knows that <T, U> are dynamic types and can change. When we pass those to the function typescript will infer the outcome knowing the object will have a name and age values
 *  */
// We can allo fill out what kind of types T and U should be using this syntax. This only example as doing this is redundent due to ts infering the value
var manuallyInfer = mergeWithGenerics({ race: 'Husky' }, { howls: true });
// #3 constraining the types of generics
// If we add a number, the js will fail siliently. TS does not see a problem as the arguments T U can be of any type
var wrongMerge = mergeWithGenerics({ race: 'Husky' }, 2);
// We can restrict the use of the argument by using extends keyword. This will tell typescript that the argument can be anything as long as it is a object
function mergeWithConstrains(objA, objB) {
    return Object.assign(objA, objB);
}
// TS wont allow us to use a type that is not a object
var wrongMerge2 = mergeWithConstrains({ name: 'john' }, 2);
// Another example of generic function
function countAndPrint(element) {
    var descriptionText = 'Got no value';
    // Problem is that TS does not know that the element has a length
    if (element.length > 0) {
        descriptionText = "Got " + element.length + " length";
    }
    return [element, descriptionText];
}
// Typescript will understand what arguments have length property and will allow them to be used
var correct1 = countAndPrint('Test');
var correct2 = countAndPrint([1, 2, 34]);
// This wont be alloed as number has no length property
var wrongNumber = countAndPrint(1);
