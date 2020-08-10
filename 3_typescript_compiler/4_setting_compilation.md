# Compilation options

most of the compilation options will not be used. Some worth notting is:

- "target" - for which version of javascript we want to compile the code
  So typescript can compile code to es5
  Sometimes we do not want to use typescript compiler as we will use other tools like babel/webpack

```javascript
{
"target": "es6"
}

```

- "module" - importing/exporting files

- "lib" - specify which default objects and features typescript notes.
  Like DOM.

  Typescript will not be sure if element exists if we take it from DOM

  ```typescript
  const button = document.querySelector("button");
  button.addEventListener();

  //We can workaround this issue by adding a ! on the end
  const button = document.querySelector("button")!;
  ```

  Important thing is that typescript will know that document exists and has a addEventListener method on it.

  This is due to lib option. If it is not set as per default it will set some values dependant on the "target option".

  TS will also assume all DOM APIs are valid.

  There are pre-defined keywords in lib options. For example if we want to make dom available:

  ```typescript
    "lib": ["dom", "es6", "dom.iterable", "scripthost"]
  ```

  - "allowJS"
    typescript will compile files that do not end in .ts

    It would be useful if we have a project that would use both ts and js files

  - jsx - for react projects

  - source maps - helps us with debbugging projects

  this option will allow us to debug our typescript code and not the javascript code in chrome devtools

  - outDir - specifies where the files will be outputed

  - "rootDir" - compiler will look only in this folder for files

  It is comment to set structure as:

  ```typescript
    "outDir": "./dist",
    "rootDir": "./src/"
  ```

  - "noEmitOnError" - wont create js files if comiplation error is thrown.

## Strict options

- "strict" will enable all options
