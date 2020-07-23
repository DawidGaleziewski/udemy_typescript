# what is typescript, why to use it ?

Typescript is a javascript superset.
It is a language building on top of javascript. Using javascript to build additional features on top of it.

Typescript cannot be executed by browser or node.

typescript is also a complier that we run in order to compile our code into javascript

Javascript will be complied with 'workarounds'

TypeScript adds types to javascript.
This helps us to catch errors durring compilations. Giving us a extra error checking

i.e if we pass two strings in arguments where we want numbers

```javascript
function add(num1, num2) {
  return num1 + num2;
}

console.log(add("a", "b"));
```
