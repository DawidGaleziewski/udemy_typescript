// Index types
// More flexible objects

interface ErrorContainer {
    id: string,
    // We do not know what properties we will have in advance
    // The syntax is [anyVariableName: type of key]
    [key: string] : string | number // This says that each property key will be a string and its value will be string or value
}

const errorBag: ErrorContainer = {
    id: 'E213',
    // We can now add as many properties as we want
    email: 'email is invalid',
    name: 'name must be filled'
}