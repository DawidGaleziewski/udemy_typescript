# When decorator is executed?

Decorator is executed when class is defined in JS, or a method is registered.

It is simply a function that runs.

It is NOT running when class is initiated

```Typescript
function Log(){};
// Executes now
@Log
class User {

}

// This will not trigger a decorator
const player1 = new User()
```