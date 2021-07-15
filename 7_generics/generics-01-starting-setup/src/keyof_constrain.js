// Problem here is that we do not know if the object will have this key
// To solve this we can use keyof keyword.
function extractAndConvert(obj, key) {
    return obj[key];
}
// This is correct as name is a key on first param object
extractAndConvert({ name: 'john' }, 'name');
// This is not correct as object has no age key
extractAndConvert({ name: 'john' }, 'age');
