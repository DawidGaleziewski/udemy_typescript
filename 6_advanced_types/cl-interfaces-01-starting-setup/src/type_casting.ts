// Type casting is usefull when typescript is unable to detect certain type but we as developers know this will be the case

// I.e we have a dom element

// Typescript does not analyze html elements and does not know what exactly is in this element or what tag is it.
const userInputElement = document.querySelector('#user-input')
userInputElement.value ='Hi there!'

// There are two ways of type casting

// a) use <> in front of the element we will cast the type on
// We hovever have that kind of similar syntax in react in order to parse some build tools
const userInputElement1 = <HTMLInputElement>document.querySelector('#user-input')
userInputElement1.value ='Hi there!'

// b) second way is using 'as' keyword
const userInputElement2 = document.querySelector('#user-input') as HTMLInputElement
userInputElement2.value ='Hi there!'

// Other fonrm of typescript is using !. This informs typescript that expression will never yield null

const DOMElement = document.querySelector('#IWillAlwaysBethere')!

// Usefull trick also is that we can wrap and evaluate a type casting before other operations like

if(DOMElement){
    (DOMElement as HTMLInputElement).value ='new value';
}



