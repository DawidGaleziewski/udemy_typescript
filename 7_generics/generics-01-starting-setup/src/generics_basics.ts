// Generics do not exist in vanilla js

// Generic type is a type that is connected with other type, and is quite flexible regarding what kind of type it is.

// Array is a type. But it stores a data. Array needs information on what data it will store even if its any

// array of strings is a generic string[]. Generic types like Array<T> require 1 type argument
const names = ['Max', 'Manuel'];

// We can specify generics. It is same as string[] notation.
const surnames: Array<string> = [];

// Promise type. Promise has a type unknown as typescript does not know to what it will resolve. We can specify it will resolve to string
const promise:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this id done');
    }, 200)
});

promise.then(data => {
    // It is good to specify the generics as we get full ts support. We know what methods we can use for example
    data.split(' ');
})