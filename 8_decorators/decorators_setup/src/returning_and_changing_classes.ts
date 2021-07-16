// Decorators are capable of returning value.
// Return value depends on type of decorator


// For class decorators we can return and replace a constructor or a class

function ChangeConstructor(){

    // We want to use generics to describe that the param of the function we are using (oldConstructor) will have a new kewyord used on it
    return function<T extends {new(...args: any[]): {}}>(oldConstructor: T){
        // We are extending the class to keep the original properties
        return class extends oldConstructor {
            constructor(...args: any[]){
                super()
            }
        }
    }
}

@ChangeConstructor()
class Animal {
    constructor(){

    }

}